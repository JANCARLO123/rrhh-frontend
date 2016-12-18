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
var MessageLabelsComponent = (function () {
    function MessageLabelsComponent() {
        this.LABELS = {
            home: {
                name: "HOME",
                color: "teal"
            },
            work: {
                name: "WORK",
                color: "orange"
            }
        };
    }
    MessageLabelsComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessageLabelsComponent.prototype, "message", void 0);
    MessageLabelsComponent = __decorate([
        core_1.Component({
            selector: 'message-labels',
            template: '<span *ngFor="let label of message.labels" class="label bg-color-{{LABELS[label].color}}">{{LABELS[label].name}}</span>',
        }), 
        __metadata('design:paramtypes', [])
    ], MessageLabelsComponent);
    return MessageLabelsComponent;
}());
exports.MessageLabelsComponent = MessageLabelsComponent;
//# sourceMappingURL=message-labels.component.js.map