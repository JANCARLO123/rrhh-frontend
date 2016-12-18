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
var core_1 = require("@angular/core");
var index_1 = require("ng2-redux/lib/index");
/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
var OptionsActions = (function () {
    function OptionsActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    OptionsActions.prototype.toggleOption = function (update) {
        this.ngRedux.dispatch({
            type: OptionsActions.TOGGLE_OPTION,
            option: update.option,
            storeId: update.storeId
        });
    };
    OptionsActions.prototype.setOptions = function (update) {
        this.ngRedux.dispatch({
            type: OptionsActions.SET_OPTIONS,
            options: update.options,
            storeId: update.storeId
        });
    };
    OptionsActions.TOGGLE_OPTION = 'TOGGLE_OPTION';
    OptionsActions.SET_OPTIONS = 'SET_OPTIONS';
    OptionsActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.NgRedux])
    ], OptionsActions);
    return OptionsActions;
}());
exports.OptionsActions = OptionsActions;
//# sourceMappingURL=options.actions.js.map