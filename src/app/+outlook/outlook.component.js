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
var shared_1 = require("./shared");
var OutlookComponent = (function () {
    function OutlookComponent(route, router, outlookService) {
        this.route = route;
        this.router = router;
        this.outlookService = outlookService;
        this.outlook = new shared_1.Outlook();
        this.activeFolder = new shared_1.Folder();
    }
    OutlookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outlookSub = this.outlookService.getOutlook().subscribe(function (outlook) {
            _this.outlook = outlook;
        });
        this.activeFolderSub = this.outlookService.activeFolder.subscribe(function (folder) {
            _this.activeFolderKey = folder;
            if (_this.outlook.folders) {
                _this.activeFolder = _this.outlook.folders.find(function (it) { return it.key == folder; });
            }
        });
    };
    OutlookComponent.prototype.ngOnDestroy = function () {
        this.outlookSub.unsubscribe();
        this.activeFolderSub.unsubscribe();
    };
    OutlookComponent.prototype.deleteSelected = function () {
        this.outlookService.deleteSelected();
    };
    OutlookComponent = __decorate([
        core_1.Component({
            selector: 'sa-outlook',
            templateUrl: 'outlook.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, shared_1.OutlookService])
    ], OutlookComponent);
    return OutlookComponent;
}());
exports.OutlookComponent = OutlookComponent;
//# sourceMappingURL=outlook.component.js.map