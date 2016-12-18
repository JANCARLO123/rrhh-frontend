"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Select2Directive = (function () {
    function Select2Directive(el) {
        this.el = el;
    }
    Select2Directive.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script!select2/dist/js/select2.min.js').then(function () {
            $(_this.el.nativeElement).select2();
        });
    };
    Select2Directive = __decorate([
        core_1.Directive({
            selector: '[select2]'
        })
    ], Select2Directive);
    return Select2Directive;
}());
exports.Select2Directive = Select2Directive;
