System.register(['angular2/core', 'angular2/router', '../services/employee.service', '../services/technicalQuestion.service', './scales.component', '../pipe/pipe.parsename'], function(exports_1, context_1) {
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
    var core_1, router_1, employee_service_1, technicalQuestion_service_1, scales_component_1, pipe_parsename_1;
    var EmployeesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (technicalQuestion_service_1_1) {
                technicalQuestion_service_1 = technicalQuestion_service_1_1;
            },
            function (scales_component_1_1) {
                scales_component_1 = scales_component_1_1;
            },
            function (pipe_parsename_1_1) {
                pipe_parsename_1 = pipe_parsename_1_1;
            }],
        execute: function() {
            EmployeesComponent = (function () {
                function EmployeesComponent(_router, _employeeService, _technicalQuestions) {
                    this._router = _router;
                    this._employeeService = _employeeService;
                    this._technicalQuestions = _technicalQuestions;
                }
                EmployeesComponent.prototype.getEmployees = function () {
                    var _this = this;
                    this._employeeService.getEmployees().then(function (employees) {
                        _this.employees = employees;
                        _this.maxtechnicalQuestions = employees[0].technicalQuestions.length;
                    });
                };
                EmployeesComponent.prototype.updateQuestionRequest = function (question) {
                    console.log("SELECTEDEmployee ID:" + this.selectedEmployee.id);
                    for (var ei = 0; ei < this.employees.length; ei++) {
                        if (this.employees[ei].id === this.selectedEmployee.id) {
                            for (var i = 0; i < this.employees[ei].technicalQuestions.length; i++) {
                                if (this.employees[ei].technicalQuestions[i].id === question.id) {
                                    this.employees[ei].technicalAnsweredQuestionsNumber += 1;
                                    console.log("Employee ID UPDATED:" + this.employees[ei]);
                                    this.employees[ei].technicalQuestions[i].value = question.value;
                                    this.selectedEmployee = this.employees[ei];
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    this._employeeService.saveGeneralQuestions(this.employees);
                };
                EmployeesComponent.prototype.answeredQuestion = function (value, index, data) {
                    for (var i = 0; i < this.selectedEmployee.technicalQuestions; i++) {
                        console.log("index: " + index + " i:" + i + " value: " + this.selectedEmployee.technicalQuestions[i].value);
                        if (this.selectedEmployee.technicalQuestions[i].value === null && index == i) {
                            return false;
                        }
                    }
                    return true;
                };
                EmployeesComponent.prototype.ngOnInit = function () {
                    this.getEmployees();
                };
                EmployeesComponent.prototype.onSelect = function (employee) { this.selectedEmployee = employee; console.log(this.selectedEmployee); };
                EmployeesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-employees',
                        templateUrl: './app/employees.component.html',
                        directives: [scales_component_1.ScaleComponent],
                        pipes: [pipe_parsename_1.ParseName]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, employee_service_1.EmployeeService, technicalQuestion_service_1.TechnicalQuestionService])
                ], EmployeesComponent);
                return EmployeesComponent;
            }());
            exports_1("EmployeesComponent", EmployeesComponent);
        }
    }
});
//# sourceMappingURL=Employees.component.js.map