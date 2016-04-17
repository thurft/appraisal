import { Employee } from '../object/obj.employee';
import { EMPLOYEES } from './mock-employees';
import { Injectable } from 'angular2/core';
import { TECHNICALQUESTIONS } from './mock-technicalQuestions';



@Injectable()
export class EmployeeService {

  getEmployees() {
    if(localStorage.getItem("EMPLOYEESDATA") === null) {
        return Promise.resolve(EMPLOYEES).then(function(employee) {
            for (var i = 0; i < employee.length; i++) {
              employee[i].technicalQuestions = TECHNICALQUESTIONS;
            }

            localStorage.setItem("EMPLOYEESDATA", JSON.stringify(employee));
            return employee;
        });
    } else {
      return Promise.resolve(JSON.parse(localStorage.getItem("EMPLOYEESDATA")));
    }
  }

  saveGeneralQuestions(EMPLOYEESDATA) {
    localStorage.setItem("EMPLOYEESDATA", JSON.stringify(EMPLOYEESDATA));
  }

  getEmployee(id: number) {
    return Promise.resolve(EMPLOYEES).then(
      employee => employee.filter(employee => employee.id === id)[0]
    );
  }
}
