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
var router_1 = require('@angular/router');
var http_historiaLaboral_service_1 = require('../+historiaLaboral/http-historiaLaboral-service');
var EditCargoResolve = (function () {
    function EditCargoResolve(historiaLaboralService, router) {
        this.historiaLaboralService = historiaLaboralService;
        this.router = router;
    }
    EditCargoResolve.prototype.resolve = function (route) {
        var idHistorialLaboral = route.params['idHistorialLaboral'];
        return this.historiaLaboralService.getHistoriaLaboralId(idHistorialLaboral);
    };
    EditCargoResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_historiaLaboral_service_1.HistoriaLaboralService, router_1.Router])
    ], EditCargoResolve);
    return EditCargoResolve;
}());
exports.EditCargoResolve = EditCargoResolve;
//# sourceMappingURL=cargo-edit-resolve.service.js.map