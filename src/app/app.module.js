"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var smartadmin_module_1 = require('./shared/smartadmin.module');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var platform_browser_1 = require("@angular/platform-browser");
var user_module_1 = require("./shared/user/user.module");
var user_service_1 = require("./shared/user/user.service");
var login_component_1 = require("./+auth/login/login.component");
var auth_guard_1 = require("./+auth/_guards/auth.guard");
var authentication_service_1 = require("./+auth/_services/authentication.service");
var fake_backend_1 = require("./+auth/_helpers/fake-backend");
var testing_1 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.appRouting,
                smartadmin_module_1.SmartadminModule.forRoot(),
                user_module_1.UserModule.forRoot()
            ],
            providers: [
                auth_guard_1.AuthGuard,
                authentication_service_1.AuthenticationService,
                user_service_1.UserService,
                fake_backend_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_1.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
