"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var forgot_component_1 = require("./forgot/forgot.component");
var locked_component_1 = require("./locked/locked.component");
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'forgot-password',
        component: forgot_component_1.ForgotComponent
    },
    {
        path: 'locked',
        component: locked_component_1.LockedComponent
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=auth.routing.js.map