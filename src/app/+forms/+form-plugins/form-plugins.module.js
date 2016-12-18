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
var form_plugins_routing_1 = require('./form-plugins.routing');
var form_plugins_component_1 = require("./form-plugins.component");
var x_editable_widget_component_1 = require("./x-editable-widget/x-editable-widget.component");
var duallistbox_widget_component_1 = require("./duallistbox-widget/duallistbox-widget.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var FormPluginsModule = (function () {
    function FormPluginsModule() {
    }
    FormPluginsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                form_plugins_routing_1.formPluginsRouting,
                smartadmin_module_1.SmartadminModule,
                smartadmin_input_module_1.SmartadminInputModule,
            ],
            declarations: [form_plugins_component_1.FormPluginsComponent, x_editable_widget_component_1.XEditableWidgetComponent, duallistbox_widget_component_1.DuallistboxWidgetComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FormPluginsModule);
    return FormPluginsModule;
}());
exports.FormPluginsModule = FormPluginsModule;
//# sourceMappingURL=form-plugins.module.js.map