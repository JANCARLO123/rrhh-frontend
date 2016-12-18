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
var NouisliderDirective = (function () {
    function NouisliderDirective(el) {
        this.el = el;
        this.change = new core_1.EventEmitter();
    }
    NouisliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('nouislider/distribute/nouislider.min.js').then(function (noUiSlider) {
            var slider = _this.el.nativeElement;
            var options = _this.nouiSlider || {
                range: {
                    min: 0,
                    max: 1000
                },
            };
            noUiSlider.create(slider, options);
            slider.noUiSlider.on('change', function () {
                _this.change.emit(slider.noUiSlider.get());
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NouisliderDirective.prototype, "nouiSlider", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NouisliderDirective.prototype, "change", void 0);
    NouisliderDirective = __decorate([
        core_1.Directive({
            selector: '[nouiSlider]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], NouisliderDirective);
    return NouisliderDirective;
}());
exports.NouisliderDirective = NouisliderDirective;
//# sourceMappingURL=nouislider.directive.js.map