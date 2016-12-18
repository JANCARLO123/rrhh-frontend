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
var common_1 = require('@angular/common');
var ui_validate_directive_1 = require("./ui-validate.directive");
var bootstrap_validator_directive_1 = require("./bootstrap-validator.directive");
var SmartadminValidationModule = (function () {
    function SmartadminValidationModule() {
    }
    SmartadminValidationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                ui_validate_directive_1.UiValidateDirective,
                bootstrap_validator_directive_1.BootstrapValidatorDirective
            ],
            exports: [
                ui_validate_directive_1.UiValidateDirective,
                bootstrap_validator_directive_1.BootstrapValidatorDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SmartadminValidationModule);
    return SmartadminValidationModule;
}());
exports.SmartadminValidationModule = SmartadminValidationModule;
//# sourceMappingURL=smartadmin-validation.module.js.map