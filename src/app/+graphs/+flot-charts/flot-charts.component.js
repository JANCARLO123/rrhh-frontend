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
var examples = require("./flot-examples");
var json_api_service_1 = require("../../shared/api/json-api.service");
var flot_examples_1 = require("./flot-examples");
var FlotChartsComponent = (function () {
    function FlotChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    FlotChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/flot.json').subscribe(function (data) { return _this.flotData = data; });
        this.flotExamples = examples;
        this.interval = setInterval(function () {
            _this.updateStats();
        }, 1000);
        this.updateStats();
    };
    FlotChartsComponent.prototype.updateStats = function () {
        this.updatingData = [flot_examples_1.FakeDataSource.getRandomData()];
    };
    FlotChartsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    FlotChartsComponent = __decorate([
        core_1.Component({
            selector: 'sa-flot-charts',
            templateUrl: 'flot-charts.component.html',
        }), 
        __metadata('design:paramtypes', [json_api_service_1.JsonApiService])
    ], FlotChartsComponent);
    return FlotChartsComponent;
}());
exports.FlotChartsComponent = FlotChartsComponent;
//# sourceMappingURL=flot-charts.component.js.map