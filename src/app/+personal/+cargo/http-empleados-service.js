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
var cargo_1 = require("./cargo");
var environment_1 = require("../../../environments/environment");
require('rxjs/add/operator/toPromise');
var CargoService = (function () {
    function CargoService(http) {
        this.http = http;
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.departamentosUrl = 'http://' + this.localhost + ':' + this.port + '/undNegocio/obtenerDepaArea?idUnidadDeNegocio=';
        this.monedaUrl = 'http://' + this.localhost + ':' + this.port + '/moneda/obtenerMoneda';
        this.undNegocioUrl = 'http://' + this.localhost + ':' + this.port + '/undNegocio/obtenerUndNegocio';
        this.listCargosUrl = 'http://' + this.localhost + ':' + this.port + '/undNegocio/obtenerListCargos';
        this.proyectoUrl = 'http://' + this.localhost + ':' + this.port + '/undNegocio/obtenerProyecto?idDepartamentoArea=';
        this.cargoUrl = 'http://' + this.localhost + ':' + this.port + '/undNegocio/obtenerCargo?idProyecto=';
        this.tipoHorarioUrl = 'http://' + this.localhost + ':' + this.port + '/tablaGeneral/obtenerTipoHorario';
        this.diasUrl = 'http://' + this.localhost + ':' + this.port + '/tablaGeneral/obtenerDias';
        this.URL_CREATED_CARGO = 'http://' + this.localhost + ':' + this.port + '/cargo/crearCargo';
        this.HORARIO_SEL_URL = 'http://' + this.localhost + ':' + this.port + '/cargo/nombreHorario';
        this.cargoDto = new cargo_1.Cargo();
    }
    CargoService.prototype.registrarCargo = function (historiaLaboralDto) {
        debugger;
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(historiaLaboralDto);
        return this.http.post(this.URL_CREATED_CARGO, body, { headers: header }); //.map((res: Response) => res.json());
    };
    CargoService.prototype.registrarCargo2 = function (historiaLaboralDto) {
        debugger;
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(historiaLaboralDto);
        return this.http.post(this.URL_CREATED_CARGO, body, { headers: header })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.cargarComboHorario = function () {
        return this.http.get(this.HORARIO_SEL_URL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarComboDepa = function (idUndNegocio) {
        return this.http.get(this.departamentosUrl + idUndNegocio)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarComboMoneda = function () {
        return this.http.get(this.monedaUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarComboTipoHorario = function () {
        return this.http.get(this.tipoHorarioUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarFilaDia = function () {
        return this.http.get(this.diasUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarComboUndNegocio = function () {
        return this.http.get(this.undNegocioUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarComboCargos = function () {
        return this.http.get(this.listCargosUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarComboProyecto = function (idDepartamentoArea) {
        return this.http.get(this.proyectoUrl + idDepartamentoArea)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.completarComboCargo = function (idProyecto) {
        return this.http.get(this.cargoUrl + idProyecto)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CargoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CargoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CargoService);
    return CargoService;
}());
exports.CargoService = CargoService;
//# sourceMappingURL=http-empleados-service.js.map