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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var environment_1 = require("../../../environments/environment");
var PaisService = (function () {
    function PaisService(http) {
        this.http = http;
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
    }
    PaisService.prototype.completarComboPais = function () {
        return this.http.get('http://' + this.localhost + ':' + this.port + '/pais/obtenerPaises')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PaisService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    PaisService.prototype.completarComboDepartamento = function (codigoPais) {
        return this.http.get('http://' + this.localhost + ':' + this.port + '/pais/obtenerDepartamentos?codigoPais=' + codigoPais)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PaisService.prototype.completarComboProvincia = function (codigoDpto) {
        return this.http.get('http://' + this.localhost + ':' + this.port + '/pais/obtenerProvincias?codigoDpto=' + codigoDpto)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PaisService.prototype.completarComboDistrito = function (codigoProvincia) {
        return this.http.get('http://' + this.localhost + ':' + this.port + '/pais/obtenerDistritos?codigoProvincia=' + codigoProvincia)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PaisService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PaisService);
    return PaisService;
}());
exports.PaisService = PaisService;
//# sourceMappingURL=pais.service.js.map