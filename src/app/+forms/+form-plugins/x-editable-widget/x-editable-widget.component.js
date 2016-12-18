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
var XEditableWidgetComponent = (function () {
    function XEditableWidgetComponent() {
        this.model = {
            username: 'superuser',
            firstname: null,
            sex: 'not selected',
            group: "Admin",
            vacation: "25.02.2013",
            combodate: "15/05/1984",
            event: null,
            comments: 'awesome user!',
            state2: 'California',
            fruits: 'peach,apple',
            dob: '1984-05-15'
        };
        this.fruits = [
            { value: 'banana', text: 'banana' },
            { value: 'peach', text: 'peach' },
            { value: 'apple', text: 'apple' },
            { value: 'watermelon', text: 'watermelon' },
            { value: 'orange', text: 'orange' }
        ];
        this.genders = [
            { value: 'not selected', text: 'not selected' },
            { value: 'Male', text: 'Male' },
            { value: 'Female', text: 'Female' }
        ];
        this.groups = [
            { value: 'Guest', text: 'Guest' },
            { value: 'Service', text: 'Service' },
            { value: 'Customer', text: 'Customer' },
            { value: 'Operator', text: 'Operator' },
            { value: 'Support', text: 'Support' },
            { value: 'Admin', text: 'Admin' }
        ];
        this.options = {
            mode: 'inline',
            disabled: false,
            inline: true
        };
    }
    XEditableWidgetComponent.prototype.ngOnInit = function () {
    };
    XEditableWidgetComponent.prototype.onChange = function () {
        this.options.mode = this.options.inline ? 'inline' : 'popup';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableWidgetComponent.prototype, "options", void 0);
    XEditableWidgetComponent = __decorate([
        core_1.Component({
            selector: 'x-editable-widget',
            templateUrl: 'x-editable-widget.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], XEditableWidgetComponent);
    return XEditableWidgetComponent;
}());
exports.XEditableWidgetComponent = XEditableWidgetComponent;
//# sourceMappingURL=x-editable-widget.component.js.map