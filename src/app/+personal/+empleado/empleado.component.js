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
var Rx_1 = require("rxjs/Rx");
var grid_edit_form_component_1 = require("./grid.edit.form.component");
var educacion_dialog_component_1 = require("./educacion.dialog.component");
var empleado_service_1 = require("./empleado.service");
var pais_service_1 = require("./pais.service");
var documentoEmpleado_1 = require("./documentoEmpleado");
var empleado_1 = require("./empleado");
var experienciaLaboral_dialog_component_1 = require("./experienciaLaboral.dialog.component");
var equipoEntregado_dialog_component_1 = require("./equipoEntregado.dialog.component");
var foto_form_component_1 = require("./foto.form.component");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var environment_1 = require("../../../environments/environment");
var EmpleadoComponent = (function () {
    function EmpleadoComponent(empleadoService, paisService, _router) {
        this.empleadoService = empleadoService;
        this.paisService = paisService;
        this._router = _router;
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.isDisabledCodigo = false;
        this.classCodigo = 'input';
        this.view = [];
        this.viewExperienciaLaboral = [];
        this.viewEducacion = [];
        this.viewEquipoEntregado = [];
        //empleado
        this.state = {
            tabs: {
                tabEmpleado: 'tab-active-1',
            }
        };
        this.empleado = new empleado_1.Empleado();
        this.defaultItem = { codigo: null, nombre: 'Seleccionar' };
        this.defaultItemPais = { codigo: null, nombre: 'Seleccionar' };
        this.defaultItemDepartamento = { codigo: null, nombre: 'Seleccionar' };
        this.defaultItemCentroCosto = { idCentroCosto: null, nombre: 'Seleccionar' };
        this.documentoEmpleado = { idDocumentoEmpleado: 1, nombre: 'Archivo 1', archivo: 'Archivo' };
        this.pageSize = 10;
        this.skip = 0;
        var empleado = this.empleadoService.retrieveData();
        this.getTiposDocumento();
        this.getEstadosCivil();
        this.getGruposSanguineo();
        this.getGeneros();
        this.obtenerPaises();
        this.isEnableDepartamento = true;
        this.isEnableProvincia = true;
        this.isEnableDistrito = true;
        this.isEnableDepartamentoDomicilio = true;
        this.isEnableProvinciaDomicilio = true;
        this.isEnableDistritoDomicilio = true;
        this.obtenerPaisesDomicilio();
        this.obtenerCentrosCosto();
        this.getContratosTrabajo();
        this.getTiposTrabajo();
        this.getRegimenesHorario();
        this.getRegimenesLaboral();
        this.getTiposDomicilio();
        this.getRelacionesContacto();
        if (empleado === undefined || empleado == null || empleado.idEmpleado == null) {
            this.isDisabledCodigo = false;
            this.classCodigo = 'input';
        }
        else {
            empleado.fechaNacimiento = null;
            empleado.fechaIngreso = null;
            this.isDisabledCodigo = true;
            this.classCodigo = 'input state-disabled';
            this.verEmpleado(empleado);
            this.verDocumentos(empleado);
            this.verEducacion(empleado);
            this.verExperienciaLaboral(empleado);
            this.verEquipoEntregado(empleado);
        }
    }
    EmpleadoComponent.prototype.onCancelarImagen = function () {
        this.dataItemFoto = undefined;
    };
    EmpleadoComponent.prototype.subirImagen = function () {
        this.fotoFormComponent.subirImagen();
    };
    EmpleadoComponent.prototype.onAceptarImagen = function (dto) {
        this.fotoEmpleado = new documentoEmpleado_1.DocumentoEmpleado(undefined, 'Foto Empleado', dto.content, dto.contentType, dto.name, 1);
        $("#imgLogo1Subido").css("background-image", "url('data:image/jpeg;base64," + dto.content + "')");
    };
    EmpleadoComponent.prototype.verEmpleado = function (empleado) {
        var _this = this;
        this.empleadoService.verEmpleado(empleado).subscribe(function (data) { return _this.cargarEmpleado(data); }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.cargarEmpleado = function (data) {
        this.actualizarDpto(data.paisNacimiento);
        if (data.departamentoNacimiento != null && data.departamentoNacimiento != '') {
            this.actualizarProvincia(data.departamentoNacimiento);
            if (data.provinciaNacimiento != null && data.provinciaNacimiento != '') {
                this.actualizarDistrito(data.provinciaNacimiento);
            }
        }
        this.actualizarDptoDomicilio(data.paisDomicilio);
        if (data.departamentoDomicilio != null && data.departamentoDomicilio != '') {
            this.actualizarProvinciaDomicilio(data.departamentoDomicilio);
            if (data.provinciaDomicilio != null && data.provinciaDomicilio != '') {
                this.actualizarDistritoDomicilio(data.provinciaDomicilio);
            }
        }
        this.empleado = data;
    };
    EmpleadoComponent.prototype.verDocumentos = function (empleado) {
        var _this = this;
        this.empleadoService.verDocumentos(empleado).subscribe(function (data) { return _this.cargarDocumentos(data); }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.verEducacion = function (empleado) {
        var _this = this;
        this.empleadoService.verEducacion(empleado).subscribe(function (data) { return _this.viewEducacion = data; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.verExperienciaLaboral = function (empleado) {
        var _this = this;
        this.empleadoService.verExperienciaLaboral(empleado).subscribe(function (data) { return _this.viewExperienciaLaboral = data; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.verEquipoEntregado = function (empleado) {
        var _this = this;
        this.empleadoService.verEquipoEntregado(empleado).subscribe(function (data) { return _this.viewEquipoEntregado = data; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.cargarDocumentos = function (data) {
        this.view = data;
        for (var indice in this.view) {
            if (this.view[indice].fotoEmpleado == 1) {
                this.fotoEmpleado = new documentoEmpleado_1.DocumentoEmpleado(this.view[indice].idDocumentoEmpleado, this.view[indice].nombre, this.view[indice].contenidoArchivo, this.view[indice].tipoArchivo, this.view[indice].nombreArchivo, 1);
                $("#imgLogo1Subido").css("background-image", "url('data:image/jpeg;base64," + this.view[indice].contenidoArchivo + "')");
                this.view.splice(parseInt(indice), 1);
                break;
            }
        }
    };
    EmpleadoComponent.prototype.onEdit = function (dataItem) {
        this.editFormComponent.titulo = "Editar";
        this.dataItem = dataItem;
        this.editFormComponent.nombreDocumento = this.dataItem.nombre;
        this.editFormComponent.contenidoArchivo = this.dataItem.contenidoArchivo;
        this.editFormComponent.contentTypeArchivo = this.dataItem.tipoArchivo;
        this.editFormComponent.nombreArchivo = this.dataItem.nombreArchivo;
    };
    EmpleadoComponent.prototype.onCancel = function () {
        this.dataItem = undefined;
    };
    EmpleadoComponent.prototype.agregarDocumento = function () {
        this.editFormComponent.titulo = "Agregar";
        this.editFormComponent.agregarDocumento();
    };
    EmpleadoComponent.prototype.onSave = function (dto) {
        var operation = dto.idDocumentoEmpleado === undefined ?
            this.crearDocumento(dto) :
            this.editarDocumento(dto);
    };
    EmpleadoComponent.prototype.onViewDocument = function (dto) {
        //let url:string = 'http://localhost:7999/empleado/descargarArchivoDocumento?archivo='+ ;
        if ($("#export_file").length > 0) {
            $("#export_file").remove();
        }
        if ($("#export_file").length === 0) {
            var iframe = $("<iframe src='' name='export_file' id='export_file'></iframe>");
            iframe.appendTo("body");
            var form = $("<form action='http://" + this.localhost + ":" + this.port + "/empleado/descargarArchivoDocumento' method='post' target='export_file'></form>");
            form.append($("<input type='hidden' name='contenidoArchivo' id='contenidoArchivo' />").attr("value", dto.contenidoArchivo));
            form.append($("<input type='hidden' name='tipoArchivo' id='tipoArchivo' />").attr("value", dto.tipoArchivo));
            form.append($("<input type='hidden' name='nombre' id='nombre' />").attr("value", dto.nombre));
            form.append($("<input type='hidden' name='nombreArchivo' id='nombreArchivo' />").attr("value", dto.nombreArchivo));
            form.appendTo("body");
            form.submit();
        }
    };
    EmpleadoComponent.prototype.onDelete = function (e) {
        var operation = this.eliminarDocumento(e);
    };
    EmpleadoComponent.prototype.obtenerDocumentos = function () {
        return this.fetch();
    };
    EmpleadoComponent.prototype.editarDocumento = function (data) {
        return this.fetch("update", data);
    };
    EmpleadoComponent.prototype.crearDocumento = function (data) {
        data.idDocumentoEmpleado = this.generarIdDocumentoTemporal();
        return this.fetch("create", data);
    };
    EmpleadoComponent.prototype.eliminarDocumento = function (data) {
        return this.fetch("destroy", data);
    };
    EmpleadoComponent.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ""; }
        if (action == "create") {
            var documento = (JSON.parse(JSON.stringify(data)));
            this.view.push(documento);
        }
        else if (action == "update") {
            var indice = this.view.indexOf(data);
            if (indice >= 0)
                this.view[indice] = (JSON.parse(JSON.stringify(data)));
        }
        else if (action == "destroy") {
            var indice = this.view.indexOf(data);
            if (indice >= 0)
                this.view.splice(indice, 1);
        }
        return Rx_1.Observable.of(this.view);
    };
    EmpleadoComponent.prototype.generarIdDocumentoTemporal = function () {
        if (this.view != null)
            return (this.view.length + 2) * -1;
        else
            return -1;
    };
    EmpleadoComponent.prototype.pageChange = function (event) {
        var _this = this;
        this.skip = event.skip;
        this.obtenerDocumentos().subscribe(function (data) { return _this.view = data; });
    };
    EmpleadoComponent.prototype.onEditarExperienciaLaboral = function (dataItem) {
        this.editExperienciaLaboralFormComponent.titulo = "Editar";
        this.dataItemExperienciaLaboral = dataItem;
        this.editExperienciaLaboralFormComponent.razonSocial = this.dataItemExperienciaLaboral.razonSocial;
        this.editExperienciaLaboralFormComponent.departamento = this.dataItemExperienciaLaboral.departamento;
        this.editExperienciaLaboralFormComponent.cargo = this.dataItemExperienciaLaboral.cargo;
        this.editExperienciaLaboralFormComponent.descripcion = this.dataItemExperienciaLaboral.descripcion;
        this.editExperienciaLaboralFormComponent.fechaInicio = this.dataItemExperienciaLaboral.fechaInicio;
        this.editExperienciaLaboralFormComponent.fechaFin = this.dataItemExperienciaLaboral.fechaFin;
    };
    EmpleadoComponent.prototype.onCancelarExperienciaLaboral = function () {
        this.dataItemExperienciaLaboral = undefined;
    };
    EmpleadoComponent.prototype.onAgregarExperienciaLaboral = function (dto) {
        var operation = dto.idExperienciaLaboral === undefined ?
            this.crearExperienciaLaboral(dto) :
            this.editarExperienciaLaboral(dto);
    };
    EmpleadoComponent.prototype.onEliminarExperienciaLaboral = function (e) {
        var operation = this.eliminarExperienciaLaboral(e);
    };
    EmpleadoComponent.prototype.agregarExperienciaLaboral = function () {
        this.editExperienciaLaboralFormComponent.titulo = "Agregar";
        this.editExperienciaLaboralFormComponent.agregarExperienciaLaboral();
    };
    EmpleadoComponent.prototype.obtenerExperienciasLaborales = function () {
        return this.fetchExperienciaLaboral();
    };
    EmpleadoComponent.prototype.editarExperienciaLaboral = function (data) {
        return this.fetchExperienciaLaboral("update", data);
    };
    EmpleadoComponent.prototype.crearExperienciaLaboral = function (data) {
        data.idExperienciaLaboral = this.generarIdExperienciaLaboralTemporal();
        return this.fetchExperienciaLaboral("create", data);
    };
    EmpleadoComponent.prototype.eliminarExperienciaLaboral = function (data) {
        return this.fetchExperienciaLaboral("destroy", data);
    };
    EmpleadoComponent.prototype.fetchExperienciaLaboral = function (action, data) {
        if (action === void 0) { action = ""; }
        if (action == "create") {
            var model = (JSON.parse(JSON.stringify(data)));
            this.viewExperienciaLaboral.push(model);
        }
        else if (action == "update") {
            var indice = this.viewExperienciaLaboral.indexOf(data);
            if (indice >= 0)
                this.viewExperienciaLaboral[indice] = (JSON.parse(JSON.stringify(data)));
        }
        else if (action == "destroy") {
            var indice = this.viewExperienciaLaboral.indexOf(data);
            if (indice >= 0)
                this.viewExperienciaLaboral.splice(indice, 1);
        }
        return Rx_1.Observable.of(this.viewExperienciaLaboral);
    };
    EmpleadoComponent.prototype.generarIdExperienciaLaboralTemporal = function () {
        if (this.viewExperienciaLaboral != null)
            return (this.viewExperienciaLaboral.length + 2) * -1;
        else
            return -1;
    };
    EmpleadoComponent.prototype.pageChangeExperienciaLaboral = function (event) {
        //this.skip = event.skip;
        //this.obtenerDocumentos().subscribe(data => this.view = data);
    };
    EmpleadoComponent.prototype.agregarEducacion = function () {
        this.educacionDialogComponent.tituloCabecera = "Agregar";
        this.educacionDialogComponent.agregarEducacion();
    };
    EmpleadoComponent.prototype.onEditarEducacion = function (dataItem) {
        this.educacionDialogComponent.tituloCabecera = "Editar";
        this.educacionDialogComponent.obtenerNivelEducacion();
        this.dataItemEducacion = dataItem;
        this.educacionDialogComponent.nivelEducacion = this.dataItemEducacion.nivelEducacion;
        this.educacionDialogComponent.institucion = this.dataItemEducacion.institucion;
        this.educacionDialogComponent.titulo = this.dataItemEducacion.titulo;
        this.educacionDialogComponent.descripcion = this.dataItemEducacion.descripcion;
        this.educacionDialogComponent.fechaInicio = this.dataItemEducacion.fechaInicio;
        this.educacionDialogComponent.fechaFin = this.dataItemEducacion.fechaFin;
        this.educacionDialogComponent.nombreNivelEducacion = this.dataItemEducacion.nombreNivelEducacion;
    };
    EmpleadoComponent.prototype.onGuardarEducacion = function (dto) {
        var operation = dto.idEducacion === undefined ?
            this.crearEducacion(dto) :
            this.editarEducacion(dto);
    };
    EmpleadoComponent.prototype.onEliminarEducacion = function (e) {
        var operation = this.eliminarEducacion(e);
    };
    EmpleadoComponent.prototype.onCancelarEducacion = function () {
        this.dataItemEducacion = undefined;
    };
    EmpleadoComponent.prototype.obtenerEducacion = function () {
        return this.fetchEducacion();
    };
    EmpleadoComponent.prototype.editarEducacion = function (data) {
        return this.fetchEducacion("update", data);
    };
    EmpleadoComponent.prototype.crearEducacion = function (data) {
        data.idEducacion = this.generarIdEducacionTemporal();
        return this.fetchEducacion("create", data);
    };
    EmpleadoComponent.prototype.eliminarEducacion = function (data) {
        return this.fetchEducacion("destroy", data);
    };
    EmpleadoComponent.prototype.fetchEducacion = function (action, data) {
        if (action === void 0) { action = ""; }
        if (action == "create") {
            var documento = (JSON.parse(JSON.stringify(data)));
            this.viewEducacion.push(documento);
        }
        else if (action == "update") {
            var indice = this.viewEducacion.indexOf(data);
            if (indice >= 0)
                this.viewEducacion[indice] = (JSON.parse(JSON.stringify(data)));
        }
        else if (action == "destroy") {
            var indice = this.viewEducacion.indexOf(data);
            if (indice >= 0)
                this.viewEducacion.splice(indice, 1);
        }
        return Rx_1.Observable.of(this.viewEducacion);
    };
    EmpleadoComponent.prototype.generarIdEducacionTemporal = function () {
        if (this.viewEducacion != null)
            return (this.viewEducacion.length + 2) * -1;
        else
            return -1;
    };
    EmpleadoComponent.prototype.agregarEquipoEntregado = function () {
        this.equipoEntregadoDialogComponent.titulo = "Agregar";
        this.equipoEntregadoDialogComponent.agregarEquipoEntregado();
    };
    EmpleadoComponent.prototype.onEditarEquipoEntregado = function (dataItem) {
        this.equipoEntregadoDialogComponent.titulo = "Editar";
        this.equipoEntregadoDialogComponent.obtenerTipoEquipo();
        this.equipoEntregadoDialogComponent.obtenerEstadoTipoEquipo();
        this.dataItemEquipoEntregado = dataItem;
        this.equipoEntregadoDialogComponent.tipoEquipo = this.dataItemEquipoEntregado.tipoEquipo;
        this.equipoEntregadoDialogComponent.estado = this.dataItemEquipoEntregado.estado;
        this.equipoEntregadoDialogComponent.nombreTipoEquipo = this.dataItemEquipoEntregado.nombreTipoEquipo;
        this.equipoEntregadoDialogComponent.nombreEstado = this.dataItemEquipoEntregado.nombreEstado;
        this.equipoEntregadoDialogComponent.fechaEntrega = this.dataItemEquipoEntregado.fechaEntrega;
        this.equipoEntregadoDialogComponent.fechaDevolucion = this.dataItemEquipoEntregado.fechaDevolucion;
        this.equipoEntregadoDialogComponent.descripcion = this.dataItemEquipoEntregado.descripcion;
    };
    EmpleadoComponent.prototype.onGuardarEquipoEntregado = function (dto) {
        var operation = dto.idEquipoEntregado === undefined ?
            this.crearEquipoEntregado(dto) :
            this.editarEquipoEntregado(dto);
    };
    EmpleadoComponent.prototype.onEliminarEquipoEntregado = function (e) {
        var operation = this.eliminarEquipoEntregado(e);
    };
    EmpleadoComponent.prototype.onCancelarEquipoEntregado = function () {
        this.dataItemEducacion = undefined;
    };
    EmpleadoComponent.prototype.obtenerEquipoEntregado = function () {
        return this.fetchEquipoEntregado();
    };
    EmpleadoComponent.prototype.editarEquipoEntregado = function (data) {
        return this.fetchEquipoEntregado("update", data);
    };
    EmpleadoComponent.prototype.crearEquipoEntregado = function (data) {
        data.idEquipoEntregado = this.generarIdEquipoEntregadoTemporal();
        return this.fetchEquipoEntregado("create", data);
    };
    EmpleadoComponent.prototype.eliminarEquipoEntregado = function (data) {
        return this.fetchEquipoEntregado("destroy", data);
    };
    EmpleadoComponent.prototype.fetchEquipoEntregado = function (action, data) {
        if (action === void 0) { action = ""; }
        if (action == "create") {
            var documento = (JSON.parse(JSON.stringify(data)));
            this.viewEquipoEntregado.push(documento);
        }
        else if (action == "update") {
            var indice = this.viewEquipoEntregado.indexOf(data);
            if (indice >= 0)
                this.viewEquipoEntregado[indice] = (JSON.parse(JSON.stringify(data)));
        }
        else if (action == "destroy") {
            var indice = this.viewEquipoEntregado.indexOf(data);
            if (indice >= 0)
                this.viewEquipoEntregado.splice(indice, 1);
        }
        return Rx_1.Observable.of(this.viewEquipoEntregado);
    };
    EmpleadoComponent.prototype.generarIdEquipoEntregadoTemporal = function () {
        if (this.viewEquipoEntregado != null)
            return (this.viewEquipoEntregado.length + 2) * -1;
        else
            return -1;
    };
    EmpleadoComponent.prototype.ngOnInit = function () {
    };
    EmpleadoComponent.prototype.getTiposDocumento = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerTipoDocumento').subscribe(function (tablaGeneralDto) { return _this.tiposDocumento = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getRelacionesContacto = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerRelacionContactoEmergencia').subscribe(function (tablaGeneralDto) { return _this.relacionesContacto = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getEstadosCivil = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerEstadoCivil').subscribe(function (tablaGeneralDto) { return _this.estadosCivil = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getGruposSanguineo = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerGrupoSanguineo').subscribe(function (tablaGeneralDto) { return _this.gruposSanguineo = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getGeneros = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerGenero').subscribe(function (tablaGeneralDto) { return _this.generos = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getContratosTrabajo = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerContratoTrabajo').subscribe(function (tablaGeneralDto) { return _this.contratosTrabajo = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getTiposTrabajo = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerTipoTrabajo').subscribe(function (tablaGeneralDto) { return _this.tiposTrabajo = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getRegimenesHorario = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerRegimenHorario').subscribe(function (tablaGeneralDto) { return _this.regimenesHorario = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getRegimenesLaboral = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerRegimenLaboral').subscribe(function (tablaGeneralDto) { return _this.regimenesLaboral = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.getTiposDomicilio = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerTipoDomicilio').subscribe(function (tablaGeneralDto) { return _this.tiposDomicilio = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerPaises = function () {
        var _this = this;
        this.paisService.completarComboPais().subscribe(function (paisDto) { return _this.paises = paisDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerDepartamentos = function (codigoPais) {
        var _this = this;
        this.paisService.completarComboDepartamento(codigoPais).subscribe(function (departamentoDto) { return _this.departamentos = departamentoDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerProvincias = function (codigoDpto) {
        var _this = this;
        this.paisService.completarComboProvincia(codigoDpto).subscribe(function (provinciasDto) { return _this.provincias = provinciasDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerDistritos = function (codigoProvincia) {
        var _this = this;
        this.paisService.completarComboDistrito(codigoProvincia).subscribe(function (distritosDto) { return _this.distritos = distritosDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerCentrosCosto = function () {
        var _this = this;
        this.empleadoService.obtenerComboCentroCosto().subscribe(function (centroCostoDto) { return _this.centrosCosto = centroCostoDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.actualizarDpto = function (value) {
        this.isEnableDepartamento = false;
        var codigo = value; // (<HTMLSelectElement>event.srcElement).value;
        this.empleado.departamentoNacimiento = null;
        if (value == null) {
            this.departamentos = null;
        }
        else {
            this.obtenerDepartamentos(codigo);
        }
        this.empleado.provinciaNacimiento = null;
        this.empleado.distritoNacimiento = null;
        this.provincias = null;
        this.distritos = null;
        this.isEnableProvincia = true;
        this.isEnableDistrito = true;
    };
    EmpleadoComponent.prototype.actualizarProvincia = function (value) {
        this.isEnableProvincia = false;
        var codigo = value; //(<HTMLSelectElement>event.srcElement).value;
        this.empleado.provinciaNacimiento = null;
        if (value == null) {
            this.provincias = null;
        }
        else {
            this.obtenerProvincias(codigo);
        }
        this.empleado.distritoNacimiento = null;
        this.distritos = null;
        this.isEnableDistrito = true;
    };
    EmpleadoComponent.prototype.actualizarDistrito = function (value) {
        this.isEnableDistrito = false;
        var codigo = value; //(<HTMLSelectElement>event.srcElement).value;
        this.empleado.distritoNacimiento = null;
        if (value == null) {
            this.distritos = null;
        }
        else {
            this.obtenerDistritos(codigo);
        }
    };
    //domicilio
    EmpleadoComponent.prototype.obtenerPaisesDomicilio = function () {
        var _this = this;
        this.paisService.completarComboPais().subscribe(function (paisDto) { return _this.paisesDomicilio = paisDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerDepartamentosDomicilio = function (codigoPais) {
        var _this = this;
        this.paisService.completarComboDepartamento(codigoPais).subscribe(function (departamentoDto) { return _this.departamentosDomicilio = departamentoDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerProvinciasDomicilio = function (codigoDpto) {
        var _this = this;
        this.paisService.completarComboProvincia(codigoDpto).subscribe(function (provinciasDto) { return _this.provinciasDomicilio = provinciasDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.obtenerDistritosDomicilio = function (codigoProvincia) {
        var _this = this;
        this.paisService.completarComboDistrito(codigoProvincia).subscribe(function (distritosDto) { return _this.distritosDomicilio = distritosDto; }, function (error) { return _this.errorMessage = error; });
    };
    EmpleadoComponent.prototype.actualizarDptoDomicilio = function (value) {
        this.isEnableDepartamentoDomicilio = false;
        var codigo = value; // (<HTMLSelectElement>event.srcElement).value;
        this.empleado.departamentoDomicilio = null;
        if (value == null) {
            this.departamentosDomicilio = null;
        }
        else {
            this.obtenerDepartamentosDomicilio(codigo);
        }
        this.empleado.provinciaDomicilio = null;
        this.empleado.distritoDomicilio = null;
        this.provinciasDomicilio = null;
        this.distritosDomicilio = null;
        this.isEnableProvinciaDomicilio = true;
        this.isEnableDistritoDomicilio = true;
    };
    EmpleadoComponent.prototype.actualizarProvinciaDomicilio = function (value) {
        this.isEnableProvinciaDomicilio = false;
        var codigo = value; //(<HTMLSelectElement>event.srcElement).value;
        this.empleado.provinciaDomicilio = null;
        if (value == null) {
            this.provinciasDomicilio = null;
        }
        else {
            this.obtenerProvinciasDomicilio(codigo);
        }
        this.empleado.distritoDomicilio = null;
        this.distritosDomicilio = null;
        this.isEnableDistritoDomicilio = true;
    };
    EmpleadoComponent.prototype.actualizarDistritoDomicilio = function (value) {
        this.isEnableDistritoDomicilio = false;
        var codigo = value; //(<HTMLSelectElement>event.srcElement).value;
        this.empleado.distritoDomicilio = null;
        if (value == null) {
            this.distritosDomicilio = null;
        }
        else {
            this.obtenerDistritosDomicilio(codigo);
        }
    };
    EmpleadoComponent.prototype.onChangeDate = function (value) {
        debugger;
        if (value === undefined || value == null || value == '') {
            this.empleado.fechaNacimiento = undefined;
            return;
        }
        this.empleado.fechaNacimiento = value;
        $('#fechaNacimiento').parent().removeClass('state-error');
        var fechaNac = this.empleado.fechaNacimiento.split('/');
        var birthday = new Date(parseInt(fechaNac[2]), parseInt(fechaNac[1]) - 1, parseInt(fechaNac[0]));
        var today = new Date();
        var years = today.getFullYear() - birthday.getFullYear();
        //birthday.setFullYear(today.getFullYear());
        /*if (today < birthday)
        {
            years--;
        }*/
        this.empleado.edad = years;
    };
    EmpleadoComponent.prototype.onRegregarBusquedaEmpleado = function () {
        this._router.navigate(['/personal/busquedaEmpleado']);
    };
    EmpleadoComponent.prototype.ingresaNombre = function () {
        $('#nombre').parent().removeClass('state-error');
    };
    EmpleadoComponent.prototype.ingresaApellidoPaterno = function () {
        $('#apellidoPaterno').parent().removeClass('state-error');
    };
    EmpleadoComponent.prototype.ingresaApellidoMaterno = function () {
        $('#apellidoMaterno').parent().removeClass('state-error');
    };
    EmpleadoComponent.prototype.ingresaNumeroDocumento = function () {
        $('#numeroDocumento').parent().removeClass('state-error');
    };
    EmpleadoComponent.prototype.ingresaCodigo = function () {
        $('#codigo').parent().removeClass('state-error');
    };
    EmpleadoComponent.prototype.ingresaDireccion = function () {
        $('#direccion').parent().removeClass('state-error');
    };
    EmpleadoComponent.prototype.ingresaCelular = function () {
        $('#celular').parent().removeClass('state-error');
    };
    EmpleadoComponent.prototype.validarRequerido = function () {
        var validacion = false;
        if (this.empleado.nombre === undefined || this.empleado.nombre == null || this.empleado.nombre == '') {
            $('#nombre').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.apellidoPaterno === undefined || this.empleado.apellidoPaterno == null || this.empleado.apellidoPaterno == '') {
            $('#apellidoPaterno').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.apellidoMaterno === undefined || this.empleado.apellidoMaterno == null || this.empleado.apellidoMaterno == '') {
            $('#apellidoMaterno').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.tipoDocumento === undefined || this.empleado.tipoDocumento == null || this.empleado.tipoDocumento == '') {
            $('#tipoDocumento').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.numeroDocumento === undefined || this.empleado.numeroDocumento == null || this.empleado.numeroDocumento == '') {
            $('#numeroDocumento').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.genero === undefined || this.empleado.genero == null || this.empleado.genero == '') {
            $('#genero').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.estadoCivil === undefined || this.empleado.estadoCivil == null || this.empleado.estadoCivil == '') {
            $('#estadoCivil').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.grupoSangre === undefined || this.empleado.grupoSangre == null || this.empleado.grupoSangre == '') {
            $('#grupoSanguineo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.genero === undefined || this.empleado.genero == null || this.empleado.genero == '') {
            $('#genero').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.fechaNacimiento === undefined || this.empleado.fechaNacimiento == null || this.empleado.fechaNacimiento == '') {
            $('#fechaNacimiento').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.paisNacimiento === undefined || this.empleado.paisNacimiento == null || this.empleado.paisNacimiento == '') {
            $('#paisNacimiento').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.codigo === undefined || this.empleado.codigo == null || this.empleado.codigo == '') {
            $('#codigo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.tipoTrabajador === undefined || this.empleado.tipoTrabajador == null || this.empleado.tipoTrabajador == '') {
            $('#tipotrabajador').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.direccionDomicilio === undefined || this.empleado.direccionDomicilio == null || this.empleado.direccionDomicilio == '') {
            $('#direccion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.tipoDomicilio === undefined || this.empleado.tipoDomicilio == null || this.empleado.tipoDomicilio == '') {
            $('#tipodomicilio').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.paisDomicilio === undefined || this.empleado.paisDomicilio == null || this.empleado.paisDomicilio == '') {
            $('#paisDomicilio').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.empleado.telefonoCelular === undefined || this.empleado.telefonoCelular == null || this.empleado.telefonoCelular == '') {
            $('#celular').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    EmpleadoComponent.prototype.cerrarDialog = function () {
        this.mensaje = '';
        $('#dialog-message').dialog("close");
    };
    EmpleadoComponent.prototype.onRegistrarEmpleado = function () {
        var _this = this;
        //validacion
        if (this.validarRequerido()) {
            this.mensaje = 'Ingrese los campos obligatorios';
            $('#dialog-message').dialog("open");
            return;
        }
        this.empleado.documentos = this.view;
        this.empleado.educaciones = this.viewEducacion;
        this.empleado.experienciasLaborales = this.viewExperienciaLaboral;
        this.empleado.equiposEntregados = this.viewEquipoEntregado;
        if (this.fotoEmpleado != undefined && this.fotoEmpleado.idDocumentoEmpleado != null) {
            this.empleado.documentos.push(this.fotoEmpleado);
        }
        this.empleadoService.registrarEmpleado(this.empleado).subscribe(function (data) {
            _this.navegarBusquedaEmpleado(data);
        }, function (error) { return console.log(error); });
    };
    EmpleadoComponent.prototype.navegarBusquedaEmpleado = function (data) {
        if (data.codigo == 1) {
            this.empleado = new empleado_1.Empleado();
            this._router.navigate(['/personal/busquedaEmpleado']);
        }
        else if (data.codigo == 0) {
            this.mensaje = data.mensaje;
            $('#dialog-message').dialog("open");
        }
    };
    __decorate([
        core_1.ViewChild(foto_form_component_1.FotoFormComponent), 
        __metadata('design:type', foto_form_component_1.FotoFormComponent)
    ], EmpleadoComponent.prototype, "fotoFormComponent", void 0);
    __decorate([
        core_1.ViewChild(grid_edit_form_component_1.GridEditFormComponent), 
        __metadata('design:type', grid_edit_form_component_1.GridEditFormComponent)
    ], EmpleadoComponent.prototype, "editFormComponent", void 0);
    __decorate([
        core_1.ViewChild(experienciaLaboral_dialog_component_1.ExperienciaLaboralDialogFormComponent), 
        __metadata('design:type', experienciaLaboral_dialog_component_1.ExperienciaLaboralDialogFormComponent)
    ], EmpleadoComponent.prototype, "editExperienciaLaboralFormComponent", void 0);
    __decorate([
        core_1.ViewChild(educacion_dialog_component_1.EducacionDialogFormComponent), 
        __metadata('design:type', educacion_dialog_component_1.EducacionDialogFormComponent)
    ], EmpleadoComponent.prototype, "educacionDialogComponent", void 0);
    __decorate([
        core_1.ViewChild(equipoEntregado_dialog_component_1.EquipoEntregadoDialogFormComponent), 
        __metadata('design:type', equipoEntregado_dialog_component_1.EquipoEntregadoDialogFormComponent)
    ], EmpleadoComponent.prototype, "equipoEntregadoDialogComponent", void 0);
    EmpleadoComponent = __decorate([
        core_1.Component({
            selector: 'sa-empleado',
            templateUrl: 'empleado.component.html',
            providers: [pais_service_1.PaisService, common_1.DatePipe]
        }), 
        __metadata('design:paramtypes', [empleado_service_1.EmpleadoService, pais_service_1.PaisService, router_1.Router])
    ], EmpleadoComponent);
    return EmpleadoComponent;
}());
exports.EmpleadoComponent = EmpleadoComponent;
//# sourceMappingURL=empleado.component.js.map