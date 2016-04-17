System.register(['./mock-technicalQuestions', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_technicalQuestions_1, core_1;
    var TechnicalQuestionService;
    return {
        setters:[
            function (mock_technicalQuestions_1_1) {
                mock_technicalQuestions_1 = mock_technicalQuestions_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TechnicalQuestionService = (function () {
                function TechnicalQuestionService() {
                }
                TechnicalQuestionService.prototype.getTechnicalQuestions = function () {
                    if (localStorage.getItem("TECHNICALQUESTIONS") === null) {
                        localStorage.setItem("TECHNICALQUESTIONS", JSON.stringify(mock_technicalQuestions_1.TECHNICALQUESTIONS));
                        return Promise.resolve(mock_technicalQuestions_1.TECHNICALQUESTIONS);
                    }
                    else {
                        return Promise.resolve(JSON.parse(localStorage.getItem("TECHNICALQUESTIONS")));
                    }
                };
                TechnicalQuestionService.prototype.saveTechnicalQuestions = function (technicalQuestions) {
                    localStorage.setItem("TECHNICALQUESTIONS", JSON.stringify(technicalQuestions));
                };
                TechnicalQuestionService.prototype.getTechnicalQuestion = function (id) {
                    return Promise.resolve(mock_technicalQuestions_1.TECHNICALQUESTIONS).then(function (technicalquestion) { return technicalquestion.filter(function (technicalquestion) { return technicalquestion.id === id; })[0]; });
                };
                TechnicalQuestionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TechnicalQuestionService);
                return TechnicalQuestionService;
            }());
            exports_1("TechnicalQuestionService", TechnicalQuestionService);
        }
    }
});
//# sourceMappingURL=technicalQuestion.service.js.map