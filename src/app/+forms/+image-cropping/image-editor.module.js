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
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var image_editor_routing_1 = require("./image-editor.routing");
var image_editor_component_1 = require("./image-editor.component");
var default_panel_component_1 = require('./default-panel/default-panel.component');
var jcrop_module_1 = require("../../shared/forms/jcrop/jcrop.module");
var ng2_redux_1 = require("ng2-redux");
var api_panel_component_1 = require('./api-panel/api-panel.component');
var image_editor_reducer_1 = require('./image-editor.reducer');
var ng2_bootstrap_1 = require("ng2-bootstrap");
var jcrop_reducer_1 = require("../../shared/forms/jcrop/reducers/jcrop-reducer");
var show_selection_panel_component_1 = require("./show-selection-panel/show-selection-panel.component");
var preview_panel_component_1 = require('./preview-panel/preview-panel.component');
var animations_panel_component_1 = require('./animations-panel/animations-panel.component');
var styling_panel_component_1 = require('./styling-panel/styling-panel.component');
var ImageEditorModule = (function () {
    function ImageEditorModule(ngRedux) {
        this.ngRedux = ngRedux;
        this.ngRedux.configureStore(image_editor_reducer_1.default, {
            apiPanel: jcrop_reducer_1.configJcropInitialState('apiPanel'),
            defaultPanel: jcrop_reducer_1.configJcropInitialState('defaultPanel'),
            showSelectionPanel: jcrop_reducer_1.configJcropInitialState('showSelectionPanel'),
            previewPanel: jcrop_reducer_1.configJcropInitialState('previewPanel'),
            animationsPanel: jcrop_reducer_1.configJcropInitialState('animationsPanel'),
            stylingPanel: jcrop_reducer_1.configJcropInitialState('stylingPanel'),
        });
    }
    ImageEditorModule = __decorate([
        core_1.NgModule({
            imports: [image_editor_routing_1.routing, ng2_redux_1.NgReduxModule, smartadmin_module_1.SmartadminModule, jcrop_module_1.JcropModule, ng2_bootstrap_1.TabsModule],
            declarations: [image_editor_component_1.ImageEditorComponent, default_panel_component_1.DefaultPanelComponent, api_panel_component_1.ApiPanelComponent, show_selection_panel_component_1.ShowSelectionPanelComponent, preview_panel_component_1.PreviewPanelComponent, animations_panel_component_1.AnimationsPanelComponent, styling_panel_component_1.StylingPanelComponent],
            exports: [image_editor_component_1.ImageEditorComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], ImageEditorModule);
    return ImageEditorModule;
}());
exports.ImageEditorModule = ImageEditorModule;
//# sourceMappingURL=image-editor.module.js.map