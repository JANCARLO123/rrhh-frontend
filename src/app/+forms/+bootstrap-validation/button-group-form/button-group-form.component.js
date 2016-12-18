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
var ButtonGroupFormComponent = (function () {
    function ButtonGroupFormComponent() {
        this.validatorOptions = {
            excluded: ':disabled',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                gender: {
                    validators: {
                        notEmpty: {
                            message: 'The gender is required'
                        }
                    }
                },
                'languages': {
                    validators: {
                        choice: {
                            min: 1,
                            max: 2,
                            message: 'Please choose 1 - 2 languages you can speak'
                        }
                    }
                }
            }
        };
        this.model = {
            languages: [
                { key: 'english', value: 'English', selected: false },
                { key: 'german', value: 'German', selected: false },
                { key: 'french', value: 'French', selected: false },
                { key: 'russian', value: 'Russian', selected: false },
                { key: 'italian', value: 'Italian', selected: false }
            ],
            gender: undefined
        };
        this.submitted = false;
    }
    ButtonGroupFormComponent.prototype.ngOnInit = function () {
    };
    ButtonGroupFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    ButtonGroupFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-button-group-form',
            templateUrl: 'button-group-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonGroupFormComponent);
    return ButtonGroupFormComponent;
}());
exports.ButtonGroupFormComponent = ButtonGroupFormComponent;
//# sourceMappingURL=button-group-form.component.js.map