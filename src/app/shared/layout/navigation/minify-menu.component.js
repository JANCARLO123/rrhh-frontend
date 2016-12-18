"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MinifyMenuComponent = (function () {
    function MinifyMenuComponent() {
    }
    MinifyMenuComponent.prototype.toggle = function () {
        var $body = $('body');
        if (!$body.hasClass("menu-on-top")) {
            $body.toggleClass("minified");
            $body.removeClass("hidden-menu");
            $('html').removeClass("hidden-menu-mobile-lock");
        }
    };
    MinifyMenuComponent = __decorate([
        core_1.Component({
            selector: 'sa-minify-menu',
            template: "<span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"toggle()\">\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n</span>",
        })
    ], MinifyMenuComponent);
    return MinifyMenuComponent;
}());
exports.MinifyMenuComponent = MinifyMenuComponent;
