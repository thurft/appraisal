System.register(['./mock-generalQuestions', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_generalQuestions_1, core_1;
    var GeneralQuestionService;
    return {
        setters:[
            function (mock_generalQuestions_1_1) {
                mock_generalQuestions_1 = mock_generalQuestions_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GeneralQuestionService = (function () {
                function GeneralQuestionService() {
                }
                GeneralQuestionService.prototype.getGeneralQuestions = function () {
                    if (localStorage.getItem("GENERALQUESTIONS") === null) {
                        localStorage.setItem("GENERALQUESTIONS", JSON.stringify(mock_generalQuestions_1.GENERALQUESTIONS));
                        return Promise.resolve(mock_generalQuestions_1.GENERALQUESTIONS);
                    }
                    else {
                        return Promise.resolve(JSON.parse(localStorage.getItem("GENERALQUESTIONS")));
                    }
                };
                GeneralQuestionService.prototype.saveGeneralQuestions = function (generalQuestions) {
                    localStorage.setItem("GENERALQUESTIONS", JSON.stringify(generalQuestions));
                };
                GeneralQuestionService.prototype.getGeneralQuestion = function (id) {
                    return Promise.resolve(mock_generalQuestions_1.GENERALQUESTIONS).then(function (generalquestion) { return generalquestion.filter(function (generalquestion) { return generalquestion.id === id; })[0]; });
                };
                GeneralQuestionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GeneralQuestionService);
                return GeneralQuestionService;
            }());
            exports_1("GeneralQuestionService", GeneralQuestionService);
        }
    }
});
//# sourceMappingURL=generalQuestion.service.js.map