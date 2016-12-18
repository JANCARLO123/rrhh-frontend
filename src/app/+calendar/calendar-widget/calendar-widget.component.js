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
var CalendarWidgetComponent = (function () {
    function CalendarWidgetComponent(el, eventsService) {
        var _this = this;
        this.el = el;
        this.eventsService = eventsService;
        this.period = 'Showing';
        System.import('script!smartadmin-plugins/bower_components/fullcalendar/dist/fullcalendar.js').then(function () {
            _this.render();
        });
    }
    CalendarWidgetComponent.prototype.render = function () {
        var _this = this;
        this.$calendarRef = $('#calendar', this.el.nativeElement);
        this.calendar = this.$calendarRef.fullCalendar({
            lang: 'en',
            editable: true,
            draggable: true,
            selectable: false,
            selectHelper: true,
            unselectAuto: false,
            disableResizing: false,
            droppable: true,
            header: {
                left: 'title',
                center: 'prev, next, today',
                right: 'month, agendaWeek, agendaDay' //month, agendaDay,
            },
            drop: function (date, event, ui) {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = ui.helper.data('eventObject');
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);
                // assign it the date that was reported
                copiedEventObject.start = date;
                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                _this.$calendarRef.fullCalendar('renderEvent', copiedEventObject, true);
            },
            select: function (start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    _this.calendar.fullCalendar('renderEvent', {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    }, true // make the event "stick"
                    );
                }
                _this.calendar.fullCalendar('unselect');
            },
            events: function (start, end, timezone, callback) {
                callback(_this.eventsService.store.events);
            },
            eventRender: function (event, element, icon) {
                if (event.description != "") {
                    element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                }
                if (event.icon != "") {
                    element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                }
            }
        });
        $('.fc-header-right, .fc-header-center', this.$calendarRef).hide();
        $('.fc-left', this.$calendarRef).addClass('fc-header-title');
    };
    CalendarWidgetComponent.prototype.ngOnDestroy = function () {
        this.calendar.fullCalendar('destroy');
    };
    CalendarWidgetComponent.prototype.changeView = function (period) {
        this.calendar.fullCalendar('changeView', period);
        this.period = period;
    };
    CalendarWidgetComponent.prototype.next = function () {
        $('.fc-next-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.prev = function () {
        $('.fc-prev-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.today = function () {
        $('.fc-today-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent = __decorate([
        core_1.Component({
            selector: 'calendar-widget',
            templateUrl: 'calendar-widget.component.html',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, events_service_1.EventsService])
    ], CalendarWidgetComponent);
    return CalendarWidgetComponent;
}());
exports.CalendarWidgetComponent = CalendarWidgetComponent;
//# sourceMappingURL=calendar-widget.component.js.map