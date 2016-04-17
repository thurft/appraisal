import { TechnicalQuestions } from '../object/obj.technicalQuestions';
import { TECHNICALQUESTIONS } from './mock-technicalQuestions';
import { Injectable } from 'angular2/core';


@Injectable()
export class TechnicalQuestionService {

    constructor(){

    }
    getTechnicalQuestions() {

        if(localStorage.getItem("TECHNICALQUESTIONS") === null) {
            localStorage.setItem("TECHNICALQUESTIONS", JSON.stringify(TECHNICALQUESTIONS));
            return Promise.resolve(TECHNICALQUESTIONS);
        } else {
            return Promise.resolve(JSON.parse(localStorage.getItem("TECHNICALQUESTIONS")));
        }
    }

    saveTechnicalQuestions(technicalQuestions) {
        localStorage.setItem("TECHNICALQUESTIONS", JSON.stringify(technicalQuestions));
    }


    getTechnicalQuestion(id: number) {
        return Promise.resolve(TECHNICALQUESTIONS).then(
                technicalquestion => technicalquestion.filter(technicalquestion => technicalquestion.id === id)[0]
        );
    }
}
