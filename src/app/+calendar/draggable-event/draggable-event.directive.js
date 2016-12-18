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
var DraggableEvent = (function () {
    function DraggableEvent(el) {
        this.el = el;
    }
    DraggableEvent.prototype.ngOnInit = function () {
        this.type = this.event.className;
        $(this.el.nativeElement)
            .data('eventObject', this.event)
            .draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0 //  original position after the drag
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DraggableEvent.prototype, "event", void 0);
    __decorate([
        core_1.HostBinding('class'), 
        __metadata('design:type', Object)
    ], DraggableEvent.prototype, "type", void 0);
    DraggableEvent = __decorate([
        core_1.Directive({
            selector: '[saDraggableEvent]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DraggableEvent);
    return DraggableEvent;
}());
exports.DraggableEvent = DraggableEvent;
//# sourceMappingURL=draggable-event.directive.js.map