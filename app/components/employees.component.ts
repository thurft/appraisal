import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Employee } from '../object/obj.employee';
import { EmployeeService } from '../services/employee.service';

import { TechnicalQuestions } from '../object/obj.technicalQuestions';
import { TechnicalQuestionService } from '../services/technicalQuestion.service';
import { ScaleComponent } from './scales.component';

import { ParseName } from '../pipe/pipe.parsename';

@Component({
  selector: 'my-employees',
  templateUrl: './app/employees.component.html',
  directives: [ScaleComponent],
  pipes: [ParseName]
})

export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  technicalQuestions: TechnicalQuestions[];
  maxtechnicalQuestions: number;



  constructor(
    private _router: Router,
    private _employeeService: EmployeeService,
    private _technicalQuestions: TechnicalQuestionService) { }

  getEmployees() {
    this._employeeService.getEmployees().then((employees) => {
      this.employees = employees;
      this.maxtechnicalQuestions = employees[0].technicalQuestions.length;
    });
  }


  updateQuestionRequest(question) {
    console.log("USING SELECTED Employee:" + this.selectedEmployee.id);
    console.log("USING THE FOLLOWING EMPLOYEE OBJ BEFORE SAVING:");
    console.log(this.employees);
    /*
      El siguiente FOR LOOP por alguna razon es redudante dado que el valor en employees ya esta updated!

      ES RE LOCO.. y lo cambia en los 3 lugares!

     */

    for (var ei = 0; ei < this.employees.length; ei++){
      if(this.employees[ei].id === this.selectedEmployee.id) {
        for (var i = 0; i < this.employees[ei].technicalQuestions.length; i++) {
          if (this.employees[ei].technicalQuestions[i].id === question.id) {
            this.employees[ei].technicalAnsweredQuestionsNumber += 1;
            console.log("Employee ID UPDATED:" + this.employees[ei].id);
            this.employees[ei].technicalQuestions[i].value = question.value;
            break;
          }
        }
        break;
      }
    }
    console.log("SAVING THE FOLLOWING EMPLOYEE OBJ:");
    console.log(this.employees);
    this._employeeService.saveGeneralQuestions(this.employees);
  }


  ngOnInit() {
    this.getEmployees()
  }

  onSelect(employee: Employee) { this.selectedEmployee = employee;  console.log(this.selectedEmployee);}


}
