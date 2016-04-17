import { Component, OnInit,Input, Output,EventEmitter } from 'angular2/core';
import { Router } from 'angular2/router';
import {NgClass} from 'angular2/common';


import { GeneralQuestion } from '../object/obj.generalQuestion';

import { ScaleService } from '../services/scale.service';
import { Scale } from '../object/obj.scale';

@Component({
    selector: 'scale',
    templateUrl: './app/scale.component.html'
})
export class ScaleComponent implements OnInit {
    scale: Scale;

    @Input() question : GeneralQuestion;
    @Output() updateQuestionRequest = new EventEmitter<GeneralQuestion>();

    constructor(
        private _router: Router,
        private _scaleService: ScaleService) {}

    ngOnInit() {

        this._scaleService.getScale(this.question.scaleId)
            .then(scale => this.scale  = scale);

    }

    updateQuestionValue(item) {
        this.question.value = item.value;
        this.updateQuestionRequest.emit(this.question);
    }


}
