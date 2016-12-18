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
var ProfileFormComponent = (function () {
    function ProfileFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        emailAddress: {
                            message: 'The email address is not valid'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    ProfileFormComponent.prototype.ngOnInit = function () {
    };
    ProfileFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    ProfileFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-profile-form',
            templateUrl: 'profile-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());
exports.ProfileFormComponent = ProfileFormComponent;
//# sourceMappingURL=profile-form.component.js.map