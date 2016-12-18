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
var DropzoneDirective = (function () {
    function DropzoneDirective(el) {
        var _this = this;
        this.el = el;
        System.import('dropzone').then(function (Dropzone) {
            _this.initDropzone(Dropzone);
        });
    }
    DropzoneDirective.prototype.initDropzone = function (Dropzone) {
        Dropzone.autoDiscover = false;
        this.dropzone = new Dropzone(this.el.nativeElement, this.saDropzone || {});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DropzoneDirective.prototype, "saDropzone", void 0);
    DropzoneDirective = __decorate([
        core_1.Directive({
            selector: '[saDropzone]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DropzoneDirective);
    return DropzoneDirective;
}());
exports.DropzoneDirective = DropzoneDirective;
//# sourceMappingURL=dropzone.directive.js.map