"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    { path: 'editors',
        loadChildren: 'app/+forms/+bootstrap-editors/bootstrap-editors.module#BootstrapEditorsModule',
        data: { pageTitle: 'Bootstrap Editors' }
    },
    { path: 'bootstrap-elements',
        loadChildren: 'app/+forms/+bootstrap-elements/bootstrap-elements.module#BootstrapElementsModule',
        data: { pageTitle: 'Bootstrap Elements' }
    },
    {
        path: 'bootstrap-validation',
        loadChildren: 'app/+forms/+bootstrap-validation/bootstrap-validation.module#BootstrapValidationModule',
        data: { pageTitle: 'Bootstrap Validation' }
    },
    {
        path: 'dropzone',
        loadChildren: 'app/+forms/+dropzone-showcase/dropzone-showcase.module#DropzoneShowcaseModule',
        data: { pageTitle: 'Dropzone' }
    },
    {
        path: 'elements',
        loadChildren: 'app/+forms/+form-elements/form-elements.module#FormElementsModule',
        data: { pageTitle: 'Elements' }
    },
    {
        path: 'layouts',
        loadChildren: 'app/+forms/+form-layouts/form-layouts.module#FormLayoutsModule',
        data: { pageTitle: 'Layouts' }
    },
    {
        path: 'plugins',
        loadChildren: 'app/+forms/+form-plugins/form-plugins.module#FormPluginsModule',
        data: { pageTitle: 'Plugins' }
    },
    {
        path: 'validation',
        loadChildren: 'app/+forms/+form-validation/form-validation.module#FormValidationModule',
        data: { pageTitle: 'Validation' }
    },
    {
        path: 'image-cropping',
        loadChildren: 'app/+forms/+image-cropping/image-editor.module#ImageEditorModule',
        data: { pageTitle: 'Image Cropping' } },
    {
        path: 'wizards',
        loadChildren: 'app/+forms/+wizards/wizards.module#WizardsModule',
        data: { pageTitle: 'Wizards' }
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=forms-showcase.routing.js.map