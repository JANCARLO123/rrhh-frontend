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
var field_component_1 = require('./components/field.component');
var fields_component_1 = require('./components/fields.component');
var jcrop_component_1 = require('./components/jcrop.component');
var crop_actions_1 = require("./actions/crop.actions");
var option_radio_component_1 = require('./components/option-radio.component');
var option_toggle_component_1 = require('./components/option-toggle.component');
var options_actions_1 = require("./actions/options.actions");
var forms_1 = require("@angular/forms");
var jcrop_preview_component_1 = require('./components/jcrop-preview.component');
var JcropModule = (function () {
    function JcropModule() {
    }
    JcropModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [field_component_1.FieldComponent, fields_component_1.FieldsComponent, jcrop_component_1.JcropComponent,
                option_radio_component_1.OptionRadioComponent, option_toggle_component_1.OptionToggleComponent, jcrop_preview_component_1.JcropPreviewComponent],
            exports: [field_component_1.FieldComponent, fields_component_1.FieldsComponent, jcrop_component_1.JcropComponent,
                option_radio_component_1.OptionRadioComponent, option_toggle_component_1.OptionToggleComponent, jcrop_preview_component_1.JcropPreviewComponent],
            providers: [crop_actions_1.CropActions, options_actions_1.OptionsActions]
        }), 
        __metadata('design:paramtypes', [])
    ], JcropModule);
    return JcropModule;
}());
exports.JcropModule = JcropModule;
//# sourceMappingURL=jcrop.module.js.map