System.register(['./mock-employees', 'angular2/core', './mock-technicalQuestions'], function(exports_1, context_1) {
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
    var mock_employees_1, core_1, mock_technicalQuestions_1;
    var EmployeeService;
    return {
        setters:[
            function (mock_employees_1_1) {
                mock_employees_1 = mock_employees_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_technicalQuestions_1_1) {
                mock_technicalQuestions_1 = mock_technicalQuestions_1_1;
            }],
        execute: function() {
            EmployeeService = (function () {
                function EmployeeService() {
                }
                EmployeeService.prototype.getEmployees = function () {
                    if (localStorage.getItem("EMPLOYEESDATA") === null) {
                        return Promise.resolve(mock_employees_1.EMPLOYEES).then(function (employee) {
                            for (var i = 0; i < employee.length; i++) {
                                employee[i].technicalQuestions = mock_technicalQuestions_1.TECHNICALQUESTIONS;
                            }
                            localStorage.setItem("EMPLOYEESDATA", JSON.stringify(employee));
                            return employee;
                        });
                    }
                    else {
                        return Promise.resolve(JSON.parse(localStorage.getItem("EMPLOYEESDATA")));
                    }
                };
                EmployeeService.prototype.saveGeneralQuestions = function (EMPLOYEESDATA) {
                    localStorage.setItem("EMPLOYEESDATA", JSON.stringify(EMPLOYEESDATA));
                };
                EmployeeService.prototype.getEmployee = function (id) {
                    return Promise.resolve(mock_employees_1.EMPLOYEES).then(function (employee) { return employee.filter(function (employee) { return employee.id === id; })[0]; });
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EmployeeService);
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    }
});
//# sourceMappingURL=employee.service.js.map