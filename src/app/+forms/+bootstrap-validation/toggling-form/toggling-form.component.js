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
var TogglingFormComponent = (function () {
    function TogglingFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: 'The company name is required'
                        }
                    }
                },
                // These fields will be validated when being visible
                job: {
                    validators: {
                        notEmpty: {
                            message: 'The job title is required'
                        }
                    }
                },
                department: {
                    validators: {
                        notEmpty: {
                            message: 'The department name is required'
                        }
                    }
                },
                mobilePhone: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile phone number is required'
                        },
                        digits: {
                            message: 'The mobile phone number is not valid'
                        }
                    }
                },
                // These fields will be validated when being visible
                homePhone: {
                    validators: {
                        digits: {
                            message: 'The home phone number is not valid'
                        }
                    }
                },
                officePhone: {
                    validators: {
                        digits: {
                            message: 'The office phone number is not valid'
                        }
                    }
                }
            }
        };
        this.state = {
            jobInfo: false,
            poneInfo: false,
        };
        this.submitted = false;
    }
    TogglingFormComponent.prototype.toggleInfo = function (key) {
        this.state[key] = !this.state[key];
    };
    TogglingFormComponent.prototype.ngOnInit = function () {
    };
    TogglingFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    TogglingFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-toggling-form',
            templateUrl: 'toggling-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TogglingFormComponent);
    return TogglingFormComponent;
}());
exports.TogglingFormComponent = TogglingFormComponent;
//# sourceMappingURL=toggling-form.component.js.map