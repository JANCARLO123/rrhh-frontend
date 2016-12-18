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
var EVENTS_MOCK_1 = require('./EVENTS_MOCK');
var EXTERNAL_EVENTS_MOCK_1 = require('./EXTERNAL_EVENTS_MOCK');
var Rx_1 = require("rxjs/Rx");
var EventsService = (function () {
    function EventsService() {
        this.store = {
            events: EVENTS_MOCK_1.default,
            externalEvents: EXTERNAL_EVENTS_MOCK_1.externalEvents
        };
        this.subject = new Rx_1.Subject();
    }
    EventsService.prototype.subscribe = function (next, error, complete) {
        return this.subject.subscribe(next, error, complete);
    };
    EventsService.prototype.addExternalEvent = function (event) {
        this.store.externalEvents.push(event);
        this.subject.next(this.store);
    };
    EventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map