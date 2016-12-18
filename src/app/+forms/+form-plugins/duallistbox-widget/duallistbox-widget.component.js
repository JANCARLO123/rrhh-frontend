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
var DuallistboxWidgetComponent = (function () {
    function DuallistboxWidgetComponent() {
        this.options = [{ key: "option1", value: "Option 1" },
            { key: "option2", value: "Option 2" },
            { key: "option3", value: "Option 3" },
            { key: "option4", value: "Option 4" },
            { key: "option5", value: "Option 5" },
            { key: "option6", value: "Option 6" },
            { key: "option7", value: "Option 7" },
            { key: "option8", value: "Option 8", selected: true },
            { key: "option9", value: "Option 9", selected: true },
            { key: "option0", value: "Option 10" },
            { key: "option0", value: "Option 11" },
            { key: "option0", value: "Option 12" },
            { key: "option0", value: "Option 13" },
            { key: "option0", value: "Option 14" },
            { key: "option0", value: "Option 15" },
            { key: "option0", value: "Option 16" },
            { key: "option0", value: "Option 17" },
            { key: "option0", value: "Option 18" },
            { key: "option0", value: "Option 19" },
            { key: "option0", value: "Option 20" }];
        this.filter = 'ion ([7-9]|[1][0-2])';
    }
    DuallistboxWidgetComponent.prototype.onChange = function () {
        console.log('options', this.options);
    };
    DuallistboxWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DuallistboxWidgetComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DuallistboxWidgetComponent.prototype, "filter", void 0);
    DuallistboxWidgetComponent = __decorate([
        core_1.Component({
            selector: 'duallistbox-widget',
            templateUrl: 'duallistbox-widget.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], DuallistboxWidgetComponent);
    return DuallistboxWidgetComponent;
}());
exports.DuallistboxWidgetComponent = DuallistboxWidgetComponent;
//# sourceMappingURL=duallistbox-widget.component.js.map