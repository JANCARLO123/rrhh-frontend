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
var common_1 = require('@angular/common');
var empleado_service_1 = require("../+empleado/empleado.service");
var Permisos_1 = require("../+busqueda-empleado/Permisos");
var permiso_service_1 = require("../../+autogestion/+solicitar-permiso/permiso.service");
var periodoEmpleado_1 = require("../../+personal/+empleado/periodoEmpleado");
var empleado_1 = require("../../+personal/+empleado/empleado");
var AdministrarPermisoComponent = (function () {
    function AdministrarPermisoComponent(route, empleadoService, _router, permisoService, location) {
        this.route = route;
        this.empleadoService = empleadoService;
        this._router = _router;
        this.permisoService = permisoService;
        this.location = location;
        this.defaultItem = { codigo: null, nombre: 'Seleccionar' };
        this.permisos = new Permisos_1.Permisos();
        this.periodoEmpleadoActual = new periodoEmpleado_1.PeriodoEmpleado();
        this.empleado = new empleado_1.Empleado();
        this.isCompensarhoras = true;
        this.isEnviado = true;
        this.isJefeEnviado = true;
        debugger;
        this.empleado.idEmpleado = 477;
        this.permisos = this.empleadoService.retrieveDataPermisos();
        if (this.permisos.estado == 'P') {
            this.isEnviado = false;
        }
        else if (this.permisos.estado == 'E') {
            this.isEnviado = true;
        }
        else if (this.permisos.estado == 'A') {
            this.isEnviado = true;
        }
        else if (this.permisos.estado == 'R') {
            this.isEnviado = true;
        }
        if (this.permisos.idPermisoEmpleado == 1027) {
            this.isEnviado = true;
        }
        if (this.permisos.idPermisoEmpleado == 1043) {
            this.isJefeEnviado = false;
        }
        if (this.permisos.idPermisoEmpleado == 1052) {
            this.isJefeEnviado = false;
        }
        this.obtenerPeriodoEmpleadoActual(this.empleado);
        this.getMotivosPermiso();
    }
    AdministrarPermisoComponent.prototype.ngOnInit = function () {
    };
    AdministrarPermisoComponent.prototype.obtenerPeriodoEmpleadoActual = function (empleado) {
        var _this = this;
        this.permisoService.obtenerPeriodoEmpleadoActual(empleado).subscribe(function (periodoEmpleado) { return _this.periodoEmpleadoActual = periodoEmpleado; }, function (error) { return _this.errorMessage = error; });
    };
    AdministrarPermisoComponent.prototype.getMotivosPermiso = function () {
        var _this = this;
        this.permisoService.completarComboBox('obtenerMotivosPermiso').subscribe(function (tablaGeneralDto) { return _this.motivos = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    AdministrarPermisoComponent.prototype.cargarMotivo = function (value) {
        if (value == 'P') {
            this.isCompensarhoras = false;
            $('#fechaRecuperacion').removeClass('state-error');
            $('#fechaRecuperacion').parent().removeClass('state-error');
            $('#horaDesdeRecuperacion').removeClass('state-error');
            $('#horaDesdeRecuperacion').parent().removeClass('state-error');
            $('#horaHastaRecuperacion').removeClass('state-error');
            $('#horaHastaRecuperacion').parent().removeClass('state-error');
        }
        else {
            this.isCompensarhoras = true;
        }
    };
    AdministrarPermisoComponent.prototype.onChangeFecha = function (value) {
        this.permisos.fecha = value;
        $('#fechaPermiso').removeClass('state-error');
        $('#fechaPermiso').parent().removeClass('state-error');
    };
    AdministrarPermisoComponent.prototype.onChangeHoraInicio = function (value) {
        this.permisos.horaInicio = value;
        $('#horaDesde').removeClass('state-error');
        $('#horaDesde').parent().removeClass('state-error');
    };
    AdministrarPermisoComponent.prototype.onChangeHoraFin = function (value) {
        this.permisos.horaFin = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    AdministrarPermisoComponent.prototype.onChangeFechaRecuperacion = function (value) {
        this.permisos.fechaRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    AdministrarPermisoComponent.prototype.onChangeHoraInicioRecuperacion = function (value) {
        this.permisos.horaInicioRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    AdministrarPermisoComponent.prototype.onChangeHoraFinRecuperacion = function (value) {
        this.permisos.horaFinRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    };
    AdministrarPermisoComponent.prototype.onActualizarPermisoEmpleado = function () {
        var _this = this;
        debugger;
        var fechaAct = new Date();
        this.permisos.periodoEmpleado = this.periodoEmpleadoActual;
        if (this.validarRequerido()) {
            this.mensaje = 'Ingrese los campos obligatorios';
            $('#dialog-message').dialog("open");
            return;
        }
        var cadena = this.permisos.fecha.split('/');
        var horaIni = this.permisos.horaInicio.split(':');
        var horaFin = this.permisos.horaFin.split(':');
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
        this.permisos.horas = parseFloat(hours.toFixed(2));
        if (this.permisos.motivo == 'P') {
            if (this.validarRequeridoFechaRecuperacion()) {
                this.mensaje = 'Ingrese los campos obligatorios de la Fecha de Recuperacion.';
                $('#dialog-message').dialog("open");
                return;
            }
            var cadenaRecuperacion = this.permisos.fechaRecuperacion.split('/');
            var horaIniRecuperacion = this.permisos.horaInicioRecuperacion.split(':');
            var horaFinRecuperacion = this.permisos.horaFinRecuperacion.split(':');
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
        this.permisoService.actualizarPermisoEmpleado(this.permisos).subscribe(function (data) {
            _this.navegarDashboard(data);
        }, function (error) { return console.log(error); });
    };
    AdministrarPermisoComponent.prototype.onEnviarPermisoEmpleado = function () {
        var _this = this;
        this.permisoService.enviarPermisoEmpleado(this.permisos).subscribe(function (data) {
            _this.navegarDashboard(data);
        }, function (error) { return console.log(error); });
    };
    AdministrarPermisoComponent.prototype.onEliminarPermisoEmpleado = function () {
        var _this = this;
        debugger;
        this.empleadoService.eliminarPermisoEmpleado(this.permisos).subscribe(function (data) {
            _this.goBack();
        }, function (error) { return _this.errorMessage = error; });
    };
    AdministrarPermisoComponent.prototype.onDevolverPermisoEmpleado = function () {
        var _this = this;
        this.permisoService.devolverPermisoEmpleado(this.permisos).subscribe(function (data) {
            _this.navegarDashboard(data);
        }, function (error) { return console.log(error); });
    };
    AdministrarPermisoComponent.prototype.validarRequerido = function () {
        debugger;
        var validacion = false;
        if (this.permisos.motivo === undefined || this.permisos.motivo == null || this.permisos.motivo == '') {
            $('#motivo').addClass('invalid').removeClass('required');
            $('#motivo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisos.fecha === undefined || this.permisos.fecha == null || this.permisos.fecha == '') {
            $('#fechaPermiso').addClass('invalid').removeClass('required');
            $('#fechaPermiso').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisos.horaInicio === undefined || this.permisos.horaInicio == null || this.permisos.horaInicio == '') {
            $('#horaDesde').addClass('invalid').removeClass('required');
            $('#horaDesde').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisos.horaFin === undefined || this.permisos.horaFin == null || this.permisos.horaFin == '') {
            $('#horaHasta').addClass('invalid').removeClass('required');
            $('#horaHasta').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    AdministrarPermisoComponent.prototype.validarRequeridoFechaRecuperacion = function () {
        var validacion = false;
        if (this.permisos.fechaRecuperacion === undefined || this.permisos.fechaRecuperacion == null || this.permisos.fechaRecuperacion == '') {
            $('#fechaRecuperacion').addClass('invalid').removeClass('required');
            $('#fechaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisos.horaInicioRecuperacion === undefined || this.permisos.horaInicioRecuperacion == null || this.permisos.horaInicioRecuperacion == '') {
            $('#horaDesdeRecuperacion').addClass('invalid').removeClass('required');
            $('#horaDesdeRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.permisos.horaFinRecuperacion === undefined || this.permisos.horaFinRecuperacion == null || this.permisos.horaFinRecuperacion == '') {
            $('#horaHastaRecuperacion').addClass('invalid').removeClass('required');
            $('#horaHastaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    AdministrarPermisoComponent.prototype.navegarDashboard = function (data) {
        console.log('>>>return  data notification: ' + data.mensaje);
        if (data.codigo == 1) {
            this.mensaje = data.mensaje;
            this.permisos = new Permisos_1.Permisos();
            $('#dialog-message').dialog({
                modal: true,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                }
            });
        }
        else if (data.codigo == 0) {
            this.mensaje = data.mensaje;
            $('#dialog-message').dialog("open");
        }
        //this._router.navigate(['/personal/busquedaPermisos']);
    };
    AdministrarPermisoComponent.prototype.cerrarDialog = function () {
        this.mensaje = '';
        $('#dialog-message').dialog("close");
    };
    AdministrarPermisoComponent.prototype.onRegresarBusquedaEmpleado = function () {
        this.location.back();
    };
    AdministrarPermisoComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdministrarPermisoComponent = __decorate([
        core_1.Component({
            selector: 'sa-adm-permiso',
            templateUrl: 'administrar.permiso.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, empleado_service_1.EmpleadoService, router_1.Router, permiso_service_1.PermisoService, common_1.Location])
    ], AdministrarPermisoComponent);
    return AdministrarPermisoComponent;
}());
exports.AdministrarPermisoComponent = AdministrarPermisoComponent;
//# sourceMappingURL=administrar.permiso.component.js.map