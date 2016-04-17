import { GeneralQuestion } from '../object/obj.generalQuestion';
import { GENERALQUESTIONS } from './mock-generalQuestions';
import { Injectable } from 'angular2/core';


@Injectable()
export class GeneralQuestionService {

    constructor(){

    }
    getGeneralQuestions() {

        if(localStorage.getItem("GENERALQUESTIONS") === null) {
            localStorage.setItem("GENERALQUESTIONS", JSON.stringify(GENERALQUESTIONS));
            return Promise.resolve(GENERALQUESTIONS);
        } else {
            return Promise.resolve(JSON.parse(localStorage.getItem("GENERALQUESTIONS")));
        }
    }

    saveGeneralQuestions(generalQuestions) {
        localStorage.setItem("GENERALQUESTIONS", JSON.stringify(generalQuestions));
    }


    getGeneralQuestion(id: number) {
        return Promise.resolve(GENERALQUESTIONS).then(
                generalquestion => generalquestion.filter(generalquestion => generalquestion.id === id)[0]
        );
    }
}
