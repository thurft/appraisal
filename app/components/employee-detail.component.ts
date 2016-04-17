import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Employee } from '../object/obj.employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'my-employee-detail',
  templateUrl: './app/employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;

  constructor(
    private _employeeService: EmployeeService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._employeeService.getEmployee(id)
      .then(employee => this.employee = employee);
  }

  goBack() {
    window.history.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/