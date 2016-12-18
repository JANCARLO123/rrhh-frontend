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
var empleado_1 = require("./empleado");
require("rxjs/Rx");
var Permisos_1 = require("../+busqueda-empleado/Permisos");
var environment_1 = require("../../../environments/environment");
require('rxjs/add/operator/toPromise');
var EmpleadoService = (function () {
    function EmpleadoService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.tablaGeneralUrl = 'http://' + this.localhost + ':' + this.port + '/tablaGeneral/';
        this.empleado = new empleado_1.Empleado();
        this.permisos = new Permisos_1.Permisos();
    }
    EmpleadoService.prototype.completarComboBox = function (metodo) {
        return this.http.get(this.tablaGeneralUrl + metodo)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    EmpleadoService.prototype.obtenerComboCentroCosto = function () {
        return this.http.get('http://' + this.localhost + ':' + this.port + '/centroCosto/obtenerCentrosCosto')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.buscarEmpleado = function (busquedaEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/busquedaEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(busquedaEmpleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.registrarEmpleado = function (empleado) {
        empleado.idEmpresa = 4;
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/registrarEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); });
        ;
    };
    EmpleadoService.prototype.verEmpleado = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verDocumentos = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verDocumentos';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verEducacion = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verEducacion';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verExperienciaLaboral = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verExperienciaLaboral';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verEquipoEntregado = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verEquipoEntregado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verDependiente = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verDependiente';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verLicencia = function (periodoEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verLicencia';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(periodoEmpleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verHorarioEmpleado = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verHorarioEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verHistoriaLaboral = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verHistoriaLaboral';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verPeriodoEmpleado = function (empleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verPeriodoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(empleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verPermisoEmpleado = function (periodoEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verPermisoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(periodoEmpleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.verVacaciones = function (periodoEmpleado) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/verVacaciones';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(periodoEmpleado), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.storeData = function (empleado) {
        this.empleado = empleado;
    };
    EmpleadoService.prototype.storeDataPermiso = function (permisos) {
        this.permisos = permisos;
    };
    EmpleadoService.prototype.retrieveData = function () {
        return this.empleado;
    };
    EmpleadoService.prototype.retrieveDataPermisos = function () {
        return this.permisos;
    };
    EmpleadoService.prototype.buscarPermisoEmpleado = function (busquedaPermisos) {
        debugger;
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/busquedaPermisoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(busquedaPermisos), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService.prototype.eliminarPermisoEmpleado = function (permisos) {
        var url = 'http://' + this.localhost + ':' + this.port + '/empleado/eliminarPermisoEmpleado';
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(permisos), { headers: header }).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmpleadoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], EmpleadoService);
    return EmpleadoService;
}());
exports.EmpleadoService = EmpleadoService;
//# sourceMappingURL=empleado.service.js.map