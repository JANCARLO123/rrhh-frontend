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
var NestableListsComponent = (function () {
    function NestableListsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    NestableListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/ui-examples/nestable-lists.json').subscribe(function (data) {
            _this.demo1 = data.demo1;
            _this.demo2 = data.demo2;
            _this.demo3 = data.demo2;
        });
    };
    NestableListsComponent.prototype.onChange1 = function (payload) {
        this.nestable1DemoOutput = payload;
    };
    NestableListsComponent.prototype.onChange2 = function (payload) {
        this.nestable2DemoOutput = payload;
    };
    NestableListsComponent.prototype.onChange3 = function (payload) {
        this.nestable1DemoOutput = payload;
    };
    NestableListsComponent = __decorate([
        core_1.Component({
            selector: 'sa-nestable-lists',
            templateUrl: 'nestable-lists.component.html',
        }), 
        __metadata('design:paramtypes', [json_api_service_1.JsonApiService])
    ], NestableListsComponent);
    return NestableListsComponent;
}());
exports.NestableListsComponent = NestableListsComponent;
//# sourceMappingURL=nestable-lists.component.js.map