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
require('rxjs/add/operator/toPromise');
var historiaLaboralDto_1 = require('./historiaLaboralDto');
var environment_1 = require("../../../environments/environment");
var HistoriaLaboralService = (function () {
    function HistoriaLaboralService(http) {
        this.http = http;
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.historiaLaboralUrl = 'http://' + this.localhost + ':' + this.port + '/empleado/historiaLaboral?idEmpleado=';
        this.idHistoriaLaboralUrl = 'http://' + this.localhost + ':' + this.port + '/empleado/editHistoriaLaboral?idHistorialLaboral=';
        this.updateCargoUrl = 'http://' + this.localhost + ':' + this.port + '/empleado/updateCargo';
        this.URL_UPDATE_CARGO = 'http://' + this.localhost + ':' + this.port + '/cargo/actualizarCargo';
        this.URL_DELETE_HISTORIALLABORAL = 'http://' + this.localhost + ':' + this.port + '/cargo/eliminarCargo/';
        this.historiaLaboral = new historiaLaboralDto_1.HistoriaLaboralDto();
    }
    HistoriaLaboralService.prototype.completar_Grid_Historia_Laboral = function (idEmpleado) {
        return this.http.get(this.historiaLaboralUrl + idEmpleado)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HistoriaLaboralService.prototype.completar_Grid_Historia_Laboral2 = function (idEmpleado) {
        debugger;
        return this.http.get(this.historiaLaboralUrl + idEmpleado)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HistoriaLaboralService.prototype.eliminarHistorialLaboral = function (idHistorialLaboral) {
        return this.http.get(this.URL_DELETE_HISTORIALLABORAL + idHistorialLaboral)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HistoriaLaboralService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    HistoriaLaboralService.prototype.getHistoriaLaboralId = function (idHistorialLaboral) {
        return this.http.get(this.idHistoriaLaboralUrl + idHistorialLaboral)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HistoriaLaboralService.prototype.storeData = function (historiaLaboral) {
        this.historiaLaboral = historiaLaboral;
    };
    HistoriaLaboralService.prototype.retrieveData = function () {
        return this.historiaLaboral;
    };
    HistoriaLaboralService.prototype.updateCargo = function (historiaLaboral) {
        debugger;
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(historiaLaboral);
        return this.http.post(this.URL_UPDATE_CARGO, body, { headers: header }); //.map((res: Response) => res.json());
    };
    HistoriaLaboralService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HistoriaLaboralService);
    return HistoriaLaboralService;
}());
exports.HistoriaLaboralService = HistoriaLaboralService;
//# sourceMappingURL=http-historiaLaboral-service.js.map