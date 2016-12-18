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
var JquiAccordion = (function () {
    function JquiAccordion(el) {
        this.el = el;
    }
    JquiAccordion.prototype.ngOnInit = function () {
        var options = Object.assign({
            autoHeight: false,
            heightStyle: "content",
            collapsible: true,
            animate: 300,
            icons: {
                header: "fa fa-plus",
                activeHeader: "fa fa-minus" // custom icon class
            },
            header: "h4"
        }, (this.saJquiAccordion || {}));
        $(this.el.nativeElement).accordion(options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], JquiAccordion.prototype, "saJquiAccordion", void 0);
    JquiAccordion = __decorate([
        core_1.Directive({
            selector: '[saJquiAccordion]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], JquiAccordion);
    return JquiAccordion;
}());
exports.JquiAccordion = JquiAccordion;
//# sourceMappingURL=jqui-accordion.directive.js.map