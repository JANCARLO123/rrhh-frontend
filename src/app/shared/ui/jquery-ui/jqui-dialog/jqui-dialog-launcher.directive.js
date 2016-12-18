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
var directives_1 = require("@angular/core/src/metadata/directives");
/*$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
  _title: function (title) {
    if (!this.options.title) {
      title.html("&#160;");
    } else {
      title.html(this.options.title);
    }
  }
}));*/
var JquiDialogLauncher = (function () {
    function JquiDialogLauncher(el) {
        this.el = el;
    }
    JquiDialogLauncher.prototype.onClick = function (e) {
        $(this.saJquiDialogLauncher).dialog("open");
    };
    __decorate([
        directives_1.Input(), 
        __metadata('design:type', Object)
    ], JquiDialogLauncher.prototype, "saJquiDialogLauncher", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], JquiDialogLauncher.prototype, "onClick", null);
    JquiDialogLauncher = __decorate([
        core_1.Directive({
            selector: '[saJquiDialogLauncher]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], JquiDialogLauncher);
    return JquiDialogLauncher;
}());
exports.JquiDialogLauncher = JquiDialogLauncher;
//# sourceMappingURL=jqui-dialog-launcher.directive.js.map