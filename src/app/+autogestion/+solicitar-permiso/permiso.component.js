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
var router_1 = require("@angular/router");
var permisoEmpleado_1 = require("../../+personal/+empleado/permisoEmpleado");
var permiso_service_1 = require("./permiso.service");
var empleado_1 = require("../../+personal/+empleado/empleado");
var historiaLaboralDto_1 = require("../../+personal/+historiaLaboral/historiaLaboralDto");
var periodoEmpleado_1 = require("../../+personal/+empleado/periodoEmpleado");
var PermisoComponent = (function () {
    function PermisoComponent(route, permisoService, _router) {
        this.route = route;
        this.permisoService = permisoService;
        this._router = _router;
        this.defaultItem = { codigo: null, nombre: 'Seleccionar' };
        this.permisoEmpleado = new permisoEmpleado_1.PermisoEmpleado();
        this.isCompensarhoras = true;
        this.empleado = new empleado_1.Empleado();
        this.historiaLaboralActual = new historiaLaboralDto_1.HistoriaLaboralDto();
        this.periodoEmpleadoActual = new periodoEmpleado_1.PeriodoEmpleado();
        this.empleado.idEmpleado = 477;
        //historia laboral
        this.obtenerHistoriaLaboralActual(this.empleado);
        this.obtenerPeriodoEmpleadoActual(this.empleado);
        //periodo
        this.getMotivosPermiso();
    }
    PermisoComponent.prototype.ngOnInit = function () {
    };
    PermisoComponent.prototype.getMotivosPermiso = function () {
        var _this = this;
        this.permisoService.completarComboBox('obtenerMotivosPermiso').subscribe(function (tablaGeneralDto) { return _this.motivos = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    PermisoComponent.prototype.obtenerHistoriaLaboralActual = function (empleado) {
        var _this = this;
        this.permisoService.obtenerHistoriaLaboralActual(empleado).subscribe(function (historiaLaboral) { return _this.historiaLaboralActual = historiaLaboral; }, function (error) { return _this.errorMessage = error; });
    };
    PermisoComponent.prototype.obtenerPeriodoEmpleadoActual = function (empleado) {
        var _this = this;
        this.permisoService.obtenerPeriodoEmpleadoActual(empleado).subscribe(function (periodoEmpleado) { return _this.periodoEmpleadoActual = periodoEmpleado; }, function (error) { return _this.errorMessage = error; });
    };
    PermisoComponent.prototype.cargarMotivo = function (value) {
        if (value == 'P') {
            this.isCompensarhoras = false;
        }
        else {
            this.isCompensarhoras = true;
            this.permisoEmpleado.fechaRecuperacion = undefined;
            this.permisoEmpleado.horaInicioRecuperacion = undefined;
            this.permisoEmpleado.horaFinRecuperacion = undefined;
            $('#fechaRecuperacion').removeClass('state-error');
            $('#fechaRecuperacion').parent().removeClass('state-error');
            $('#horaDesdeRecuperacion').removeClass('state-error');
            $('#horaDesdeRecuperacion').parent().removeClass('state-error');
            $('#horaHastaRecuperacion').removeClass('state-error');
            $('#horaHastaRecuperacion').parent().removeClass('state-error');
        }
    };
    PermisoComponent.prototype.onChangeFecha = function (value) {
        this.permisoEmpleado.fecha = value;
        $('#fechaPermiso').removeClass('state-error');
        $('#fechaPermiso').parent().removeClass('state-error');
    };
    PermisoComponent.prototype.onChangeHoraInicio = function (value) {
        this.permisoEmpleado.horaInicio = value;
        $('#horaDesde').removeClass('state-error');
        $('#horaDesde').parent().removeClass('state-error');
    };
    PermisoComponent.prototype.onChangeHoraFin = function (value) {
        this.permisoEmpleado.horaFin = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    PermisoComponent.prototype.onChangeFechaRecuperacion = function (value) {
        this.permisoEmpleado.fechaRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    PermisoComponent.prototype.onChangeHoraInicioRecuperacion = function (value) {
        this.permisoEmpleado.horaInicioRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    PermisoComponent.prototype.onChangeHoraFinRecuperacion = function (value) {
        this.permisoEmpleado.horaFinRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    PermisoComponent.prototype.onRegistrarPermisoEmpleado = function () {
        var _this = this;
        debugger;
        var fechaAct = new Date();
        this.permisoEmpleado.periodoEmpleado = this.periodoEmpleadoActual;
        if (this.validarRequerido()) {
            this.mensaje = 'Ingrese los campos obligatorios';
            $('#dialog-message').dialog("open");
            return;
        }
        var cadena = this.permisoEmpleado.fecha.split('/');
        var horaIni = this.permisoEmpleado.horaInicio.split(':');
        var horaFin = this.permisoEmpleado.horaFin.split(':');
        var fechaIni = new Date(parseInt(cadena[2]), parseInt(cadena[1]) - 1, parseInt(cadena[0]), parseInt(horaIni[0]), parseInt(horaIni[1]));
        var fechaFin = new Date(parseInt(cadena[2]), parseInt(cadena[1]) - 1, parseInt(cadena[0]), parseInt(horaFin[0]), parseInt(horaFin[1]));
        var fechaPerm = new Date(parseInt(cadena[2]), parseInt(cadena[1]) - 1, parseInt(cadena[0]));
        if (fechaPerm < fechaAct) {
            this.mensaje = 'La fecha del permiso debe ser mayor a la fecha de hoy.';
            $('#dialog-message').dialog("open");
            return;
        }
        if (fechaFin.getTime() < fechaIni.getTime()) {
            this.mensaje = 'La hora final del permiso debe ser mayor a la hora inicial del permiso.';
            $('#dialog-message').dialog("open");
            return;
        }
        var interval = fechaFin.getTime() - fechaIni.getTime();
        var hours = interval / (1000 * 60 * 60);
        this.permisoEmpleado.horas = parseFloat(hours.toFixed(2));
        if (this.permisoEmpleado.motivo == 'P') {
            if (this.validarRequeridoFechaRecuperacion()) {
                this.mensaje = 'Ingrese los campos obligatorios de la Fecha de Recuperacion.';
                $('#dialog-message').dialog("open");
                return;
            }
            var cadenaRecuperacion = this.permisoEmpleado.fechaRecuperacion.split('/');
            var horaIniRecuperacion = this.permisoEmpleado.horaInicioRecuperacion.split(':');
            var horaFinRecuperacion = this.permisoEmpleado.horaFinRecuperacion.split(':');
            var fechaIniRecuperacion = new Date(parseInt(cadenaRecuperacion[2]), parseInt(cadenaRecuperacion[1]) - 1, parseInt(cadenaRecuperacion[0]), parseInt(horaIniRecuperacion[0]), parseInt(horaIniRecuperacion[1]));
            var fechaFinRecuperacion = new Date(parseInt(cadenaRecuperacion[2]), parseInt(cadenaRecuperacion[1]) - 1, parseInt(cadenaRecuperacion[0]), parseInt(horaFinRecuperacion[0]), parseInt(horaFinRecuperacion[1]));
            var fechaRec = new Date(parseInt(cadenaRecuperacion[2]), parseInt(cadenaRecuperacion[1]) - 1, parseInt(cadenaRecuperacion[0]));
            if (fechaRec < fechaAct) {
                this.mensaje = 'La fecha de recuperacion debe ser mayor a la fecha de hoy.';
                $('#dialog-message').dialog("open");
                return;
            }
            if (fechaFinRecuperacion.getTime() < fechaIniRecuperacion.getTime()) {
                this.mensaje = 'La hora final de recuperacion debe ser mayor a la hora inicial de recuperacion.';
                $('#dialog-message').dialog("open");
                return;
            }
        }
        this.permisoService.registrarPermisoEmpleado(this.permisoEmpleado).subscribe(function (data) {
            _this.navegarDashboard(data);
        }, function (error) { return console.log(error); });
    };
    PermisoComponent.prototype.navegarDashboard = function (data) {
        if (data.codigo == 1) {
            this.mensaje = data.mensaje;
            this.permisoEmpleado = new permisoEmpleado_1.PermisoEmpleado();
            $('#dialog-message').dialog("open");
        }
        else if (data.codigo == 0) {
            this.mensaje = data.mensaje;
            $('#dialog-message').dialog("open");
        }
        //this._router.navigate(['/personal/busquedaPermisos']);
    };
    PermisoComponent.prototype.cerrarDialog = function () {
        this.mensaje = '';
        $('#dialog-message').dialog("close");
    };
    PermisoComponent.prototype.validarRequerido = function () {
        var validacion = false;
        if (this.permisoEmpleado.motivo === undefined || this.permisoEmpleado.motivo == null || this.permisoEmpleado.motivo == '') {
            $('#motivo').addClass('invalid').removeClass('required');
            $('#motivo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisoEmpleado.fecha === undefined || this.permisoEmpleado.fecha == null || this.permisoEmpleado.fecha == '') {
            $('#fechaPermiso').addClass('invalid').removeClass('required');
            $('#fechaPermiso').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisoEmpleado.horaInicio === undefined || this.permisoEmpleado.horaInicio == null || this.permisoEmpleado.horaInicio == '') {
            $('#horaDesde').addClass('invalid').removeClass('required');
            $('#horaDesde').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisoEmpleado.horaFin === undefined || this.permisoEmpleado.horaFin == null || this.permisoEmpleado.horaFin == '') {
            $('#horaHasta').addClass('invalid').removeClass('required');
            $('#horaHasta').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    PermisoComponent.prototype.validarRequeridoFechaRecuperacion = function () {
        var validacion = false;
        if (this.permisoEmpleado.fechaRecuperacion === undefined || this.permisoEmpleado.fechaRecuperacion == null || this.permisoEmpleado.fechaRecuperacion == '') {
            $('#fechaRecuperacion').addClass('invalid').removeClass('required');
            $('#fechaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisoEmpleado.horaInicioRecuperacion === undefined || this.permisoEmpleado.horaInicioRecuperacion == null || this.permisoEmpleado.horaInicioRecuperacion == '') {
            $('#horaDesdeRecuperacion').addClass('invalid').removeClass('required');
            $('#horaDesdeRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisoEmpleado.horaFinRecuperacion === undefined || this.permisoEmpleado.horaFinRecuperacion == null || this.permisoEmpleado.horaFinRecuperacion == '') {
            $('#horaHastaRecuperacion').addClass('invalid').removeClass('required');
            $('#horaHastaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    PermisoComponent = __decorate([
        core_1.Component({
            selector: 'sa-permiso',
            templateUrl: 'permiso.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, permiso_service_1.PermisoService, router_1.Router])
    ], PermisoComponent);
    return PermisoComponent;
}());
exports.PermisoComponent = PermisoComponent;
//# sourceMappingURL=permiso.component.js.map