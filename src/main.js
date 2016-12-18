"use strict";
require('./polyfills.ts');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var environment_1 = require('./environments/environment');
var _1 = require('./app/');
//import * as Keycloak from 'keycloak-js';
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
/*
let keycloak = Keycloak('./keycloak/keycloak.json');
window['_keycloak'] = keycloak;

window['_keycloak'].init(
  {onLoad: 'login-required'}
)
  .success(function (authenticated) {

    if (!authenticated) {
      window.location.reload();
    }

    // refresh login
    setInterval(function () {

      keycloak.updateToken(70).success(function (refreshed) {
        if (refreshed) {
          console.log('Token refreshed');
        } else {
          console.log('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).error(function () {
        console.error('Failed to refresh token');
      });

    }, 60000);

    console.log("Loading...");
*/
//platformBrowserDynamic().bootstrapModule(AppModule);
//});
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=main.js.map