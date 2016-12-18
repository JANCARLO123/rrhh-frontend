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
var TreeViewsComponent = (function () {
    function TreeViewsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'];
    }
    TreeViewsComponent.prototype.add = function () {
        console.log(this.task, this.day);
    };
    TreeViewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/ui-examples/tree-view.json').subscribe(function (data) {
            _this.demo1 = data.demo1;
            _this.demo2 = data.demo2;
        });
    };
    TreeViewsComponent.prototype.changeLstener = function (payload) {
        console.log('change payload', payload);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TreeViewsComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TreeViewsComponent.prototype, "week", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TreeViewsComponent.prototype, "day", void 0);
    TreeViewsComponent = __decorate([
        core_1.Component({
            selector: 'sa-tree-views',
            templateUrl: 'tree-views.component.html',
        }), 
        __metadata('design:paramtypes', [json_api_service_1.JsonApiService])
    ], TreeViewsComponent);
    return TreeViewsComponent;
}());
exports.TreeViewsComponent = TreeViewsComponent;
//# sourceMappingURL=tree-views.component.js.map