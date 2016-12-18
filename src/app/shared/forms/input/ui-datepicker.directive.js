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
var common_1 = require('@angular/common');
var UiDatepickerDirective = (function () {
    function UiDatepickerDirective(el) {
        this.el = el;
        this.change = new core_1.EventEmitter();
    }
    UiDatepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        var onSelectCallbacks = [];
        var saUiDatepicker = this.saUiDatepicker || {};
        var element = $(this.el.nativeElement);
        $(this.el.nativeElement).datepicker({
            onSelect: function (dateText) {
                _this.change.emit(dateText);
            }
        });
        $(this.el.nativeElement).datepicker('option', 'dateFormat', "dd/mm/yy");
        if (saUiDatepicker.minRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
            });
        }
        if (saUiDatepicker.maxRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
            });
        }
        //Let others know about changes to the data field
        onSelectCallbacks.push(function (selectedDate) {
            element.triggerHandler("change");
            var form = element.closest('form');
            if (typeof form.bootstrapValidator == 'function') {
                try {
                    form.bootstrapValidator('revalidateField', element);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        });
        var options = $.extend(saUiDatepicker, {
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function (selectedDate) {
                onSelectCallbacks.forEach(function (callback) {
                    callback.call(callback, selectedDate);
                });
            }
        });
        element.datepicker(options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UiDatepickerDirective.prototype, "saUiDatepicker", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UiDatepickerDirective.prototype, "change", void 0);
    UiDatepickerDirective = __decorate([
        core_1.Directive({
            selector: '[saUiDatepicker]',
            providers: [common_1.DatePipe]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], UiDatepickerDirective);
    return UiDatepickerDirective;
}());
exports.UiDatepickerDirective = UiDatepickerDirective;
//# sourceMappingURL=ui-datepicker.directive.js.map