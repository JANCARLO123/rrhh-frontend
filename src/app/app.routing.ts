/**
 * Created by griga on 7/11/16.
 */
import {Routes, RouterModule} from "@angular/router";
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {LoginComponent} from "./+auth/login/login.component";
import {AuthGuard} from "./+auth/_guards/auth.guard";

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        data: {pageTitle: 'Home'},
        children: [
            {
                path: '', redirectTo: 'personal/busquedaEmpleado', pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
                data: {pageTitle: 'Dashboard'}
            },
            {
                path: 'smartadmin',
                loadChildren: 'app/+smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule',
                data: {pageTitle: 'Smartadmin'}
            },
            {
                path: 'app-views',
                loadChildren: 'app/+app-views/app-views.module#AppViewsModule',
                data: {pageTitle: 'App Views'}
            },
            {
                path: 'calendar',
                loadChildren: 'app/+calendar/calendar.module#CalendarModule',
                data: {pageTitle: 'Calendar'}
            },
            {
                path: 'e-commerce',
                loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',
                data: {pageTitle: 'E-commerce'}
            },
            {
                path: 'forms',
                loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',
                data: {pageTitle: 'Forms'}
            },
            {
                path: 'graphs',
                loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',
                data: {pageTitle: 'Graphs'}
            },
            {path: 'maps', loadChildren: 'app/+maps/maps.module#MapsModule', data: {pageTitle: 'Maps'}},
            {
                path: 'miscellaneous',
                loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',
                data: {pageTitle: 'Miscellaneous'}
            },
            {path: 'outlook', loadChildren: 'app/+outlook/outlook.module#OutlookModule', data: {pageTitle: 'Outlook'}},
            {path: 'tables', loadChildren: 'app/+tables/tables.module#TablesModule', data: {pageTitle: 'Tables'}},
            {path: 'ui', loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule', data: {pageTitle: 'Ui'}},
            {
                path: 'widgets',
                loadChildren: 'app/+widgets/widgets-showcase.module#WidgetsShowcaseModule',
                data: {pageTitle: 'Widgets'}
            },

            {
                path: 'personal',
                loadChildren: 'app/+personal/personal.module#PersonalModule',
                data: {pageTitle: 'Personal'}
            },
            {
                path: 'autogestion',
                loadChildren: 'app/+autogestion/autogestion.module#AutogestionModule',
                data: {pageTitle: 'Autogestión'}
            },
            {
                path: 'gestionTiempo',
                loadChildren: 'app/+gestion-tiempo/gestion.tiempo.module#GestionTiempoModule',
                data: {pageTitle: 'Gestión de Tiempo'}
            },


        ]
    },
    {path: '**', redirectTo: 'miscellaneous'}

];

export const appRouting = RouterModule.forRoot(appRoutes);
