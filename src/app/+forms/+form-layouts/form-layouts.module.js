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
var checkout_form_1 = require("./checkout-form");
var registration_form_1 = require("./registration-form");
var review_form_component_1 = require("./review-form/review-form.component");
var order_form_component_1 = require("./order-form/order-form.component");
var comment_form_component_1 = require("./comment-form/comment-form.component");
var contact_form_component_1 = require("./contact-form/contact-form.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var form_layouts_component_1 = require("./form-layouts.component");
var form_layouts_routing_1 = require("./form-layouts.routing");
var smartadmin_validation_module_1 = require("../../shared/forms/validation/smartadmin-validation.module");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var FormLayoutsModule = (function () {
    function FormLayoutsModule() {
    }
    FormLayoutsModule = __decorate([
        core_1.NgModule({
            imports: [
                smartadmin_module_1.SmartadminModule,
                form_layouts_routing_1.formLayoutsRouting,
                smartadmin_validation_module_1.SmartadminValidationModule,
                smartadmin_input_module_1.SmartadminInputModule
            ],
            declarations: [checkout_form_1.CheckoutFormComponent, registration_form_1.RegistrationFormComponent,
                review_form_component_1.ReviewFormComponent, order_form_component_1.OrderFormComponent, comment_form_component_1.CommentFormComponent, contact_form_component_1.ContactFormComponent,
                form_layouts_component_1.FormLayoutsComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], FormLayoutsModule);
    return FormLayoutsModule;
}());
exports.FormLayoutsModule = FormLayoutsModule;
//# sourceMappingURL=form-layouts.module.js.map