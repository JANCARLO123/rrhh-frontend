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
var router_1 = require("@angular/router");
var message_1 = require("../shared/message");
var outlook_service_1 = require("../shared/outlook.service");
var DetailsComponent = (function () {
    function DetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.messageSub = _this.service.getMessage(params['id']).subscribe(function (message) {
                return _this.message = new message_1.Message(message);
            });
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'sa-details',
            templateUrl: 'details.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, outlook_service_1.OutlookService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map