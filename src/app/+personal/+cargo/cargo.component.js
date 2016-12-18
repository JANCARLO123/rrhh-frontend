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
//import {ViewChild} from "@angular/core/src/metadata/di";
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require("ng2-bootstrap");
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var horario_dialog_component_1 = require('./horario.dialog.component');
var historiaLaboralDto_1 = require('../+historiaLaboral/historiaLaboralDto');
//import * as _ from 'lodash';
var http_empleados_service_1 = require('./http-empleados-service');
//Empleado
var empleado_service_1 = require("../+empleado/empleado.service");
var empleado_1 = require("../+empleado/empleado");
var horarioEmpleado_1 = require("../+empleado/horarioEmpleado");
var CargoComponent = (function () {
    function CargoComponent(cargoService, router, empleadoService, location) {
        this.cargoService = cargoService;
        this.router = router;
        this.empleadoService = empleadoService;
        this.location = location;
        this.defaultItem = { idUnidadDeNegocio: null, nombre: 'Seleccionar' };
        //public cargoDto:Cargo= new Cargo();
        this.historiaLaboralDto = new historiaLaboralDto_1.HistoriaLaboralDto();
        this.empleado = new empleado_1.Empleado();
        this.horariosEmpleado = new horarioEmpleado_1.HorarioEmpleado();
        this.isHorarioSelectec = false;
        this.editable = true;
        this.rows = [];
        this.editing = {};
        this.empleado = this.empleadoService.retrieveData();
        this.verHorarioEmpleado(this.empleado);
    }
    CargoComponent.prototype.ngOnInit = function () {
        this.getUndNegocio(), this.getMonedas(), this.getTipoHorario(), this.getListCargos();
    };
    CargoComponent.prototype.onEditCargo = function (dataItem) {
        this.horarioDialogFormComponent.tituloCabecera = "Editar";
        this.dataItemHorario = dataItem;
        this.horarioDialogFormComponent.entrada = this.dataItemHorario.entrada;
        this.horarioDialogFormComponent.salida = this.dataItemHorario.salida;
        this.horarioDialogFormComponent.almuerzo = this.dataItemHorario.almuerzo;
    };
    CargoComponent.prototype.onCancelarHorario = function () {
    };
    CargoComponent.prototype.onGuardarHorario = function (dto) {
    };
    CargoComponent.prototype.getMonedas = function () {
        var _this = this;
        this.cargoService.completarComboMoneda().subscribe(function (monedaDto) { return _this.monedas = monedaDto; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.getTipoHorario = function () {
        var _this = this;
        this.cargoService.completarComboTipoHorario().subscribe(function (tipoHorarioDto) { return _this.tipoHorarios = tipoHorarioDto; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.getHorarioPersonalizado = function () {
        var _this = this;
        this.cargoService.completarFilaDia().subscribe(function (diaDto) { return _this.dias = diaDto; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.getUndNegocio = function () {
        var _this = this;
        this.cargoService.completarComboUndNegocio().subscribe(function (undnegocios) { return _this.undnegocios = undnegocios; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.getListCargos = function () {
        var _this = this;
        this.cargoService.completarComboCargos().subscribe(function (listCargos) { return _this.cargos = listCargos; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.cargarHorarioSeleccionado = function () {
        var _this = this;
        debugger;
        this.cargoService.cargarComboHorario().subscribe(function (horarioDto) { return _this.horarios = horarioDto; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.obtenerDepartamentos = function (idUndNegocio) {
        var _this = this;
        this.cargoService.completarComboDepa(idUndNegocio).subscribe(function (departamentoDto) { return _this.departamentos = departamentoDto; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.obtenerProyecto = function (idDepartamentoArea) {
        var _this = this;
        this.cargoService.completarComboProyecto(idDepartamentoArea).subscribe(function (proyectoDto) { return _this.proyectos = proyectoDto; }, function (error) { return _this.errorMessage = error; });
    };
    /*private obtenerCargo(idProyecto:number) {
          this.cargoService.completarComboCargo(idProyecto).subscribe(
           cargoDto => this.cargos = cargoDto,
           error =>  this.errorMessage = <any>error);
    }*/
    CargoComponent.prototype.enableRow = function (dataItem) {
        console.log(dataItem);
    };
    CargoComponent.prototype.onEstadoHorario = function (value) {
        return value;
    };
    CargoComponent.prototype.actualizarHorarioSel = function (value) {
        debugger;
        var nombre = value;
        switch (nombre) {
            case "EX":
                console.log('Hi1');
                this.isHorarioSelectec = false;
                this.cargarHorarioSeleccionado();
                //this.onEstadoHorario(true);
                break;
            case "PR":
                console.log('Hi2');
                this.historiaLaboralDto.idHorario = null;
                this.isHorarioSelectec = true;
                //this.onEstadoHorario(false);
                break;
            case "EM":
                console.log('Hi3');
                this.historiaLaboralDto.idHorario = null;
                this.isHorarioSelectec = true;
                //this.onEstadoHorario(false);
                break;
            case "PE":
                this.historiaLaboralDto.idHorario = null;
                this.isHorarioSelectec = true;
                this.getHorarioPersonalizado();
                //this.onEstadoHorario(false);
                break;
            default:
                console.log('error');
        }
    };
    CargoComponent.prototype.actualizarDpto = function (value) {
        this.isEnableUndNegocio = false;
        var codigo = value;
        this.obtenerDepartamentos(codigo);
        this.isEnableProyectos = true;
        this.isEnableCargos = true;
        this.proyectos = null;
    };
    CargoComponent.prototype.actualizarProyecto = function (value) {
        var codigo = value;
        this.obtenerProyecto(codigo);
    };
    /*actualizarCargo(value):void{
  
          let codigo:any = value;
  
          this.obtenerCargo(codigo);
    }*/
    //Grid
    CargoComponent.prototype.actualizarRowLunes = function (event) {
        var codigo = event.srcElement.value;
        this.dias = null;
    };
    CargoComponent.prototype.onChangeIniDate = function (e) {
        //{{request2 | format: 'dd/MM/yyyy'}}
        this.historiaLaboralDto.desdeFecha = e;
    };
    CargoComponent.prototype.onChangeFinDate = function (e) {
        this.historiaLaboralDto.hastaFecha = e;
    };
    CargoComponent.prototype.verHorarioEmpleado = function (empleado) {
        var _this = this;
        this.empleadoService.verHorarioEmpleado(empleado).subscribe(function (data) { return _this.horariosEmpleado = data; }, function (error) { return _this.errorMessage = error; });
    };
    CargoComponent.prototype.goBack = function () {
        this.location.back();
    };
    CargoComponent.prototype.onRegistrarCargo = function (historiaLaboralDto) {
        var _this = this;
        debugger;
        this.historiaLaboralDto.idEmpleado = this.empleado.idEmpleado;
        this.historiaLaboralDto.horasSemanal = this.horariosEmpleado.horasSemanal;
        this.historiaLaboralDto.horasSemanalHorario = this.horariosEmpleado.horasSemanalHorario;
        this.cargoService.registrarCargo(this.historiaLaboralDto).subscribe(function (data) {
            debugger;
            _this.historiaLaboralDto = new historiaLaboralDto_1.HistoriaLaboralDto();
        }, function (error) { return console.log(error); });
    };
    CargoComponent.prototype.onRegistrarCargo2 = function (historiaLaboralDto) {
        var _this = this;
        debugger;
        if (this.validarRequerido()) {
            this.mensaje = 'Ingrese los campos obligatorios';
            $('#dialog-message').dialog({
                modal: true,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                }
            });
            return;
        }
        this.historiaLaboralDto.idEmpleado = this.empleado.idEmpleado;
        this.historiaLaboralDto.horasSemanal = this.horariosEmpleado.horasSemanal;
        this.historiaLaboralDto.horasSemanalHorario = this.horariosEmpleado.horasSemanalHorario;
        this.cargoService.registrarCargo2(this.historiaLaboralDto).then(function (data) {
            _this.navegarDashboard(data);
        });
    };
    CargoComponent.prototype.validarRequerido = function () {
        debugger;
        var validacion = false;
        if (this.historiaLaboralDto.desdeFecha === undefined || this.historiaLaboralDto.desdeFecha == null || this.historiaLaboralDto.desdeFecha == '') {
            $('#desdeFecha').addClass('invalid').removeClass('required');
            $('#desdeFecha').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.historiaLaboralDto.unidadNegocio === undefined || this.historiaLaboralDto.unidadNegocio == null || this.historiaLaboralDto.unidadNegocio == '') {
            $('#unidadNegocio').addClass('invalid').removeClass('required');
            $('#unidadNegocio').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.historiaLaboralDto.idCargo === undefined || this.historiaLaboralDto.idCargo == null) {
            $('#idCargo').addClass('invalid').removeClass('required');
            $('#idCargo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.historiaLaboralDto.idMoneda === undefined || this.historiaLaboralDto.idMoneda == null) {
            $('#idMoneda').addClass('invalid').removeClass('required');
            $('#idMoneda').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.historiaLaboralDto.tipoHorario === undefined || this.historiaLaboralDto.tipoHorario == null || this.historiaLaboralDto.tipoHorario == '') {
            $('#tipoHorario').addClass('invalid').removeClass('required');
            $('#tipoHorario').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    CargoComponent.prototype.navegarDashboard = function (data) {
        console.log('>>>return  data notification: ' + data.mensaje);
        if (data.codigo == 1) {
            console.log('>>>data codigo 1');
            this.mensaje = data.mensaje;
            $('#dialog-message').dialog({
                modal: true,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                }
            });
            this.goBack();
        }
        else if (data.codigo == 0) {
            this.mensaje = data.mensaje;
            $('#dialog-message').dialog({
                modal: true,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                }
            });
        }
        //this._router.navigate(['/personal/busquedaPermisos']);
    };
    CargoComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    CargoComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    __decorate([
        core_1.ViewChild(horario_dialog_component_1.HorarioDialogFormComponent), 
        __metadata('design:type', horario_dialog_component_1.HorarioDialogFormComponent)
    ], CargoComponent.prototype, "horarioDialogFormComponent", void 0);
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], CargoComponent.prototype, "lgModal", void 0);
    CargoComponent = __decorate([
        core_1.Component({
            selector: 'sa-empleado-cargo',
            templateUrl: 'cargo.component.html',
            providers: [http_1.HttpModule,
                { provide: core_1.LOCALE_ID, useValue: "es" }
            ],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.5s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.2s 10 ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [http_empleados_service_1.CargoService, router_1.Router, empleado_service_1.EmpleadoService, common_1.Location])
    ], CargoComponent);
    return CargoComponent;
}());
exports.CargoComponent = CargoComponent;
//# sourceMappingURL=cargo.component.js.map