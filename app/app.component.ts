import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { EmployeeService } from './services/employee.service';
import { ScaleService } from './services/scale.service';
import { GeneralQuestionService } from './services/generalQuestion.service';
import { GeneralQuestionsComponent } from './components/generalquestions.component.ts';
import { EmployeesComponent } from './components/Employees.component';
import { EmployeeDetailComponent } from './components/employee-detail.component';
import { ScaleComponent } from './components/scales.component';
import { TechnicalQuestionService }from './services/technicalQuestion.service';

@Component({
  selector: 'my-app',
  template: `

    <nav class="navbar navbar-dark navbar-fixed-top bg-inverse">
      <div id="navbar">
        <nav class="nav navbar-nav pull-xs-left">
          <a [routerLink]="['GeneralQuestions']" class="nav-item nav-link">General Questions</a>
          <a [routerLink]="['Employees']" class="nav-item nav-link">Employees</a>
        </nav>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    EmployeeService,
    GeneralQuestionService,
    ScaleService,
    TechnicalQuestionService
  ]
})

@RouteConfig([
  {
    path: '/generalquestions',
    name: 'GeneralQuestions',
    component: GeneralQuestionsComponent,

  },
  {
    path: '/detail/:id',
    name: 'EmployeeDetail',
    component: EmployeeDetailComponent
  },
  {
    path: '/employees',
    name: 'Employees',
    component: EmployeesComponent,
    useAsDefault: true
  }
])
export class AppComponent {

  title = '360 Degree Feedback';
}