"use strict";
var router_1 = require("@angular/router");
// import {TypographyComponent} from "./typography/typography.component";
// import {TreeViewsComponent} from "./tree-views/tree-views.component";
// import {NestableListsComponent} from "./nestable-lists/nestable-lists.component";
// import {iconsRouting} from "./icons/icons.routing";
// import {ButtonsComponent} from "./buttons/buttons.component";
// import {JqueryUiComponent} from "./jquery-ui/jquery-ui.component";
// import {GeneralElementsComponent} from "./general-elements/general-elements.component";
// import {GridComponent} from "./grid/grid.component";
exports.routes = [
    {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
    },
    { path: 'buttons', loadChildren: 'app/+ui-elements/+buttons/buttons.module#ButtonsModule', data: { pageTitle: 'Buttons' } },
    { path: 'grid', loadChildren: 'app/+ui-elements/+grid/grid.module#GridModule', data: { pageTitle: 'Grid' } },
    { path: 'typography', loadChildren: 'app/+ui-elements/+typography/typography.module#TypographyModule', data: { pageTitle: 'Typography' } },
    { path: 'tree-views', loadChildren: 'app/+ui-elements/+tree-views/tree-views.module#TreeViewsModule', data: { pageTitle: 'Tree Views' } },
    { path: 'nestable-lists', loadChildren: 'app/+ui-elements/+nestable-lists/nestable-lists.module#NestableListsModule', data: { pageTitle: 'Nestable Lists' } },
    { path: 'jquery-ui', loadChildren: 'app/+ui-elements/+jquery-ui/jquery-ui.module#JqueryUiShowcaseModule', data: { pageTitle: 'Jquery Ui' } },
    { path: 'general', loadChildren: 'app/+ui-elements/+general-elements/general-elements.module#GeneralElementsModule', data: { pageTitle: 'General Elements' } },
    { path: 'icons', loadChildren: 'app/+ui-elements/+icons/icons.module#IconsModule', data: { pageTitle: 'Icons' } },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=ui-elements.routing.js.map