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
var BasicWizardWidgetComponent = (function () {
    function BasicWizardWidgetComponent() {
        this.model = {
            email: '',
            firstname: '',
            lastname: '',
            country: '',
            city: '',
            postal: '',
            wphone: '',
            hphone: ''
        };
        this.steps = [
            {
                key: 'step1',
                title: 'Basic information',
                valid: false,
                checked: false,
                submitted: false,
            },
            {
                key: 'step2',
                title: 'Billing information',
                valid: false,
                checked: false,
                submitted: false,
            },
            {
                key: 'step3',
                title: 'Domain Setup',
                valid: true,
                checked: false,
                submitted: false,
            },
            {
                key: 'step4',
                title: 'Save Form',
                valid: true,
                checked: false,
                submitted: false,
            },
        ];
        this.activeStep = this.steps[0];
    }
    BasicWizardWidgetComponent.prototype.ngOnInit = function () {
    };
    BasicWizardWidgetComponent.prototype.setActiveStep = function (steo) {
        this.activeStep = steo;
    };
    BasicWizardWidgetComponent.prototype.prevStep = function () {
        var idx = this.steps.indexOf(this.activeStep);
        if (idx > 0) {
            this.activeStep = this.steps[idx - 1];
        }
    };
    BasicWizardWidgetComponent.prototype.nextStep = function () {
        this.activeStep.submitted = true;
        if (!this.activeStep.valid) {
            return;
        }
        this.activeStep.checked = true;
        if (this.steps.every(function (it) { return (it.valid && it.checked); })) {
            this.onWizardComplete(this.model);
        }
        else {
            var idx = this.steps.indexOf(this.activeStep);
            this.activeStep = null;
            while (!this.activeStep) {
                idx = idx == this.steps.length - 1 ? 0 : idx + 1;
                if (!this.steps[idx].valid || !this.steps[idx].checked) {
                    this.activeStep = this.steps[idx];
                }
            }
        }
    };
    BasicWizardWidgetComponent.prototype.onWizardComplete = function (data) {
        console.log('basic wizard complete', data);
    };
    // custom change detection
    BasicWizardWidgetComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.lastModel) {
            // backup model to compare further with
            this.lastModel = Object.assign({}, this.model);
        }
        else {
            if (Object.keys(this.model).some(function (it) { return _this.model[it] != _this.lastModel[it]; })) {
                // change detected
                this.steps.find(function (it) { return it.key == 'step1'; }).valid = !!(this.model.email && this.model.firstname && this.model.lastname);
                this.steps.find(function (it) { return it.key == 'step2'; }).valid = !!(this.model.country && this.model.city && this.model.postal);
                this.lastModel = Object.assign({}, this.model);
            }
        }
    };
    BasicWizardWidgetComponent = __decorate([
        core_1.Component({
            selector: 'basic-wizard-widget',
            templateUrl: 'basic-wizard-widget.component.html',
            animations: [
                core_1.trigger('changePane', [
                    core_1.state('out', core_1.style({
                        height: 0,
                    })),
                    core_1.state('in', core_1.style({
                        height: '*',
                    })),
                    core_1.transition('out => in', core_1.animate('250ms ease-out')),
                    core_1.transition('in => out', core_1.animate('250ms 300ms ease-in '))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BasicWizardWidgetComponent);
    return BasicWizardWidgetComponent;
}());
exports.BasicWizardWidgetComponent = BasicWizardWidgetComponent;
//# sourceMappingURL=basic-wizard-widget.component.js.map