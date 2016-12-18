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
var AttributeFormComponent = (function () {
    function AttributeFormComponent() {
        this.submitted = false;
    }
    AttributeFormComponent.prototype.ngOnInit = function () {
    };
    AttributeFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    AttributeFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-attribute-form',
            templateUrl: 'attribute-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AttributeFormComponent);
    return AttributeFormComponent;
}());
exports.AttributeFormComponent = AttributeFormComponent;
//# sourceMappingURL=attribute-form.component.js.map