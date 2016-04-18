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
    if(this.selectedEmployee.technicalAnsweredQuestionsNumber == 0){
        this.selectedEmployee.technicalAnsweredQuestionsNumber += 1;
    }
    this.selectedEmployee.technicalAnsweredQuestionsNumber += 1;

    console.log(this.employees);

    this._employeeService.saveGeneralQuestions(this.employees);
  }


  ngOnInit() {
    this.getEmployees()
  }

  onSelect(employee: Employee) { this.selectedEmployee = employee;}

    showQuestion(value,index,technicalQuestions){
        if ( value === null && index === 0) {
            return false;
        }else if (index !== 0 && technicalQuestions[0].value !== null && value === null &&  technicalQuestions[index-1].value !==null ) {
            return false;
        }
        return true;
    }



}
