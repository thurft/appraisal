import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { ScaleComponent } from './scales.component';
import { GeneralQuestion } from '../object/obj.generalQuestion';
import { GeneralQuestionService } from '../services/generalQuestion.service';
import { ParseName } from '../pipe/pipe.parsename';

@Component({
  selector: 'my-general-questions',
  templateUrl: './app/generalquestions.component.html',
  directives: [ScaleComponent],
  pipes: [ParseName]
})

export class GeneralQuestionsComponent implements OnInit {

  generalquestions: GeneralQuestion[] = [];

  constructor(
    private _router: Router,
    private _generalQuestionsService: GeneralQuestionService) {
  }

  ngOnInit() {
    this._generalQuestionsService.getGeneralQuestions()
      .then(generalquestions => this.generalquestions  = generalquestions);
  }

  updateQuestionRequest(question) {
    console.log("General Components");
    for (var i = 0; i < this.generalquestions.length; i++) {
      if (this.generalquestions[i].id === question.id) {
        this.generalquestions[i].value = question.value;
      }
    }
    this._generalQuestionsService.saveGeneralQuestions(this.generalquestions);
  }


  gotoDetail(employee: Employee) {
    let link = ['EmployeeDetail', { id: employee.id }];
    this._router.navigate(link);
  }
}
