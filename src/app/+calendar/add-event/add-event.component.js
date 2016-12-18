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
var events_service_1 = require("../shared/events.service");
var AddEventComponent = (function () {
    function AddEventComponent(eventsService) {
        this.eventsService = eventsService;
        this.icons = [
            'fa-info',
            'fa-warning',
            'fa-check',
            'fa-user',
            'fa-lock',
            'fa-clock-o'
        ];
        this.colorClassNames = [
            {
                bg: 'bg-color-darken',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blue',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-orange',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-greenLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blueLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-red',
                txt: 'txt-color-white'
            }
        ];
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.activeIcon = this.icons[0];
        this.activeColorClass = this.colorClassNames[0];
    };
    AddEventComponent.prototype.setIcon = function (icon) {
        this.activeIcon = icon;
    };
    AddEventComponent.prototype.setColorClass = function (colorClassName) {
        this.activeColorClass = colorClassName;
    };
    AddEventComponent.prototype.addExternalEvent = function () {
        if (!this.description || !this.title) {
            return;
        }
        var event = new CalendarEvent(this.title, this.description, this.activeColorClass.bg + ' ' + this.activeColorClass.txt, this.activeIcon);
        this.eventsService.addExternalEvent(event);
        this.description = '';
        this.title = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddEventComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddEventComponent.prototype, "description", void 0);
    AddEventComponent = __decorate([
        core_1.Component({
            selector: 'sa-add-event',
            templateUrl: 'add-event.component.html',
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService])
    ], AddEventComponent);
    return AddEventComponent;
}());
exports.AddEventComponent = AddEventComponent;
var CalendarEvent = (function () {
    function CalendarEvent(title, description, className, icon) {
        this.title = title;
        this.description = description;
        this.className = className;
        this.icon = icon;
    }
    return CalendarEvent;
}());
//# sourceMappingURL=add-event.component.js.map