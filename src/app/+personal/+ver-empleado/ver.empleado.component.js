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
var empleado_service_1 = require("../+empleado/empleado.service");
var pais_service_1 = require("../+empleado/pais.service");
var empleado_1 = require("../+empleado/empleado");
var router_1 = require("@angular/router");
var horarioEmpleado_1 = require("../+empleado/horarioEmpleado");
var periodoEmpleado_1 = require("../+empleado/periodoEmpleado");
var VerEmpleadoComponent = (function () {
    function VerEmpleadoComponent(route, empleadoService, paisService, _router) {
        this.route = route;
        this.empleadoService = empleadoService;
        this.paisService = paisService;
        this._router = _router;
        this.empleado = new empleado_1.Empleado();
        this.defaultItem = { idPeriodoEmpleado: null, periodo: 'Todos' };
        this.documentos = [];
        this.educaciones = [];
        this.experienciasLaborales = [];
        this.equiposEntregados = [];
        this.dependientes = [];
        this.licencias = [];
        this.horariosEmpleado = new horarioEmpleado_1.HorarioEmpleado();
        this.historiasLaborales = [];
        this.periodosEmpleados = [];
        this.permisosEmpleados = [];
        this.vacaciones = [];
        this.periodoEmpleado = new periodoEmpleado_1.PeriodoEmpleado();
        this.pageSize = 10;
        this.skip = 0;
        var empleado = this.empleadoService.retrieveData();
        empleado.fechaNacimiento = null;
        empleado.fechaIngreso = null;
        this.verEmpleado(empleado);
        this.verDocumentos(empleado);
        this.verEducacion(empleado);
        this.verExperienciaLaboral(empleado);
        this.verEquipoEntregado(empleado);
        this.verDependiente(empleado);
        this.verLicencia(empleado);
        this.verHorarioEmpleado(empleado);
        this.verHistoriaLaboral(empleado);
        this.verPeriodoEmpleado(empleado);
        this.verPermisoEmpleado(empleado);
        this.verVacaciones(empleado);
        //this.subirImagen();
    }
    VerEmpleadoComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        // this.obtenerDocumentos().subscribe(data => this.view = data);
    };
    VerEmpleadoComponent.prototype.onRegresarBusquedaEmpleado = function () {
        this._router.navigate(['/personal/busquedaEmpleado']);
    };
    VerEmpleadoComponent.prototype.verEmpleado = function (empleado) {
        var _this = this;
        this.empleadoService.verEmpleado(empleado).subscribe(function (data) { return _this.empleado = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verDocumentos = function (empleado) {
        var _this = this;
        this.empleadoService.verDocumentos(empleado).subscribe(function (data) { return _this.cargarDocumentos(data); }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verEducacion = function (empleado) {
        var _this = this;
        this.empleadoService.verEducacion(empleado).subscribe(function (data) { return _this.educaciones = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verExperienciaLaboral = function (empleado) {
        var _this = this;
        this.empleadoService.verExperienciaLaboral(empleado).subscribe(function (data) { return _this.experienciasLaborales = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verEquipoEntregado = function (empleado) {
        var _this = this;
        this.empleadoService.verEquipoEntregado(empleado).subscribe(function (data) { return _this.equiposEntregados = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verDependiente = function (empleado) {
        var _this = this;
        this.empleadoService.verDependiente(empleado).subscribe(function (data) { return _this.dependientes = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verLicencia = function (empleado) {
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarLicencia(this.periodoEmpleado);
    };
    VerEmpleadoComponent.prototype.verHorarioEmpleado = function (empleado) {
        var _this = this;
        this.empleadoService.verHorarioEmpleado(empleado).subscribe(function (data) { return _this.horariosEmpleado = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verHistoriaLaboral = function (empleado) {
        var _this = this;
        this.empleadoService.verHistoriaLaboral(empleado).subscribe(function (data) { return _this.historiasLaborales = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verPeriodoEmpleado = function (empleado) {
        var _this = this;
        this.empleadoService.verPeriodoEmpleado(empleado).subscribe(function (data) { return _this.periodosEmpleados = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.verPermisoEmpleado = function (empleado) {
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarPermisoEmpleado(this.periodoEmpleado);
    };
    VerEmpleadoComponent.prototype.verVacaciones = function (empleado) {
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarVacaciones(this.periodoEmpleado);
    };
    VerEmpleadoComponent.prototype.onChangeLicenciaPorPeriodo = function (value) {
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarLicencia(this.periodoEmpleado);
    };
    VerEmpleadoComponent.prototype.onChangePermisoEmpleadoPorPeriodo = function (value) {
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarPermisoEmpleado(this.periodoEmpleado);
    };
    VerEmpleadoComponent.prototype.onChangeVacacionesPorPeriodo = function (value) {
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarVacaciones(this.periodoEmpleado);
    };
    VerEmpleadoComponent.prototype.cargarLicencia = function (periodoEmpleado) {
        var _this = this;
        this.empleadoService.verLicencia(periodoEmpleado).subscribe(function (data) { return _this.licencias = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.cargarPermisoEmpleado = function (periodoEmpleado) {
        var _this = this;
        this.empleadoService.verPermisoEmpleado(periodoEmpleado).subscribe(function (data) { return _this.permisosEmpleados = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.cargarVacaciones = function (periodoEmpleado) {
        var _this = this;
        this.empleadoService.verVacaciones(periodoEmpleado).subscribe(function (data) { return _this.vacaciones = data; }, function (error) { return _this.errorMessage = error; });
    };
    VerEmpleadoComponent.prototype.cargarDocumentos = function (data) {
        this.documentos = data;
        for (var indice in this.documentos) {
            if (this.documentos[indice].fotoEmpleado == 1) {
                $("#imgLogo1Subido").css("background-image", "url('data:image/jpeg;base64," + this.documentos[indice].contenidoArchivo + "')");
                this.documentos.splice(parseInt(indice), 1);
                break;
            }
        }
    };
    VerEmpleadoComponent.prototype.onIrHistorialTrabajo = function () {
        this.empleadoService.storeData(this.empleado);
        console.log('>>>>>>>>IdEmpleado' + this.empleado.idEmpleado);
        this._router.navigate(['/personal/historiaLaboral']);
    };
    VerEmpleadoComponent.prototype.onViewDocument = function (dto) {
        //let url:string = 'http://localhost:7999/empleado/descargarArchivoDocumento?archivo='+ ;
        if ($("#export_file").length > 0) {
            $("#export_file").remove();
        }
        if ($("#export_file").length === 0) {
            var iframe = $("<iframe src='' name='export_file' id='export_file'></iframe>");
            iframe.appendTo("body");
            var form = $("<form action='http://localhost:7999/empleado/descargarArchivoDocumento' method='post' target='export_file'></form>");
            form.append($("<input type='hidden' name='contenidoArchivo' id='contenidoArchivo' />").attr("value", dto.contenidoArchivo));
            form.append($("<input type='hidden' name='tipoArchivo' id='tipoArchivo' />").attr("value", dto.tipoArchivo));
            form.append($("<input type='hidden' name='nombre' id='nombre' />").attr("value", dto.nombre));
            form.append($("<input type='hidden' name='nombreArchivo' id='nombreArchivo' />").attr("value", dto.nombreArchivo));
            form.appendTo("body");
            form.submit();
        }
    };
    VerEmpleadoComponent.prototype.ngOnInit = function () {
    };
    VerEmpleadoComponent.prototype.onEdit = function () {
        this.empleadoService.storeData(this.empleado);
        this._router.navigate(['/personal/empleado']);
    };
    VerEmpleadoComponent.prototype.onIrGestionarPermiso = function () {
        this.empleadoService.storeData(this.empleado);
        this._router.navigate(['/personal/busquedaPermisos']);
    };
    VerEmpleadoComponent = __decorate([
        core_1.Component({
            selector: 'sa-ver-empleado',
            templateUrl: 'ver.empleado.component.html',
            providers: [pais_service_1.PaisService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, empleado_service_1.EmpleadoService, pais_service_1.PaisService, router_1.Router])
    ], VerEmpleadoComponent);
    return VerEmpleadoComponent;
}());
exports.VerEmpleadoComponent = VerEmpleadoComponent;
//# sourceMappingURL=ver.empleado.component.js.map