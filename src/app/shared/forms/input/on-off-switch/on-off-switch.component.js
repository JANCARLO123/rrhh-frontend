"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OnOffSwitchComponent = (function () {
    function OnOffSwitchComponent() {
        this.modelChange = new core_1.EventEmitter();
    }
    OnOffSwitchComponent.prototype.ngOnInit = function () {
        this.value = this.model;
        this.widgetId = 'on-off-switch' + OnOffSwitchComponent.widgetsCounter++;
    };
    OnOffSwitchComponent.prototype.onChange = function () {
        this.modelChange.emit(this.value);
    };
    OnOffSwitchComponent.widgetsCounter = 0;
    __decorate([
        core_1.Input()
    ], OnOffSwitchComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], OnOffSwitchComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output()
    ], OnOffSwitchComponent.prototype, "modelChange", void 0);
    __decorate([
        core_1.Input()
    ], OnOffSwitchComponent.prototype, "value", void 0);
    OnOffSwitchComponent = __decorate([
        core_1.Component({
            selector: 'on-off-switch',
            templateUrl: 'on-off-switch.component.html',
        })
    ], OnOffSwitchComponent);
    return OnOffSwitchComponent;
}());
exports.OnOffSwitchComponent = OnOffSwitchComponent;
