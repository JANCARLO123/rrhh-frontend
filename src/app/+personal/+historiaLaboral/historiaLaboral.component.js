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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var http_historiaLaboral_service_1 = require('./http-historiaLaboral-service');
//Empleado
var empleado_service_1 = require("../+empleado/empleado.service");
var empleado_1 = require("../+empleado/empleado");
var HistoriaLaboralComponent = (function () {
    function HistoriaLaboralComponent(
        //private router: ActivatedRoute,
        router, empleadoService, location, historiaLaboralService) {
        this.router = router;
        this.empleadoService = empleadoService;
        this.location = location;
        this.historiaLaboralService = historiaLaboralService;
        this.empleado = new empleado_1.Empleado();
        this.empleado = this.empleadoService.retrieveData();
    }
    HistoriaLaboralComponent.prototype.onRegresarVerEmpleado = function () {
        this.router.navigate(['/personal/verEmpleado']);
    };
    HistoriaLaboralComponent.prototype.onEdit = function (dataItem) {
        //this.dataItemHistorial = dataItem;
        //this.router.navigate(['/personal/historiaLaboral/editarCargo/:idHistorialLaboral', this.dataItemHistorial.idHistorialLaboral]);
        debugger;
        this.historiaLaboralService.storeData(dataItem);
        this.router.navigate(['/personal/editarCargo']);
    };
    HistoriaLaboralComponent.prototype.onDelete = function (dataItem) {
        var _this = this;
        debugger;
        var idHistorialLaboral = dataItem.idHistorialLaboral;
        this.historiaLaboralService.eliminarHistorialLaboral(idHistorialLaboral).subscribe(function (historiaLaboralDto) { return _this.historiaLaboral = historiaLaboralDto; }, function (error) { return _this.errorMessage = error; });
        location.reload();
        //this.router.navigate(['/deleteCargo', this.selectedHistoriaLaboralDto.idHistorialLaboral]);
    };
    HistoriaLaboralComponent.prototype.onNuevoCargo = function () {
        this.empleadoService.storeData(this.empleado);
        this.router.navigate(['/personal/nuevoCargo']);
    };
    HistoriaLaboralComponent.prototype.ngOnInit = function () {
        this.getGrid_HistoriaLaboral();
    };
    HistoriaLaboralComponent.prototype.getGrid_HistoriaLaboral = function () {
        var _this = this;
        var idEmpleado = this.empleado.idEmpleado;
        console.log('>>>>>>>>Grid idEmpleado: ' + idEmpleado);
        this.historiaLaboralService.completar_Grid_Historia_Laboral(idEmpleado).subscribe(function (historiaLaboralDto) { return _this.historiaLaboral = historiaLaboralDto; }, function (error) { return _this.errorMessage = error; });
    };
    HistoriaLaboralComponent.prototype.getGrid_HistoriaLaboral2 = function () {
        var _this = this;
        var idEmpleado = this.empleado.idEmpleado;
        console.log('>>>>>>>>Grid2 idEmpleado: ' + idEmpleado);
        debugger;
        this.historiaLaboralService.completar_Grid_Historia_Laboral2(idEmpleado).then(function (historiaLaboralDto) { return _this.historiaLaboral = historiaLaboralDto; }, function (error) { return _this.errorMessage = error; });
    };
    HistoriaLaboralComponent = __decorate([
        core_1.Component({
            selector: 'sa-empleado-historiaLaboral',
            templateUrl: 'historiaLaboral.component.html',
            providers: [http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [router_1.Router, empleado_service_1.EmpleadoService, common_1.Location, http_historiaLaboral_service_1.HistoriaLaboralService])
    ], HistoriaLaboralComponent);
    return HistoriaLaboralComponent;
}());
exports.HistoriaLaboralComponent = HistoriaLaboralComponent;
//# sourceMappingURL=historiaLaboral.component.js.map