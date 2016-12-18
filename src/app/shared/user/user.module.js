"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_info_component_1 = require("./login-info/login-info.component");
var logout_component_1 = require("./logout/logout.component");
var user_service_1 = require("./user.service");
var UserModule = (function () {
    function UserModule() {
    }
    UserModule.forRoot = function () {
        return {
            ngModule: UserModule,
            providers: [user_service_1.UserService]
        };
    };
    UserModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [login_info_component_1.LoginInfoComponent, logout_component_1.LogoutComponent],
            exports: [login_info_component_1.LoginInfoComponent, logout_component_1.LogoutComponent]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
