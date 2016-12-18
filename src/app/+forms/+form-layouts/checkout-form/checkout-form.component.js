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
var countries_1 = require('../../../shared/forms/common/countries');
var CheckoutFormComponent = (function () {
    function CheckoutFormComponent() {
        this.validationOptions = {
            rules: {
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                country: {
                    required: true
                },
                city: {
                    required: true
                },
                code: {
                    required: true,
                    digits: true
                },
                address: {
                    required: true
                },
                name: {
                    required: true
                },
                card: {
                    required: true,
                    creditcard: true
                },
                cvv: {
                    required: true,
                    digits: true
                },
                month: {
                    required: true
                },
                year: {
                    required: true,
                    digits: true
                }
            },
            // Messages for form validation
            messages: {
                fname: {
                    required: 'Please enter your first name'
                },
                lname: {
                    required: 'Please enter your last name'
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                phone: {
                    required: 'Please enter your phone number'
                },
                country: {
                    required: 'Please select your country'
                },
                city: {
                    required: 'Please enter your city'
                },
                code: {
                    required: 'Please enter code',
                    digits: 'Digits only please'
                },
                address: {
                    required: 'Please enter your full address'
                },
                name: {
                    required: 'Please enter name on your card'
                },
                card: {
                    required: 'Please enter your card number'
                },
                cvv: {
                    required: 'Enter CVV2',
                    digits: 'Digits only'
                },
                month: {
                    required: 'Select month'
                },
                year: {
                    required: 'Enter year',
                    digits: 'Digits only please'
                }
            },
        };
    }
    CheckoutFormComponent.prototype.ngOnInit = function () {
        this.countries = countries_1.COUNTRIES;
    };
    CheckoutFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-checkout-form',
            templateUrl: 'checkout-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CheckoutFormComponent);
    return CheckoutFormComponent;
}());
exports.CheckoutFormComponent = CheckoutFormComponent;
//# sourceMappingURL=checkout-form.component.js.map