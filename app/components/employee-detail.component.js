System.register(['angular2/core', 'angular2/router', '../object/obj.employee', '../services/employee.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, obj_employee_1, employee_service_1;
    var EmployeeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (obj_employee_1_1) {
                obj_employee_1 = obj_employee_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            EmployeeDetailComponent = (function () {
                function EmployeeDetailComponent(_employeeService, _routeParams) {
                    this._employeeService = _employeeService;
                    this._routeParams = _routeParams;
                }
                EmployeeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._employeeService.getEmployee(id)
                        .then(function (employee) { return _this.employee = employee; });
                };
                EmployeeDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', obj_employee_1.Employee)
                ], EmployeeDetailComponent.prototype, "employee", void 0);
                EmployeeDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-employee-detail',
                        templateUrl: './app/employee-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.RouteParams])
                ], EmployeeDetailComponent);
                return EmployeeDetailComponent;
            }());
            exports_1("EmployeeDetailComponent", EmployeeDetailComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=employee-detail.component.js.map