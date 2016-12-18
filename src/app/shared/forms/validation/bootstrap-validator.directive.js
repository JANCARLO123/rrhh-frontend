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
var BootstrapValidatorDirective = (function () {
    function BootstrapValidatorDirective(el) {
        var _this = this;
        this.el = el;
        this.s = function () {
            var bootstrapValidator = _this.$form.data('bootstrapValidator');
            bootstrapValidator.validate();
            if (bootstrapValidator.isValid())
                _this.$form.submit();
            else
                return;
        };
    }
    BootstrapValidatorDirective.prototype.ngOnInit = function () {
        var _this = this;
        System.import('script!smartadmin-plugins/bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js').then(function () {
            _this.attach();
        });
    };
    BootstrapValidatorDirective.prototype.attach = function () {
        this.$form = $(this.el.nativeElement);
        this.$form.bootstrapValidator(this.saBootstrapValidator || {});
        this.$form.submit(function (ev) { ev.preventDefault(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BootstrapValidatorDirective.prototype, "saBootstrapValidator", void 0);
    __decorate([
        core_1.HostListener('submit'), 
        __metadata('design:type', Object)
    ], BootstrapValidatorDirective.prototype, "s", void 0);
    BootstrapValidatorDirective = __decorate([
        core_1.Directive({
            selector: '[saBootstrapValidator]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BootstrapValidatorDirective);
    return BootstrapValidatorDirective;
}());
exports.BootstrapValidatorDirective = BootstrapValidatorDirective;
//# sourceMappingURL=bootstrap-validator.directive.js.map