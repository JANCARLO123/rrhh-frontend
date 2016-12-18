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
var MorrisChartsComponent = (function () {
    function MorrisChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    MorrisChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/morris.json').subscribe(function (data) { return _this.morrisDemoData = data; });
    };
    MorrisChartsComponent.prototype.barColorsDemo = function (row, series, type) {
        if (type === 'bar') {
            var red = Math.ceil(150 * row.y / 8);
            return 'rgb(' + red + ',0,0)';
        }
        else {
            return '#000';
        }
    };
    MorrisChartsComponent.prototype.percentageFormat = function (x) {
        return x + "%";
    };
    MorrisChartsComponent.prototype.dateFormat = function (d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    };
    MorrisChartsComponent = __decorate([
        core_1.Component({
            selector: 'sa-morris-charts',
            templateUrl: 'morris-charts.component.html',
        }), 
        __metadata('design:paramtypes', [json_api_service_1.JsonApiService])
    ], MorrisChartsComponent);
    return MorrisChartsComponent;
}());
exports.MorrisChartsComponent = MorrisChartsComponent;
//# sourceMappingURL=morris-charts.component.js.map