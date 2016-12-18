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
var busqueda_permisos_1 = require("./busqueda.permisos");
var http_empleados_service_1 = require("../+cargo/http-empleados-service");
var empleado_service_1 = require("../+empleado/empleado.service");
var router_1 = require("@angular/router");
var environment_1 = require("../../../environments/environment");
var ng2_completer_1 = require("ng2-completer");
/**
 * Created by josediaz on 8/11/2016.
 */
var BusquedaPermisosComponent = (function () {
    function BusquedaPermisosComponent(empleadoService, cargoService, _router, completerService) {
        this.empleadoService = empleadoService;
        this.cargoService = cargoService;
        this._router = _router;
        this.completerService = completerService;
        this.defaultItem = { idUnidadDeNegocio: null, nombre: 'Todos' };
        this.defaultItemTablaGeneral = { codigo: null, nombre: 'Todos' };
        this.defaultItemDepartamento = { idDepartamentoArea: null, idUnidadDeNegocio: null, nombre: 'Todos' };
        this.defaultItemProyecto = { idProyecto: null, nombre: 'Todos' };
        this.busquedaPermisos = new busqueda_permisos_1.BusquedaPermisos();
        this.permisos = [];
        this.pageSize = 10;
        this.skip = 0;
        this.isEmpty = true;
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.urlBusquedaCodigoPermiso = 'http://' + this.localhost + ':' + this.port + '/empleado/busquedaCodigoPermiso?codigo=';
        this.dataServiceEmpleado = completerService.remote('http://' + this.localhost + ':' + this.port + '/permisoEmpleado/autocompleteEmpleado?search=', 'nombreEmpleado', 'nombreEmpleado');
        this.dataServiceJefeInmediato = completerService.remote('http://' + this.localhost + ':' + this.port + '/permisoEmpleado/autocompleteEmpleado?search=', 'nombreEmpleado', 'nombreEmpleado');
        var empleado = this.empleadoService.retrieveData();
        if (empleado === undefined || empleado == null || empleado.idEmpleado == null) {
            this.busquedaPermisos.idEmpleado = null;
        }
        else {
            this.busquedaPermisos.idEmpleado = empleado.idEmpleado;
            this.onSubmit();
        }
    }
    BusquedaPermisosComponent.prototype.selectEmpleado = function (e) {
        if (e != null)
            this.busquedaPermisos.idEmpleado = e.originalObject.idEmpleado;
        else
            this.busquedaPermisos.idEmpleado = null;
    };
    BusquedaPermisosComponent.prototype.selectJefeInmediato = function (e) {
        if (e != null)
            this.busquedaPermisos.idJefeInmediato = e.originalObject.idEmpleado;
        else
            this.busquedaPermisos.idJefeInmediato = null;
    };
    BusquedaPermisosComponent.prototype.onLimpiar = function () {
        this.busquedaPermisos.nombreEmpleado = undefined;
        this.busquedaPermisos.desde = undefined;
        this.busquedaPermisos.hasta = undefined;
        this.busquedaPermisos.jefeInmediato = undefined;
        this.busquedaPermisos.codigoPermiso = undefined;
        this.busquedaPermisos.idJefeInmediato = null;
        this.busquedaPermisos.idEmpleado = null;
        this.unidadNegocioSelect = this.defaultItem;
        this.departamentoSelect = this.defaultItemDepartamento;
        this.departamentos = null;
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos = null;
        this.estadosSelect = this.defaultItemTablaGeneral;
        this.gridView = {
            data: [],
            total: 0
        };
    };
    BusquedaPermisosComponent.prototype.onSubmit = function () {
        debugger;
        this.validarValoresSeleccionados();
        console.log(this.busquedaPermisos);
        this.getPermisos();
    };
    BusquedaPermisosComponent.prototype.getPermisos = function () {
        var _this = this;
        this.empleadoService.buscarPermisoEmpleado(this.busquedaPermisos).subscribe(function (data) {
            _this.permisos = data;
            _this.skip = 0;
            _this.obtenerPermisos();
        }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaPermisosComponent.prototype.onEdit = function (dataItem) {
        debugger;
        if (dataItem.estado == 'P') {
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }
        else if (dataItem.estado == 'E') {
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }
        else if (dataItem.estado == 'A') {
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }
        else if (dataItem.estado == 'R') {
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }
    };
    BusquedaPermisosComponent.prototype.onDelete = function (dataItem) {
        var _this = this;
        debugger;
        console.log("Borrando Permiso " + dataItem.codigo);
        this.empleadoService.eliminarPermisoEmpleado(dataItem).subscribe(function (data) {
            _this.getPermisos();
        }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaPermisosComponent.prototype.obtenerPermisos = function () {
        if (this.permisos.length > 0) {
            this.isEmpty = false;
            this.gridView = {
                data: this.permisos.slice(this.skip, this.skip + this.pageSize),
                total: this.permisos.length
            };
        }
        else {
            this.isEmpty = true;
            this.gridView = {
                data: [],
                total: 0
            };
        }
    };
    BusquedaPermisosComponent.prototype.ngOnInit = function () {
        this.getUndNegocio();
        this.getEmpleadoEstados();
    };
    BusquedaPermisosComponent.prototype.validarValoresSeleccionados = function () {
        debugger;
        if (this.busquedaPermisos.nombreEmpleado === undefined)
            this.busquedaPermisos.nombreEmpleado = '';
        if (this.busquedaPermisos.desde === undefined)
            this.busquedaPermisos.desde = '';
        if (this.busquedaPermisos.hasta === undefined)
            this.busquedaPermisos.hasta = '';
        if (this.busquedaPermisos.codigoPermiso === undefined)
            this.busquedaPermisos.codigoPermiso = '';
        if (this.busquedaPermisos.jefeInmediato === undefined)
            this.busquedaPermisos.jefeInmediato = '';
        (this.estadosSelect === undefined || this.estadosSelect == null) ? this.busquedaPermisos.estado = ''
            : this.busquedaPermisos.estado = this.estadosSelect.codigo;
        /*(this.unidadNegocioSelect === undefined || this.unidadNegocioSelect == null)? this.busquedaPermisos.unidadNegocio = ''
            : this.busquedaPermisos.unidadNegocio = this.unidadNegocioSelect.idUnidadDeNegocio.toString();

        (this.departamentoSelect === undefined || this.departamentoSelect == null)? this.busquedaPermisos.departamento = ''
            : this.busquedaPermisos.departamento = this.departamentoSelect.idDepartamentoArea.toString();

        (this.proyectoSelect === undefined || this.departamentoSelect == null) ? this.busquedaPermisos.proyecto = ''
            : this.busquedaPermisos.proyecto = this.proyectoSelect.idProyecto.toString();*/
        this.unidadNegocioSelect === undefined ? this.busquedaPermisos.unidadNegocio = ''
            : this.busquedaPermisos.unidadNegocio = (this.unidadNegocioSelect.idUnidadDeNegocio == null ? '' : this.unidadNegocioSelect.idUnidadDeNegocio.toString());
        ;
        this.departamentoSelect === undefined ? this.busquedaPermisos.departamento = ''
            : this.busquedaPermisos.departamento = (this.departamentoSelect.idDepartamentoArea == null ? '' : this.departamentoSelect.idDepartamentoArea.toString());
        this.proyectoSelect === undefined ? this.busquedaPermisos.proyecto = ''
            : this.busquedaPermisos.proyecto = (this.proyectoSelect.idProyecto == null ? '' : this.proyectoSelect.idProyecto.toString());
    };
    BusquedaPermisosComponent.prototype.onChangeFechaDesde = function (value) {
        this.busquedaPermisos.desde = value;
    };
    BusquedaPermisosComponent.prototype.onChangeFechaHasta = function (value) {
        this.busquedaPermisos.hasta = value;
    };
    BusquedaPermisosComponent.prototype.getUndNegocio = function () {
        var _this = this;
        this.cargoService.completarComboUndNegocio().subscribe(function (undnegocios) { return _this.undnegocios = undnegocios; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaPermisosComponent.prototype.obtenerDepartamentos = function (idUndNegocio) {
        var _this = this;
        this.cargoService.completarComboDepa(idUndNegocio).subscribe(function (departamentoDto) { return _this.departamentos = departamentoDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaPermisosComponent.prototype.obtenerProyecto = function (idDepartamentoArea) {
        var _this = this;
        this.cargoService.completarComboProyecto(idDepartamentoArea).subscribe(function (proyectoDto) { return _this.proyectos = proyectoDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaPermisosComponent.prototype.getEmpleadoEstados = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerPermisoEstados').subscribe(function (tablaGeneralDto) { return _this.estados = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaPermisosComponent.prototype.actualizarDpto = function (value) {
        //this.isEnableUndNegocio = false;
        var codigo = value;
        this.departamentoSelect = this.defaultItemDepartamento;
        if (value == null) {
            this.departamentos = null;
        }
        else {
            this.obtenerDepartamentos(codigo);
        }
        //this.isEnableProyectos = true;
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos = null;
    };
    BusquedaPermisosComponent.prototype.actualizarProyecto = function (value) {
        var codigo = value;
        this.obtenerProyecto(codigo);
    };
    BusquedaPermisosComponent = __decorate([
        core_1.Component({
            selector: 'busqueda-permisos',
            templateUrl: 'busqueda.permisos.component.html',
            providers: [http_empleados_service_1.CargoService]
        }), 
        __metadata('design:paramtypes', [empleado_service_1.EmpleadoService, http_empleados_service_1.CargoService, router_1.Router, ng2_completer_1.CompleterService])
    ], BusquedaPermisosComponent);
    return BusquedaPermisosComponent;
}());
exports.BusquedaPermisosComponent = BusquedaPermisosComponent;
//# sourceMappingURL=busqueda.permisos.component.js.map