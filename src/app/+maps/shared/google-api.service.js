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
var smartadmin_config_1 = require('../../shared/smartadmin.config');
var url = 'https://maps.googleapis.com/maps/api/js?key=' + smartadmin_config_1.config.GOOGLE_API_KEY + '&callback=__onGoogleLoaded';
var GoogleAPIService = (function () {
    function GoogleAPIService() {
        var _this = this;
        if (window['google']) {
            this.loadAPI = Promise.resolve(window['google']);
        }
        else {
            this.loadAPI = new Promise(function (resolve) {
                window['__onGoogleLoaded'] = function (ev) {
                    console.log('google.maps loaded');
                    resolve(window['google']);
                };
                _this.loadScript();
            });
        }
    }
    GoogleAPIService.prototype.loadScript = function () {
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    GoogleAPIService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GoogleAPIService);
    return GoogleAPIService;
}());
exports.GoogleAPIService = GoogleAPIService;
//# sourceMappingURL=google-api.service.js.map