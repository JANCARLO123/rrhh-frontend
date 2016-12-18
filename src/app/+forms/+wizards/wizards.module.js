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
var wizards_routing_1 = require('./wizards.routing');
var wizards_component_1 = require("./wizards.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var smartadmin_wizards_module_1 = require("../../shared/forms/wizards/smartadmin-wizards.module");
var basic_wizard_widget_component_1 = require("./basic-wizard-widget/basic-wizard-widget.component");
var fuel_ux_wizard_widget_component_1 = require("./fuel-ux-wizard-widget/fuel-ux-wizard-widget.component");
var WizardsModule = (function () {
    function WizardsModule() {
    }
    WizardsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                wizards_routing_1.wizardsRouting,
                smartadmin_module_1.SmartadminModule,
                smartadmin_wizards_module_1.SmartadminWizardsModule
            ],
            declarations: [wizards_component_1.WizardsComponent, basic_wizard_widget_component_1.BasicWizardWidgetComponent, fuel_ux_wizard_widget_component_1.FuelUxWizardWidgetComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WizardsModule);
    return WizardsModule;
}());
exports.WizardsModule = WizardsModule;
//# sourceMappingURL=wizards.module.js.map