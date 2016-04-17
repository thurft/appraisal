<?php

/**
 * Created by IntelliJ IDEA.
 * User: jonathanmoreirazuvic
 * Date: 02/02/16
 * Time: 15:05
 */

include_once 'vendor/autoload.php';

use League\Csv\Reader;

class import
{
    private $_db;

    function __construct() {
        if (!ini_get("auto_detect_line_endings")) {
            ini_set("auto_detect_line_endings", '1');
        }
        echo "<pre>";
        $this->dbConnect();

        $reader = Reader::createFromPath('ofx.csv');

        $type = "amex";

        // Get all data from a given date
        foreach ($reader as $index => $row) {
            $date = \DateTime::createFromFormat('d/m/Y', $row[0])->format('Y-m-d');
            $query = $this->_db->prepare("SELECT * FROM statement WHERE transaction_date >= ? AND statement_from = ?" );
            $query->bindParam(1,$date);
            $query->bindParam(2,$type);
            $query->execute();
            $results = $query->fetchAll(PDO::FETCH_ASSOC);
            break;
        }

        // Check that the data to insert doesn't exist already in the db
        foreach ($reader as $index => $row)
        {
            $date = \DateTime::createFromFormat('d/m/Y', $row[0])->format('Y-m-d');

           if( !empty($results) )
           {
               $continue = false;
                foreach($results as $result)
               {
                    if($result["transaction_reference"] == $row[1])
                    {
                        $continue = true;
                        break;
                    }
               }

               if($continue)
               {
                   //continue;
               }
           }

            $insert_values[] = array($row[3],$type,$date,$row[2],$row[1]);

        }
        unset($reader);

        if(!empty($insert_values))
        {
            $resultIds = $this->batchInsert($insert_values);
            $this->addData($resultIds);

        } else {
            echo "Nothing to insert\n";
        }
    }

    private function addData($firstAndLastIds)
    {
        $sectionQuery = $this->_db->query("
                                           SELECT *
                                           FROM section as s
                                           INNER JOIN section_regex as sr
                                           ON s.id = sr.section_id
                                          ");
        $sectionQueryR = $sectionQuery->fetchAll(PDO::FETCH_ASSOC);
        foreach($sectionQueryR as $srexqid)
        {
            $regXQuery = $this->_db->prepare("SELECT * FROM regex WHERE id = ?");
            $regXQuery->bindParam(1,$srexqid["regex_id"]);
            $regXQuery->execute();
            $regXQueryR = $regXQuery->fetchAll(PDO::FETCH_ASSOC);
            $sectionRegx["sID" .$srexqid["section_id"]][] = $regXQueryR[0]["regex"];
        }
        $recordsQuery = $this->_db->prepare("
                                           SELECT *
                                           FROM statement
                                           WHERE id >= :id1 AND id <= :id2
                                          ");
        $recordsQuery->bindValue(":id1",$firstAndLastIds["first_inserted_id"]);
        $recordsQuery->bindValue(":id2",$firstAndLastIds["last_inserted_id"]);
        $recordsQuery->execute();
        $recordsResults = $recordsQuery->fetchAll(PDO::FETCH_ASSOC);

        $sectionData = [];
        foreach($sectionRegx as  $sIDString => $regXArray)
        {
            foreach($regXArray as $regx) {
                foreach($recordsResults as $record)
                {
                    if(strpos($record["description"],$regx) !== false)
                    {
                        $date = \DateTime::createFromFormat('Y-m-d', $record["transaction_date"])->format('my');

                        if(!isset($sectionData[$date][$sIDString] )) $sectionData[$date][$sIDString] = 0;
                        if(!isset($sectionData[$date]["sID1"] )) $sectionData[$date]["sID1"] = 0;

                        $sectionData[$date][$sIDString] += $record["amount"];
                        $sectionData[$date]["sID1"] += $record["amount"];
                    }
                }
            }
        }

        foreach($sectionData as $sectionDate => $sections)
        {
            foreach($sections as $sectionId => $sectionAmount)
            {
                $sectionId = explode("sID",$sectionId)[1];

                $date = \DateTime::createFromFormat('my', $sectionDate)->format('Y-m-01');
                $previousDataQuery = $this->_db->prepare("SELECT * FROM data
                                                  WHERE section_id=:section_id AND date=:date");
                $previousDataQuery->bindValue(":section_id",$sectionId);
                $previousDataQuery->bindValue(":date",$date);
                $previousDataQuery->execute();
                $previousDataQuery = $previousDataQuery->fetch(PDO::FETCH_ASSOC);
                if(empty($previousDataQuery))
                {
                    $insertQuery = $this->_db->prepare("INSERT INTO data (section_id, date, amount)
                                                VALUES (:section_id, :date, :amount)");
                    $insertQuery->bindValue(":section_id",$sectionId);
                    $insertQuery->bindValue(":date",$date);
                    $insertQuery->bindValue(":amount",$sectionAmount);
                    $insertQuery->execute();
                } else {
                    $insertQuery = $this->_db->prepare("UPDATE data SET amount=amount+:amount
                                                WHERE section_id=:section_id AND date=:date");
                    $insertQuery->bindValue(":section_id",$sectionId);
                    $insertQuery->bindValue(":date",$date);
                    $insertQuery->bindValue(":amount",$sectionAmount);
                    $insertQuery->execute();
                }
            }

        }
    }


    public function batchInsert($statement)
    {
        $nbRows           = count($statement);
        $nbValues         = "";
        $values_to_insert = [];
        $i                = 0;

        while($nbRows > $i)
        {
            $i++;
            $nbValues .= "(?,?,?,?,?)";
            if ($nbRows !== $i)
            {
                $nbValues .=",";
            }
        }

        foreach($statement as $values ){
            $values_to_insert = array_merge($values_to_insert, $values);
        }

        $this->_db->beginTransaction();

        $sql = "INSERT INTO statement (description, statement_from, transaction_date, amount, transaction_reference) VALUES " . $nbValues;
        $stmt = $this->_db->prepare ($sql);

        try {
            $stmt->execute($values_to_insert);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }

        $lastId = $this->_db->lastInsertId();

        $this->_db->commit();

        // Get First inserted item by this batch
        $query = $this->_db->prepare("SELECT id FROM statement WHERE transaction_reference = ?" );
        $query->bindParam(1,$statement[0][4]);

        $query->execute();
        $results = $query->fetch(PDO::FETCH_ASSOC);
        $firstInsertedId = $results["id"];

        return ["first_inserted_id" => $firstInsertedId,
                "last_inserted_id"  => $lastId];
    }

    public function dbConnect()
    {
        try {
            $this->_db = new PDO('mysql:host=localhost;dbname=bank', "root", "");
        }catch (Exception $e) {
            echo "Problem Connecting to the db: ". $e->getMessage();
        }
    }

    public function import()
    {
        // $this->_db->query("SELECT * FROM statement WHERE statement_from = 'amex' and transaction_date >=" .$date);
    }


}

$a = new import();
