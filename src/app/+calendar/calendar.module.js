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
var core_1 = require("@angular/core");
var add_event_component_1 = require("./add-event/add-event.component");
var calendar_widget_component_1 = require("./calendar-widget/calendar-widget.component");
var draggable_event_directive_1 = require("./draggable-event/draggable-event.directive");
var events_service_1 = require("./shared/events.service");
var external_events_component_1 = require("./external-events/external-events.component");
var calendar_component_1 = require("./calendar.component");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var calendar_routing_1 = require("./calendar.routing");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        core_1.NgModule({
            imports: [
                smartadmin_module_1.SmartadminModule,
                calendar_routing_1.routing,
                ng2_bootstrap_1.DropdownModule,
            ],
            declarations: [
                add_event_component_1.AddEventComponent,
                calendar_widget_component_1.CalendarWidgetComponent,
                draggable_event_directive_1.DraggableEvent,
                external_events_component_1.ExternalEventsComponent,
                calendar_component_1.CalendarComponent,
            ],
            exports: [
                add_event_component_1.AddEventComponent,
                calendar_widget_component_1.CalendarWidgetComponent,
                draggable_event_directive_1.DraggableEvent,
                external_events_component_1.ExternalEventsComponent,
                calendar_component_1.CalendarComponent,
            ],
            providers: [events_service_1.EventsService]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarModule);
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
//# sourceMappingURL=calendar.module.js.map