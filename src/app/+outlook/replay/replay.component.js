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
var shared_1 = require("../shared");
var ReplayComponent = (function () {
    function ReplayComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.carbonCopy = false;
        this.blindCarbonCopy = false;
        this.attachments = false;
        this.sending = false;
    }
    ReplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.replayToSub = _this.service.getMessage(params['id']).subscribe(function (message) {
                return _this.replayTo = new shared_1.Message(message);
            });
        });
    };
    ReplayComponent.prototype.ngOnDestroy = function () {
        this.replayToSub.unsubscribe();
        this.paramsSub.unsubscribe();
    };
    ReplayComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        setTimeout(function () {
            _this.router.navigate(['/outlook']);
        }, 2000);
    };
    ReplayComponent = __decorate([
        core_1.Component({
            selector: 'sa-replay',
            templateUrl: 'replay.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, shared_1.OutlookService])
    ], ReplayComponent);
    return ReplayComponent;
}());
exports.ReplayComponent = ReplayComponent;
//# sourceMappingURL=replay.component.js.map