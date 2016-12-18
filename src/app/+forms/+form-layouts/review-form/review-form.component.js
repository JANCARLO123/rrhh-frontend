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
var ReviewFormComponent = (function () {
    function ReviewFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                review: {
                    required: true,
                    minlength: 20
                },
                quality: {
                    required: true
                },
                reliability: {
                    required: true
                },
                overall: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                email: {
                    required: 'Please enter your email address',
                    email: '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
                },
                review: {
                    required: 'Please enter your review'
                },
                quality: {
                    required: 'Please rate quality of the product'
                },
                reliability: {
                    required: 'Please rate reliability of the product'
                },
                overall: {
                    required: 'Please rate the product'
                }
            }
        };
    }
    ReviewFormComponent.prototype.ngOnInit = function () {
    };
    ReviewFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-review-form',
            templateUrl: 'review-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());
exports.ReviewFormComponent = ReviewFormComponent;
//# sourceMappingURL=review-form.component.js.map