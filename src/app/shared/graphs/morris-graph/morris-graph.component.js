"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MorrisGraphComponent = (function () {
    function MorrisGraphComponent(el) {
        this.el = el;
    }
    MorrisGraphComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        System.import('script!raphael').then(function () {
            return System.import('morris.js/morris.js');
        }).then(function () {
            options.element = _this.el.nativeElement.children[0];
            options.data = _this.data;
            switch (_this.type) {
                case 'area':
                    Morris.Area(options);
                    break;
                case 'bar':
                    Morris.Bar(options);
                    break;
                case 'line':
                    Morris.Line(options);
                    break;
                case 'donut':
                    Morris.Donut(options);
                    break;
            }
        });
        var options = this.options || {};
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MorrisGraphComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MorrisGraphComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MorrisGraphComponent.prototype, "type", void 0);
    MorrisGraphComponent = __decorate([
        core_1.Component({
            selector: 'sa-morris-graph',
            template: "\n     <div class=\"chart no-padding\" ></div>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MorrisGraphComponent);
    return MorrisGraphComponent;
}());
exports.MorrisGraphComponent = MorrisGraphComponent;
//# sourceMappingURL=morris-graph.component.js.map