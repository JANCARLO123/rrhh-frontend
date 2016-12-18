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
var json_api_service_1 = require("../../shared/api/json-api.service");
var ChartJsShowcaseComponent = (function () {
    function ChartJsShowcaseComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    ChartJsShowcaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/chartjs.json').subscribe(function (data) {
            _this.chartjsData = data;
        });
    };
    ChartJsShowcaseComponent.prototype.ngOnDestroy = function () { };
    ChartJsShowcaseComponent = __decorate([
        core_1.Component({
            selector: 'sa-chart-js-showcase',
            templateUrl: 'chart-js-showcase.component.html',
        }), 
        __metadata('design:paramtypes', [json_api_service_1.JsonApiService])
    ], ChartJsShowcaseComponent);
    return ChartJsShowcaseComponent;
}());
exports.ChartJsShowcaseComponent = ChartJsShowcaseComponent;
//# sourceMappingURL=chart-js-showcase.component.js.map