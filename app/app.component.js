System.register(['angular2/core', 'angular2/router', './services/employee.service', './services/scale.service', './services/generalQuestion.service', './components/generalquestions.component.ts', './components/Employees.component', './components/employee-detail.component', './services/technicalQuestion.service'], function(exports_1, context_1) {
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
    var core_1, router_1, employee_service_1, scale_service_1, generalQuestion_service_1, generalquestions_component_ts_1, Employees_component_1, employee_detail_component_1, technicalQuestion_service_1;
    var AppComponent;
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
            function (scale_service_1_1) {
                scale_service_1 = scale_service_1_1;
            },
            function (generalQuestion_service_1_1) {
                generalQuestion_service_1 = generalQuestion_service_1_1;
            },
            function (generalquestions_component_ts_1_1) {
                generalquestions_component_ts_1 = generalquestions_component_ts_1_1;
            },
            function (Employees_component_1_1) {
                Employees_component_1 = Employees_component_1_1;
            },
            function (employee_detail_component_1_1) {
                employee_detail_component_1 = employee_detail_component_1_1;
            },
            function (technicalQuestion_service_1_1) {
                technicalQuestion_service_1 = technicalQuestion_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = '360 Degree Feedback';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n    <nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\">\n      <div id=\"navbar\">\n        <nav class=\"nav navbar-nav pull-xs-left\">\n          <a [routerLink]=\"['GeneralQuestions']\" class=\"nav-item nav-link\">General Questions</a>\n          <a [routerLink]=\"['Employees']\" class=\"nav-item nav-link\">Employees</a>\n        </nav>\n      </div>\n    </nav>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            employee_service_1.EmployeeService,
                            generalQuestion_service_1.GeneralQuestionService,
                            scale_service_1.ScaleService,
                            technicalQuestion_service_1.TechnicalQuestionService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/generalquestions',
                            name: 'GeneralQuestions',
                            component: generalquestions_component_ts_1.GeneralQuestionsComponent,
                        },
                        {
                            path: '/detail/:id',
                            name: 'EmployeeDetail',
                            component: employee_detail_component_1.EmployeeDetailComponent
                        },
                        {
                            path: '/employees',
                            name: 'Employees',
                            component: Employees_component_1.EmployeesComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map