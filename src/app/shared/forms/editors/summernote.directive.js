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
var SummernoteDirective = (function () {
    function SummernoteDirective(el) {
        this.el = el;
        this.summernote = {};
        this.change = new core_1.EventEmitter();
    }
    SummernoteDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script!summernote/dist/summernote.min.js').then(function () {
            _this.render();
        });
    };
    SummernoteDirective.prototype.render = function () {
        var _this = this;
        $(this.el.nativeElement).summernote(Object.assign(this.summernote, {
            focus: true,
            tabsize: 2,
            callbacks: {
                onChange: function (we, contents, $editable) {
                    _this.change.emit(contents);
                }
            }
        }));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SummernoteDirective.prototype, "summernote", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SummernoteDirective.prototype, "change", void 0);
    SummernoteDirective = __decorate([
        core_1.Directive({
            selector: '[summernote]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SummernoteDirective);
    return SummernoteDirective;
}());
exports.SummernoteDirective = SummernoteDirective;
//# sourceMappingURL=summernote.directive.js.map