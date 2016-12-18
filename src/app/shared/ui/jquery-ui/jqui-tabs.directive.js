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
var JquiTabs = (function () {
    function JquiTabs(el) {
        this.el = el;
    }
    JquiTabs.prototype.ngOnInit = function () {
        $('ul a', this.el.nativeElement).each(function (idx, el) {
            var href = $(el).attr("href"), newHref = window.location.protocol + "//" + window.location.hostname
                + (window.location.port ? ":" + window.location.port : "") +
                window.location.pathname + href;
            if (href.indexOf("#") == 0) {
                $(el).attr("href", newHref);
            }
        });
        $(this.el.nativeElement).tabs(this.saJquiTabs || {});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], JquiTabs.prototype, "saJquiTabs", void 0);
    JquiTabs = __decorate([
        core_1.Directive({
            selector: '[saJquiTabs]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], JquiTabs);
    return JquiTabs;
}());
exports.JquiTabs = JquiTabs;
//# sourceMappingURL=jqui-tabs.directive.js.map