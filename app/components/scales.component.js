System.register(['angular2/core', 'angular2/router', '../object/obj.generalQuestion', '../services/scale.service'], function(exports_1, context_1) {
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
    var core_1, router_1, obj_generalQuestion_1, scale_service_1;
    var ScaleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (obj_generalQuestion_1_1) {
                obj_generalQuestion_1 = obj_generalQuestion_1_1;
            },
            function (scale_service_1_1) {
                scale_service_1 = scale_service_1_1;
            }],
        execute: function() {
            ScaleComponent = (function () {
                function ScaleComponent(_router, _scaleService) {
                    this._router = _router;
                    this._scaleService = _scaleService;
                    this.updateQuestionRequest = new core_1.EventEmitter();
                }
                ScaleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._scaleService.getScale(this.question.scaleId)
                        .then(function (scale) { return _this.scale = scale; });
                };
                ScaleComponent.prototype.updateQuestionValue = function (item) {
                    this.question.value = item.value;
                    this.updateQuestionRequest.emit(this.question);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', obj_generalQuestion_1.GeneralQuestion)
                ], ScaleComponent.prototype, "question", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ScaleComponent.prototype, "updateQuestionRequest", void 0);
                ScaleComponent = __decorate([
                    core_1.Component({
                        selector: 'scale',
                        templateUrl: './app/scale.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, scale_service_1.ScaleService])
                ], ScaleComponent);
                return ScaleComponent;
            }());
            exports_1("ScaleComponent", ScaleComponent);
        }
    }
});
//# sourceMappingURL=scales.component.js.map