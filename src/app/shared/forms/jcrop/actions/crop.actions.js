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
var CropActions = (function () {
    function CropActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    CropActions.prototype.cropSelect = function (crop, storeId) {
        this.ngRedux.dispatch({
            type: CropActions.CROP_SELECT,
            crop: crop,
            storeId: storeId
        });
    };
    CropActions.prototype.cropChange = function (crop, storeId) {
        this.ngRedux.dispatch({
            type: CropActions.CROP_CHANGE,
            crop: crop,
            storeId: storeId
        });
    };
    CropActions.prototype.cropFieldChange = function (field, value, storeId) {
        this.ngRedux.dispatch({
            type: CropActions.CROP_FIELD_CHANGE,
            field: field,
            value: parseInt(value),
            storeId: storeId
        });
    };
    CropActions.prototype.cropRandomSelection = function (storeId) {
        this.ngRedux.dispatch({
            type: CropActions.CROP_RANDOM_SELECTION,
            crop: this.randomSelection(),
            storeId: storeId
        });
    };
    CropActions.prototype.randomSelection = function () {
        var x = Math.round(Math.random() * 250);
        var y = Math.round(Math.random() * 180);
        return {
            x: x,
            y: y,
            x2: x + Math.round((Math.random() * 200) + 50),
            y2: y + Math.round((Math.random() * 300) + 60)
        };
    };
    CropActions.CROP_SELECT = 'CROP_SELECT';
    CropActions.CROP_CHANGE = 'CROP_CHANGE';
    CropActions.CROP_FIELD_CHANGE = 'CROP_FIELD_CHANGE';
    CropActions.CROP_RANDOM_SELECTION = 'CROP_RANDOM_SELECTION';
    CropActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.NgRedux])
    ], CropActions);
    return CropActions;
}());
exports.CropActions = CropActions;
//# sourceMappingURL=crop.actions.js.map