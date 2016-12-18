"use strict";
/**
 * Created by griga on 7/11/16.
 */
var router_1 = require("@angular/router");
var main_layout_component_1 = require("./shared/layout/app-layouts/main-layout.component");
var login_component_1 = require("./+auth/login/login.component");
var auth_guard_1 = require("./+auth/_guards/auth.guard");
exports.appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: '',
        component: main_layout_component_1.MainLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: { pageTitle: 'Home' },
        children: [
            {
                // path: '', redirectTo: 'e-commerce/products-view', pathMatch: 'full'
                path: '', redirectTo: 'personal/busquedaEmpleado', pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
                data: { pageTitle: 'Dashboard' }
            },
            {
                path: 'smartadmin',
                loadChildren: 'app/+smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule',
                data: { pageTitle: 'Smartadmin' }
            },
            {
                path: 'app-views',
                loadChildren: 'app/+app-views/app-views.module#AppViewsModule',
                data: { pageTitle: 'App Views' }
            },
            {
                path: 'calendar',
                loadChildren: 'app/+calendar/calendar.module#CalendarModule',
                data: { pageTitle: 'Calendar' }
            },
            {
                path: 'e-commerce',
                loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',
                data: { pageTitle: 'E-commerce' }
            },
            {
                path: 'forms',
                loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',
                data: { pageTitle: 'Forms' }
            },
            {
                path: 'graphs',
                loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',
                data: { pageTitle: 'Graphs' }
            },
            { path: 'maps', loadChildren: 'app/+maps/maps.module#MapsModule', data: { pageTitle: 'Maps' } },
            {
                path: 'miscellaneous',
                loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',
                data: { pageTitle: 'Miscellaneous' }
            },
            { path: 'outlook', loadChildren: 'app/+outlook/outlook.module#OutlookModule', data: { pageTitle: 'Outlook' } },
            { path: 'tables', loadChildren: 'app/+tables/tables.module#TablesModule', data: { pageTitle: 'Tables' } },
            { path: 'ui', loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule', data: { pageTitle: 'Ui' } },
            {
                path: 'widgets',
                loadChildren: 'app/+widgets/widgets-showcase.module#WidgetsShowcaseModule',
                data: { pageTitle: 'Widgets' }
            },
            {
                path: 'personal',
                loadChildren: 'app/+personal/personal.module#PersonalModule',
                data: { pageTitle: 'Personal' }
            },
            {
                path: 'autogestion',
                loadChildren: 'app/+autogestion/autogestion.module#AutogestionModule',
                data: { pageTitle: 'Autogestión' }
            },
        ]
    },
    { path: '**', redirectTo: 'miscellaneous' }
];
exports.appRouting = router_1.RouterModule.forRoot(exports.appRoutes);
