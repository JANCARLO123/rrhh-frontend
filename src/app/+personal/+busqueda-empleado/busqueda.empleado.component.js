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
/**
 * Created by josediaz on 28/10/2016.
 */
var core_1 = require('@angular/core');
var grid_edit_empleados_component_1 = require("./grid.edit.empleados.component");
var empleado_service_1 = require("../+empleado/empleado.service");
var http_empleados_service_1 = require("../+cargo/http-empleados-service");
var busqueda_empleado_1 = require("./busqueda.empleado");
var router_1 = require("@angular/router");
var ng2_completer_1 = require("ng2-completer");
var environment_1 = require("../../../environments/environment");
var BusquedaEmpleadoComponent = (function () {
    function BusquedaEmpleadoComponent(empleadoService, cargoService, _router, completerService) {
        this.empleadoService = empleadoService;
        this.cargoService = cargoService;
        this._router = _router;
        this.completerService = completerService;
        this.defaultItem = { idUnidadDeNegocio: null, nombre: 'Todos' };
        this.defaultItemCentroCosto = { idCentroCosto: null, nombre: 'Todos' };
        this.defaultItemTablaGeneral = { codigo: null, nombre: 'Todos' };
        this.defaultItemDepartamento = { idDepartamentoArea: null, idUnidadDeNegocio: null, nombre: 'Todos' };
        this.defaultItemProyecto = { idProyecto: null, nombre: 'Todos' };
        this.noItems = false;
        this.busquedaEmpleado = new busqueda_empleado_1.BusquedaEmpleado();
        this.empleados = [];
        this.isSearch = false;
        this.isEmpty = true;
        this.uploadSaveUrl = "saveUrl";
        this.uploadRemoveUrl = "removeUrl";
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.pageSize = 10;
        this.skip = 0;
        this.dataServiceJefeInmediato = completerService.remote('http://' + this.localhost + ':' + this.port + '/permisoEmpleado/autocompleteEmpleado?search=', 'nombreEmpleado', 'nombreEmpleado');
    }
    BusquedaEmpleadoComponent.prototype.selectJefeInmediato = function (e) {
        if (e != null)
            this.busquedaEmpleado.idJefeInmediato = e.originalObject.idEmpleado;
        else
            this.busquedaEmpleado.idJefeInmediato = null;
    };
    BusquedaEmpleadoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.validarValoresSeleccionados();
        console.log(this.busquedaEmpleado);
        this.empleadoService.buscarEmpleado(this.busquedaEmpleado).subscribe(function (data) {
            _this.isSearch = true;
            _this.empleados = data;
            _this.skip = 0;
            _this.obtenerEmpleados();
        }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaEmpleadoComponent.prototype.onLimpiar = function () {
        this.busquedaEmpleado.codigo = '';
        this.busquedaEmpleado.nombres = '';
        this.busquedaEmpleado.apePaterno = '';
        this.busquedaEmpleado.apeMaterno = '';
        this.busquedaEmpleado.numeroDocumento = '';
        this.busquedaEmpleado.jefeInmediato = '';
        this.busquedaEmpleado.idJefeInmediato = null;
        this.busquedaEmpleado.correoElectronico = '';
        this.centroCostoSelect = this.defaultItemCentroCosto;
        this.tipoDocumentoSelect = this.defaultItemTablaGeneral;
        this.estadosSelect = this.defaultItemTablaGeneral;
        this.unidadNegocioSelect = this.defaultItem;
        this.departamentoSelect = this.defaultItemDepartamento;
        this.departamentos = null;
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos = null;
        this.isEmpty = true;
        this.gridView = {
            data: [],
            total: 0
        };
    };
    BusquedaEmpleadoComponent.prototype.validarValoresSeleccionados = function () {
        if (this.busquedaEmpleado.codigo === undefined)
            this.busquedaEmpleado.codigo = '';
        if (this.busquedaEmpleado.nombres === undefined)
            this.busquedaEmpleado.nombres = '';
        if (this.busquedaEmpleado.apePaterno === undefined)
            this.busquedaEmpleado.apePaterno = '';
        if (this.busquedaEmpleado.apeMaterno === undefined)
            this.busquedaEmpleado.apeMaterno = '';
        if (this.busquedaEmpleado.numeroDocumento === undefined)
            this.busquedaEmpleado.numeroDocumento = '';
        if (this.busquedaEmpleado.jefeInmediato === undefined)
            this.busquedaEmpleado.jefeInmediato = '';
        if (this.busquedaEmpleado.correoElectronico === undefined)
            this.busquedaEmpleado.correoElectronico = '';
        this.estadosSelect === undefined ? this.busquedaEmpleado.estado = ''
            : this.busquedaEmpleado.estado = this.estadosSelect.codigo;
        this.tipoDocumentoSelect === undefined ? this.busquedaEmpleado.tipoDocumento = ''
            : this.busquedaEmpleado.tipoDocumento = this.tipoDocumentoSelect.codigo;
        this.unidadNegocioSelect === undefined ? this.busquedaEmpleado.unidadNegocio = ''
            : this.busquedaEmpleado.unidadNegocio = (this.unidadNegocioSelect.idUnidadDeNegocio == null ? '' : this.unidadNegocioSelect.idUnidadDeNegocio.toString());
        ;
        this.departamentoSelect === undefined ? this.busquedaEmpleado.departamento = ''
            : this.busquedaEmpleado.departamento = (this.departamentoSelect.idDepartamentoArea == null ? '' : this.departamentoSelect.idDepartamentoArea.toString());
        this.proyectoSelect === undefined ? this.busquedaEmpleado.proyecto = ''
            : this.busquedaEmpleado.proyecto = (this.proyectoSelect.idProyecto == null ? '' : this.proyectoSelect.idProyecto.toString());
        this.centroCostoSelect === undefined ? this.busquedaEmpleado.centroCosto = ''
            : this.busquedaEmpleado.centroCosto = (this.centroCostoSelect.idCentroCosto == null ? '' : this.centroCostoSelect.idCentroCosto.toString());
    };
    BusquedaEmpleadoComponent.prototype.ngOnInit = function () {
        this.getTiposDocumento();
        this.getUndNegocio();
        this.obtenerCentrosCosto();
        this.getEmpleadoEstados();
    };
    BusquedaEmpleadoComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.obtenerEmpleados();
    };
    BusquedaEmpleadoComponent.prototype.obtenerEmpleados = function () {
        if (this.empleados.length > 0) {
            this.isEmpty = false;
            this.gridView = {
                data: this.empleados.slice(this.skip, this.skip + this.pageSize),
                total: this.empleados.length
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
    BusquedaEmpleadoComponent.prototype.onEdit = function (dataItem) {
        this.empleadoService.storeData(dataItem);
        this._router.navigate(['/personal/empleado']);
    };
    BusquedaEmpleadoComponent.prototype.onView = function (dataItem) {
        this.empleadoService.storeData(dataItem);
        this._router.navigate(['/personal/verEmpleado']);
    };
    BusquedaEmpleadoComponent.prototype.onCancel = function () {
        this.dataItem = undefined;
    };
    /* Fill combos */
    BusquedaEmpleadoComponent.prototype.getEmpleadoEstados = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerEmpleadoEstados').subscribe(function (tablaGeneralDto) { return _this.estados = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaEmpleadoComponent.prototype.obtenerCentrosCosto = function () {
        var _this = this;
        this.empleadoService.obtenerComboCentroCosto().subscribe(function (centroCostoDto) { return _this.centrosCosto = centroCostoDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaEmpleadoComponent.prototype.getTiposDocumento = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerTipoDocumento').subscribe(function (tablaGeneralDto) { return _this.tiposDocumento = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaEmpleadoComponent.prototype.getUndNegocio = function () {
        var _this = this;
        this.cargoService.completarComboUndNegocio().subscribe(function (undnegocios) { return _this.undnegocios = undnegocios; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaEmpleadoComponent.prototype.obtenerDepartamentos = function (idUndNegocio) {
        var _this = this;
        this.cargoService.completarComboDepa(idUndNegocio).subscribe(function (departamentoDto) { return _this.departamentos = departamentoDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaEmpleadoComponent.prototype.obtenerProyecto = function (idDepartamentoArea) {
        var _this = this;
        this.cargoService.completarComboProyecto(idDepartamentoArea).subscribe(function (proyectoDto) { return _this.proyectos = proyectoDto; }, function (error) { return _this.errorMessage = error; });
    };
    BusquedaEmpleadoComponent.prototype.actualizarDpto = function (value) {
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
    BusquedaEmpleadoComponent.prototype.actualizarProyecto = function (value) {
        var codigo = value;
        this.proyectoSelect = this.defaultItemProyecto;
        this.obtenerProyecto(codigo);
    };
    BusquedaEmpleadoComponent.prototype.exportarEmpleados = function () {
        if (this.empleados.length == 0) {
            this.noItems = true;
        }
        else {
            debugger;
            this.noItems = false;
            var url = 'http://localhost:7999/empleado/exportarEmpleados?nombres=' + this.busquedaEmpleado.nombres +
                '&apellidoPaterno=' + this.busquedaEmpleado.apePaterno +
                '&apellidoMaterno=' + this.busquedaEmpleado.apeMaterno +
                '&codigo=' + this.busquedaEmpleado.codigo +
                '&tipoDocumento=' + this.busquedaEmpleado.tipoDocumento +
                '&numeroDocumento=' + this.busquedaEmpleado.numeroDocumento +
                '&unidadNegocio=' + this.busquedaEmpleado.unidadNegocio +
                '&departamento=' + this.busquedaEmpleado.departamento +
                '&proyecto=' + this.busquedaEmpleado.proyecto +
                '&jefeInmediato=' + this.busquedaEmpleado.jefeInmediato +
                '&centroCosto=' + this.busquedaEmpleado.centroCosto +
                '&correoElectronico=' + this.busquedaEmpleado.correoElectronico +
                '&estado=' + this.busquedaEmpleado.estado +
                '&isSearch=' + this.isSearch +
                '&isEmpty=' + false;
            if ($("#export_file").length > 0) {
                $("#export_file").remove();
            }
            if ($("#export_file").length === 0) {
                var el = document.createElement("iframe");
                document.body.appendChild(el);
                $(el).hide();
                $(el).attr("id", "export_file");
                $(el).attr("src", url);
            }
        }
    };
    BusquedaEmpleadoComponent.prototype.importar = function () {
        this.editFormComponent.titulo = "Importar";
        this.editFormComponent.importarArchivoEmpleados();
    };
    BusquedaEmpleadoComponent.prototype.altaDeEmpleado = function () {
        this.empleadoService.storeData(undefined);
        this._router.navigate(['/personal/empleado']);
    };
    __decorate([
        core_1.ViewChild(grid_edit_empleados_component_1.GridEditFormComponent), 
        __metadata('design:type', grid_edit_empleados_component_1.GridEditFormComponent)
    ], BusquedaEmpleadoComponent.prototype, "editFormComponent", void 0);
    BusquedaEmpleadoComponent = __decorate([
        core_1.Component({
            selector: 'busqueda-empleado',
            templateUrl: 'busqueda.empleado.component.html',
            providers: [http_empleados_service_1.CargoService]
        }), 
        __metadata('design:paramtypes', [empleado_service_1.EmpleadoService, http_empleados_service_1.CargoService, router_1.Router, ng2_completer_1.CompleterService])
    ], BusquedaEmpleadoComponent);
    return BusquedaEmpleadoComponent;
}());
exports.BusquedaEmpleadoComponent = BusquedaEmpleadoComponent;
//# sourceMappingURL=busqueda.empleado.component.js.map