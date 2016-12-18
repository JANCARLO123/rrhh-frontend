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
var movie_form_component_1 = require("./movie-form/movie-form.component");
var toggling_form_component_1 = require("./toggling-form/toggling-form.component");
var attribute_form_component_1 = require("./attribute-form/attribute-form.component");
var button_group_form_component_1 = require("./button-group-form/button-group-form.component");
var product_form_component_1 = require("./product-form/product-form.component");
var profile_form_component_1 = require("./profile-form/profile-form.component");
var contact_form_component_1 = require("./contact-form/contact-form.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var bootstrap_validation_component_1 = require("./bootstrap-validation.component");
var smartadmin_validation_module_1 = require("../../shared/forms/validation/smartadmin-validation.module");
var bootstrap_validation_routing_1 = require("./bootstrap-validation.routing");
var BootstrapValidationModule = (function () {
    function BootstrapValidationModule() {
    }
    BootstrapValidationModule = __decorate([
        core_1.NgModule({
            imports: [
                smartadmin_module_1.SmartadminModule,
                smartadmin_validation_module_1.SmartadminValidationModule,
                bootstrap_validation_routing_1.bootstrapValidationRouting
            ],
            declarations: [movie_form_component_1.MovieFormComponent, toggling_form_component_1.TogglingFormComponent, contact_form_component_1.ContactFormComponent,
                attribute_form_component_1.AttributeFormComponent, button_group_form_component_1.ButtonGroupFormComponent, product_form_component_1.ProductFormComponent, profile_form_component_1.ProfileFormComponent,
                bootstrap_validation_component_1.BootstrapValidationComponent,
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapValidationModule);
    return BootstrapValidationModule;
}());
exports.BootstrapValidationModule = BootstrapValidationModule;
//# sourceMappingURL=bootstrap-validation.module.js.map