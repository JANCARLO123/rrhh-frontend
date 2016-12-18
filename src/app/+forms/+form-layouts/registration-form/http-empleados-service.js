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
var DepartamentoService = (function () {
    function DepartamentoService(http) {
        this.http = http;
        this.departamentosUrl = 'http://localhost:7999/departamento/';
        this.undNegocioUrl = 'http://localhost:7999/undNegocio/';
        this.proyectoUrl = 'http://localhost:7999/proyecto/';
    }
    //getDepartamentos(): Promise<Departamento[]> {
    /*getDepartamentos(): Observable<Departamento[]> {
         /*const headers = new Headers();
         headers.append('Access-Control-Allow-Headers', 'Content-Type');
         headers.append('Access-Control-Allow-Methods', 'GET');
         headers.append('Access-Control-Allow-Origin', '*');
     return this.http.get(this.departamentosUrl)
               .map(this.extractData)
               .catch(this.handleError);
                /*.toPromise()
                .then(response => response.json().data as Departamento[])
                .catch(this.handleError);
   }*/
    DepartamentoService.prototype.completarComboDepa = function (metodo) {
        return this.http.get(this.departamentosUrl + metodo)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DepartamentoService.prototype.completarComboUndNegocio = function (metodo) {
        return this.http.get(this.undNegocioUrl + metodo)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DepartamentoService.prototype.completarComboProyecto = function (metodo) {
        return this.http.get(this.proyectoUrl + metodo)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /*getDepartamento(idDepartamento: number): Promise<Departamento> {
      return this.getDepartamentos()
                 .then(departamentos => departamentos.find(departamento => departamento.idDepartamento === idDepartamento));
    }*/
    DepartamentoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DepartamentoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DepartamentoService);
    return DepartamentoService;
}());
exports.DepartamentoService = DepartamentoService;
//# sourceMappingURL=http-empleados-service.js.map