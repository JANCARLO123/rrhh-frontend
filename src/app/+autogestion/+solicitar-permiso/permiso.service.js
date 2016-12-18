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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var environment_1 = require("../../../environments/environment");
var PermisoService = (function () {
    //empleado: Empleado = new Empleado();
    function PermisoService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.tablaGeneralUrl = 'http://' + this.localhost + ':' + this.port + '/tablaGeneral/';
    }
    PermisoService.prototype.completarComboBox = function (metodo) {
        return this.http.get(this.tablaGeneralUrl + metodo)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PermisoService.prototype.obtenerHistoriaLaboralActual = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/permisoEmpleado/obtenerHistoriaLaboralActual';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PermisoService.prototype.obtenerPeriodoEmpleadoActual = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/permisoEmpleado/obtenerPeriodoEmpleadoActual';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PermisoService.prototype.registrarPermisoEmpleado = function (permisoEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/permisoEmpleado/registrarPermisoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(permisoEmpleado), { headers: header }).map(function (res) { return res.json(); });
    };
    PermisoService.prototype.actualizarPermisoEmpleado = function (permisoEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/permisoEmpleado/actualizarPermisoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(permisoEmpleado), { headers: header }).map(function (res) { return res.json(); });
    };
    PermisoService.prototype.enviarPermisoEmpleado = function (permisoEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/permisoEmpleado/enviarPermisoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(permisoEmpleado), { headers: header }).map(function (res) { return res.json(); });
    };
    PermisoService.prototype.devolverPermisoEmpleado = function (permisoEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/permisoEmpleado/devolverPermisoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(permisoEmpleado), { headers: header }).map(function (res) { return res.json(); });
    };
    PermisoService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    PermisoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], PermisoService);
    return PermisoService;
}());
exports.PermisoService = PermisoService;
//# sourceMappingURL=permiso.service.js.map