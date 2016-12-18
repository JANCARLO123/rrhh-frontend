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
var options_actions_1 = require("../actions/options.actions");
var ng2_redux_1 = require("ng2-redux");
var OptionToggleComponent = (function () {
    function OptionToggleComponent(ngRedux, actions) {
        this.ngRedux = ngRedux;
        this.actions = actions;
    }
    OptionToggleComponent.prototype.ngOnInit = function () {
        var options = this.storeId ? this.ngRedux.getState()[this.storeId].options : this.ngRedux.getState().options;
        if (options && options[this.option]) {
            this.active = true;
        }
    };
    OptionToggleComponent.prototype.onChange = function () {
        this.actions.toggleOption({
            option: this.option,
            storeId: this.storeId
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], OptionToggleComponent.prototype, "active", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OptionToggleComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OptionToggleComponent.prototype, "option", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OptionToggleComponent.prototype, "storeId", void 0);
    OptionToggleComponent = __decorate([
        core_1.Component({
            selector: 'jcrop-option-toggle',
            template: "\n    <div class=\"switch\">\n        <label >\n            <input type=\"checkbox\" [checked]=\"active\"\n             [(ngModel)]=\"active\" (ngModelChange)=\"onChange()\" />\n                <span class=\"lever\" ></span>\n            {{label}}\n        </label>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux, options_actions_1.OptionsActions])
    ], OptionToggleComponent);
    return OptionToggleComponent;
}());
exports.OptionToggleComponent = OptionToggleComponent;
//# sourceMappingURL=option-toggle.component.js.map