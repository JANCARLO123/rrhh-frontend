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
var ng2_redux_1 = require('ng2-redux');
var directives_1 = require("@angular/core/src/metadata/directives");
var DefaultPanelComponent = (function () {
    function DefaultPanelComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.storeId = 'defaultPanel';
    }
    DefaultPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        directives_1.Input(), 
        __metadata('design:type', Boolean)
    ], DefaultPanelComponent.prototype, "active", void 0);
    DefaultPanelComponent = __decorate([
        core_1.Component({
            selector: 'image-editor-default-panel',
            template: "\n            <section>\n                <jcrop\n                    [storeId]=\"storeId\" \n                    src=\"assets/img/superbox/superbox-full-11.jpg\"\n                    [width]=\"600\" [height]=\"400\"></jcrop>\n            </section>\n",
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], DefaultPanelComponent);
    return DefaultPanelComponent;
}());
exports.DefaultPanelComponent = DefaultPanelComponent;
//# sourceMappingURL=default-panel.component.js.map