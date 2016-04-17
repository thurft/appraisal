System.register(['angular2/core', 'angular2/router', './scales.component', '../services/generalQuestion.service', '../pipe/pipe.parsename'], function(exports_1, context_1) {
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
    var core_1, router_1, scales_component_1, generalQuestion_service_1, pipe_parsename_1;
    var GeneralQuestionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (scales_component_1_1) {
                scales_component_1 = scales_component_1_1;
            },
            function (generalQuestion_service_1_1) {
                generalQuestion_service_1 = generalQuestion_service_1_1;
            },
            function (pipe_parsename_1_1) {
                pipe_parsename_1 = pipe_parsename_1_1;
            }],
        execute: function() {
            GeneralQuestionsComponent = (function () {
                function GeneralQuestionsComponent(_router, _generalQuestionsService) {
                    this._router = _router;
                    this._generalQuestionsService = _generalQuestionsService;
                    this.generalquestions = [];
                }
                GeneralQuestionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._generalQuestionsService.getGeneralQuestions()
                        .then(function (generalquestions) { return _this.generalquestions = generalquestions; });
                };
                GeneralQuestionsComponent.prototype.updateQuestionRequest = function (question) {
                    console.log("General Components");
                    for (var i = 0; i < this.generalquestions.length; i++) {
                        if (this.generalquestions[i].id === question.id) {
                            this.generalquestions[i].value = question.value;
                        }
                    }
                    this._generalQuestionsService.saveGeneralQuestions(this.generalquestions);
                };
                GeneralQuestionsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-general-questions',
                        templateUrl: './app/generalquestions.component.html',
                        directives: [scales_component_1.ScaleComponent],
                        pipes: [pipe_parsename_1.ParseName]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, generalQuestion_service_1.GeneralQuestionService])
                ], GeneralQuestionsComponent);
                return GeneralQuestionsComponent;
            }());
            exports_1("GeneralQuestionsComponent", GeneralQuestionsComponent);
        }
    }
});
//# sourceMappingURL=generalquestions.component.js.map