import {Component, OnInit, EventEmitter,ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router, ActivatedRoute} from "@angular/router";
import {PermisoEmpleado} from "../../+personal/+empleado/permisoEmpleado";
import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {Empleado} from "../../+personal/+empleado/empleado";
import {HistoriaLaboralDto} from "../../+personal/+historiaLaboral/historiaLaboralDto";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {isUndefined} from "util";
import {Notificacion} from "../../+personal/+empleado/notificacion";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {PaisService} from "../../+personal/+empleado/pais.service";
import {PaisDto} from "../../+personal/+empleado/paisDto";
import {DepartamentoDto} from "../../+personal/+empleado/departamentoDto";
import {Dependiente} from "../../+personal/+empleado/dependiente";
import {PageChangeEvent, GridDataResult} from "@progress/kendo-angular-grid";
import {ExperienciaLaboral} from "../../+personal/+empleado/experienciaLaboral";
import {Vacacion} from "../../+personal/+empleado/Vacacion";
import {HorarioEmpleado} from "../../+personal/+empleado/horarioEmpleado";
import {DependienteDialogFormComponent} from "./dependiente.dialog.component";
import {ExperienciaLaboralDatosPersonalesDialogFormComponent} from "./experienciaLaboralDatosPersonales.dialog.component";
import {PermisosDialogFormComponent} from "./permisos.dialog.component";
import {VacacionesDialogFormComponent} from "./vacaciones.dialog.component";
import {Marcacion} from "../../+personal/+empleado/marcacion";
import {MarcacionesDialogFormComponent} from "./marcaciones.dialog.component";
import {RolDto} from "../../+personal/+empleado/RolDto";

import {NotificationsService} from "angular2-notifications";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";

declare var $: any;

@Component({
  selector: 'sa-datos-personales',
  templateUrl: 'datos.personales.component.html',
    providers: [PaisService],
})
export class DatosPersonalesComponent implements OnInit {

    public state: any = {
        tabs: {
            tabdatosPersonales: 'tab-active-1',
        }
    };

    public isEnableDepartamentoDomicilio:boolean;
    public isEnableProvinciaDomicilio:boolean;
    public isEnableDistritoDomicilio:boolean;

    public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};

    public defaultItemPais:PaisDto={codigo:null,nombre:'Seleccionar'};

    public defaultItemDepartamento:DepartamentoDto={codigo:null,nombre:'Seleccionar'};

    public defaultItemPeriodo={idPeriodoEmpleado:null,periodo:'Todos'};

    public tiposDomicilio:TablaGeneralDto[];
    public relacionesContacto:TablaGeneralDto[];
    public paisesDomicilio:PaisDto[];
    public departamentosDomicilio:DepartamentoDto[];
    public provinciasDomicilio:DepartamentoDto[];
    public distritosDomicilio:DepartamentoDto[];

    private empleado:Empleado = new Empleado();
    private dependientes: Dependiente[]=[];
    private experienciasLaborales: ExperienciaLaboral[]=[];
    private permisosEmpleados:PermisoEmpleado[]=[];
    private vacaciones:Vacacion[]=[];
    private marcaciones:Marcacion[]=[];

    private horariosEmpleado:HorarioEmpleado=new HorarioEmpleado();

    private periodoEmpleado:PeriodoEmpleado = new PeriodoEmpleado();

    private periodosEmpleados:PeriodoEmpleado[]=[];

    private pageSize: number = 10;
    private skip: number = 0;

    errorMessage: string;

    mensaje: string;

    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

    //notificacion
    public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'top']
    };

    constructor(private _service: NotificationsService, private route:ActivatedRoute, private empleadoService:EmpleadoService, private paisService:PaisService, private _router: Router) {

        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
        this.empleado.idEmpleado = this.localStorageValue.idEmpleado;

        this.cargarInformacion(this.empleado);

    }

    cargarInformacion(empleado:Empleado){
        this.isEnableDepartamentoDomicilio=true;
        this.isEnableProvinciaDomicilio=true;
        this.isEnableDistritoDomicilio=true;

        this.obtenerPaisesDomicilio();
        this.getTiposDomicilio();
        this.getRelacionesContacto();

        this.verEmpleado(empleado);
        this.verDependiente(empleado);
        this.verExperienciaLaboral(empleado);
        this.verPeriodoEmpleado(empleado);
        this.verPermisoEmpleado(empleado);
        this.verVacaciones(empleado);
        this.verMarcaciones(empleado);
        this.verHorarioEmpleado(empleado);

    }

    verEmpleado(empleado: Empleado){
        this.empleadoService.verEmpleado(empleado).subscribe(
            data => this.cargarEmpleado(data),
            error => this.errorMessage = <any>error
        );
    }

    verHorarioEmpleado(empleado: Empleado){
        this.empleadoService.verHorarioEmpleado(empleado).subscribe(
            data => this.horariosEmpleado = data,
            error => this.errorMessage = <any>error
        );
    }

    verVacaciones(empleado: Empleado){
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarVacaciones(this.periodoEmpleado);
    }

    verMarcaciones(empleado: Empleado){
        this.empleadoService.verMarcaciones(empleado).subscribe(
            data => this.marcaciones = data,
            error => this.errorMessage = <any>error
        );
    }

    cargarVacaciones(periodoEmpleado: PeriodoEmpleado){
        this.empleadoService.verVacaciones(periodoEmpleado).subscribe(
            data => {this.vacaciones = data;
                    this.obtenerGridVacaciones()},
            error => this.errorMessage = <any>error
        );
    }

    onChangeVacacionesPorPeriodo(value){
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarVacaciones(this.periodoEmpleado);

    }

    onChangeDateDesde(value){

    }

    onChangeDateHasta(value){

    }

    cargarEmpleado(data:Empleado){

        this.actualizarDptoDomicilio(data.paisDomicilio);

        if(data.departamentoDomicilio != null && data.departamentoDomicilio!= ''){
            this.actualizarProvinciaDomicilio(data.departamentoDomicilio);

            if(data.provinciaDomicilio != null && data.provinciaDomicilio!= ''){
                this.actualizarDistritoDomicilio(data.provinciaDomicilio);
            }
        }

        this.empleado = data;

    }

    ngOnInit() {
    }

    private getTiposDomicilio() {
        this.empleadoService.completarComboBox('obtenerTipoDomicilio').subscribe(
            tablaGeneralDto => this.tiposDomicilio = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    private getRelacionesContacto() {
        this.empleadoService.completarComboBox('obtenerRelacionContactoEmergencia').subscribe(
            tablaGeneralDto => this.relacionesContacto = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerPaisesDomicilio() {
        this.paisService.completarComboPais().subscribe(
            paisDto => this.paisesDomicilio = paisDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerDepartamentosDomicilio(codigoPais:string) {
        this.paisService.completarComboDepartamento(codigoPais).subscribe(
            departamentoDto => this.departamentosDomicilio = departamentoDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerProvinciasDomicilio(codigoDpto:string) {
        this.paisService.completarComboProvincia(codigoDpto).subscribe(
            provinciasDto => this.provinciasDomicilio = provinciasDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerDistritosDomicilio(codigoProvincia:string) {
        this.paisService.completarComboDistrito(codigoProvincia).subscribe(
            distritosDto => this.distritosDomicilio = distritosDto,
            error =>  this.errorMessage = <any>error);
    }

    actualizarDptoDomicilio(value):void{
        this.isEnableDepartamentoDomicilio=false;

        let codigo:string = value;// (<HTMLSelectElement>event.srcElement).value;
        this.empleado.departamentoDomicilio = null;
        if(value == null) {
            this.departamentosDomicilio = null;
        }else {
            this.obtenerDepartamentosDomicilio(codigo);
        }

        this.empleado.provinciaDomicilio = null;
        this.empleado.distritoDomicilio = null;

        this.provinciasDomicilio = null;
        this.distritosDomicilio = null;

        this.isEnableProvinciaDomicilio=true;
        this.isEnableDistritoDomicilio=true;

    }

    actualizarProvinciaDomicilio(value):void{
        this.isEnableProvinciaDomicilio=false;

        let codigo:string = value;//(<HTMLSelectElement>event.srcElement).value;
        this.empleado.provinciaDomicilio = null;
        if(value == null) {
            this.provinciasDomicilio = null;
        }else {
            this.obtenerProvinciasDomicilio(codigo);
        }

        this.empleado.distritoDomicilio = null;
        this.distritosDomicilio = null;
        this.isEnableDistritoDomicilio=true;

    }

    actualizarDistritoDomicilio(value):void{
        this.isEnableDistritoDomicilio=false;

        let codigo:string = value;//(<HTMLSelectElement>event.srcElement).value;
        this.empleado.distritoDomicilio = null;
        if(value == null) {
            this.distritosDomicilio = null;
        }else {
            this.obtenerDistritosDomicilio(codigo);
        }

    }

    verDependiente(empleado: Empleado){
        this.empleadoService.verDependiente(empleado).subscribe(
            data => this.dependientes = data,
            error => this.errorMessage = <any>error
        );
    }

    verExperienciaLaboral(empleado: Empleado){
        this.empleadoService.verExperienciaLaboral(empleado).subscribe(
            data => this.experienciasLaborales = data,
            error => this.errorMessage = <any>error
        );
    }

    verPeriodoEmpleado(empleado: Empleado){
        this.empleadoService.verPeriodoEmpleado(empleado).subscribe(
            data => this.periodosEmpleados = data,
            error => this.errorMessage = <any>error
        );
    }

    verPermisoEmpleado(empleado: Empleado){
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarPermisoEmpleado(this.periodoEmpleado);
    }

    cargarPermisoEmpleado(periodoEmpleado: PeriodoEmpleado){
        this.empleadoService.verPermisoEmpleado(periodoEmpleado).subscribe(
            data => {this.permisosEmpleados = data;
                    this.obtenerGridPermisoEmpleado()},
            error => this.errorMessage = <any>error
        );
    }

    onChangePermisoEmpleadoPorPeriodo(value){
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarPermisoEmpleado(this.periodoEmpleado);

    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        // this.obtenerDocumentos().subscribe(data => this.view = data);
    }


    //dependiente

    public dataItemDependiente: Dependiente;

    @ViewChild(DependienteDialogFormComponent) protected dependienteDialogComponent: DependienteDialogFormComponent;

    private viewDependiente: Array<Dependiente>=[];

    public agregarDependiente(): void {
        this.dependienteDialogComponent.tituloCabecera = "Agregar";
        this.dependienteDialogComponent.agregarDependiente();

    }

    public onEditarDependiente(dataItem: any): void {
        this.dependienteDialogComponent.tituloCabecera = "Editar";
        this.dependienteDialogComponent.obtenerTipoDocumento();
        this.dependienteDialogComponent.obtenerRelacionDependiente();

        this.dataItemDependiente = dataItem;

        this.dependienteDialogComponent.nombreDependiente = this.dataItemDependiente.nombre;
        this.dependienteDialogComponent.apellidoPaternoDependiente = this.dataItemDependiente.apellidoPaterno;
        this.dependienteDialogComponent.apellidoMaternoDependiente = this.dataItemDependiente.apellidoMaterno;
        this.dependienteDialogComponent.tipoDocumentoDependiente = this.dataItemDependiente.tipoDocumento;
        this.dependienteDialogComponent.numeroDocumentoDependiente = this.dataItemDependiente.numeroDocumento;
        this.dependienteDialogComponent.relacionDepediente = this.dataItemDependiente.relacion;
        this.dependienteDialogComponent.fechaNacimientoDepediente = this.dataItemDependiente.fechaNacimiento;
        this.dependienteDialogComponent.nombreRelacionDepediente = this.dataItemDependiente.nombreRelacion;
        this.dependienteDialogComponent.nombreTipoDocumentoDependiente = this.dataItemDependiente.nombreTipoDocumento;

    }

    public onGuardarDependiente(dto: Dependiente): void {

        const operation = dto.idDependiente === undefined ?
            this.crearDependiente(dto) :
            this.editarDependiente(dto);

    }

    public onEliminarDependiente(e: Dependiente): void {
        const operation = this.eliminarDependiente(e);
    }

    public onCancelarDependiente(): void {
        this.dataItemDependiente = undefined;
    }

    public obtenerDependiente(): Observable<Dependiente[]> {
        return this.fetchDependiente();
    }

    public editarDependiente(data: Dependiente): Observable<Dependiente[]> {
        return this.fetchDependiente("update", data);
    }

    public crearDependiente(data: Dependiente): Observable<Dependiente[]> {
        data.idDependiente = this.generarIdDependienteTemporal();
        return this.fetchDependiente("create", data);

    }

    public eliminarDependiente(data: Dependiente): Observable<Dependiente[]> {
        return this.fetchDependiente("destroy", data);
    }

    private fetchDependiente(action: string = "", data?: Dependiente): Observable<Dependiente[]>  {

        if(action=="create"){
            var documento : Dependiente = (JSON.parse(JSON.stringify(data)));
            this.dependientes.push(documento);
        }else if(action=="update"){
            var indice = this.dependientes.indexOf(data);
            if(indice>=0)
                this.dependientes[indice]  = (JSON.parse(JSON.stringify(data)));
        }else if(action=="destroy"){
            var indice = this.dependientes.indexOf(data);

            if(indice>=0)
                this.dependientes.splice(indice, 1);

        }

        return Observable.of(this.dependientes);
    }

    generarIdDependienteTemporal():number {
        if (this.dependientes != null)
            return (this.dependientes.length + 2)* -1;
        else
            return-1;
    }

    //experiencia Laboral

    public dataItemExperienciaLaboral: ExperienciaLaboral;

    @ViewChild(ExperienciaLaboralDatosPersonalesDialogFormComponent) protected editExperienciaLaboralFormComponent: ExperienciaLaboralDatosPersonalesDialogFormComponent;

    private viewExperienciaLaboral: Array<ExperienciaLaboral>=[];

    public onEditarExperienciaLaboral(dataItem: any): void {
        this.editExperienciaLaboralFormComponent.titulo = "Editar";
        this.dataItemExperienciaLaboral = dataItem;
        this.editExperienciaLaboralFormComponent.razonSocial = this.dataItemExperienciaLaboral.razonSocial;
        this.editExperienciaLaboralFormComponent.departamento = this.dataItemExperienciaLaboral.departamento;
        this.editExperienciaLaboralFormComponent.cargo = this.dataItemExperienciaLaboral.cargo;
        this.editExperienciaLaboralFormComponent.descripcion = this.dataItemExperienciaLaboral.descripcion;
        this.editExperienciaLaboralFormComponent.fechaInicio = this.dataItemExperienciaLaboral.fechaInicio;
        this.editExperienciaLaboralFormComponent.fechaFin = this.dataItemExperienciaLaboral.fechaFin;
    }

    public onCancelarExperienciaLaboral(): void {
        this.dataItemExperienciaLaboral = undefined;
    }

    public onAgregarExperienciaLaboral(dto: ExperienciaLaboral): void {

        const operation = dto.idExperienciaLaboral === undefined ?
            this.crearExperienciaLaboral(dto) :
            this.editarExperienciaLaboral(dto);

    }

    public onEliminarExperienciaLaboral(e: ExperienciaLaboral): void {
        const operation = this.eliminarExperienciaLaboral(e);
    }

    public agregarExperienciaLaboral(): void {
        this.editExperienciaLaboralFormComponent.titulo = "Agregar";
        this.editExperienciaLaboralFormComponent.agregarExperienciaLaboral();
    }

    public obtenerExperienciasLaborales(): Observable<ExperienciaLaboral[]> {
        return this.fetchExperienciaLaboral();
    }

    public editarExperienciaLaboral(data: ExperienciaLaboral): Observable<ExperienciaLaboral[]> {
        return this.fetchExperienciaLaboral("update", data);
    }

    public crearExperienciaLaboral(data: ExperienciaLaboral): Observable<ExperienciaLaboral[]> {
        data.idExperienciaLaboral = this.generarIdExperienciaLaboralTemporal();
        return this.fetchExperienciaLaboral("create", data);

    }

    public eliminarExperienciaLaboral(data: ExperienciaLaboral): Observable<ExperienciaLaboral[]> {
        return this.fetchExperienciaLaboral("destroy", data);
    }

    private fetchExperienciaLaboral(action: string = "", data?: ExperienciaLaboral): Observable<ExperienciaLaboral[]>  {

        if(action=="create"){
            var model : ExperienciaLaboral = (JSON.parse(JSON.stringify(data)));
            this.experienciasLaborales.push(model);
        }else if(action=="update"){
            var indice = this.experienciasLaborales.indexOf(data);
            if(indice>=0)
                this.experienciasLaborales[indice]  = (JSON.parse(JSON.stringify(data)));
        }else if(action=="destroy"){
            var indice = this.experienciasLaborales.indexOf(data);

            if(indice>=0)
                this.experienciasLaborales.splice(indice, 1);

        }

        return Observable.of(this.experienciasLaborales);
    }

    generarIdExperienciaLaboralTemporal():number {
        if (this.viewExperienciaLaboral != null)
            return (this.viewExperienciaLaboral.length + 2)* -1;
        else
            return-1;
    }


    protected pageChangeExperienciaLaboral(event: PageChangeEvent): void {
        //this.skip = event.skip;
        //this.obtenerDocumentos().subscribe(data => this.view = data);
    }

    //permiso empleado
    public dataItemPermisoEmpleado: PermisoEmpleado;

    private gridViewPermisoEmpleado: GridDataResult;

    private pageSizePermisoEmpleado: number = 10;
    private skipPermisoEmpleado: number = 0;

    @ViewChild(PermisosDialogFormComponent) protected editPermisosFormComponent: PermisosDialogFormComponent;

    public onEditarPermisoEmpleado(dataItem: any): void {
        this.editPermisosFormComponent.tituloCabecera = "Editar";

        this.dataItemPermisoEmpleado = dataItem;

        if(this.dataItemPermisoEmpleado.estado == 'P'){
            this.editPermisosFormComponent.isEnviado=false;
            this.editPermisosFormComponent.enviadoClass='input';
        }else {
            this.editPermisosFormComponent.isEnviado=true;
            this.editPermisosFormComponent.enviadoClass='input state-disabled';
        }

        if(this.dataItemPermisoEmpleado.motivo == 'P'){
            this.editPermisosFormComponent.isCompensarhoras=false;
        }else{
            this.editPermisosFormComponent.isCompensarhoras=true;
        }

        this.editPermisosFormComponent.motivo = this.dataItemPermisoEmpleado.motivo;
        this.editPermisosFormComponent.razon = this.dataItemPermisoEmpleado.razon;
        this.editPermisosFormComponent.fechaPermiso = this.dataItemPermisoEmpleado.fecha;
        this.editPermisosFormComponent.horaDesdePermiso = this.dataItemPermisoEmpleado.horaInicio;
        this.editPermisosFormComponent.horaHastaPermiso = this.dataItemPermisoEmpleado.horaFin;
        this.editPermisosFormComponent.fechaRecuperacion = this.dataItemPermisoEmpleado.fechaRecuperacion;
        this.editPermisosFormComponent.horaDesdeRecuperacion = this.dataItemPermisoEmpleado.horaInicioRecuperacion;
        this.editPermisosFormComponent.horaHastaRecuperacion = this.dataItemPermisoEmpleado.horaFinRecuperacion;
        this.editPermisosFormComponent.nombreEstado = this.dataItemPermisoEmpleado.nombreEstado;
        this.editPermisosFormComponent.estado = this.dataItemPermisoEmpleado.estado;
        this.editPermisosFormComponent.jefeInmediato = this.dataItemPermisoEmpleado.jefeInmediato;
        this.editPermisosFormComponent.periodo = this.dataItemPermisoEmpleado.periodo;

    }

    public onCancelarPermisoEmpleado(): void {
        this.dataItemPermisoEmpleado = undefined;
    }

    public onAgregarPermisoEmpleado(dto: PermisoEmpleado): void {

        this.editarPermisoEmpleado(dto);
        this.obtenerGridPermisoEmpleado();
    }

    public onEliminarPermisoEmpleado(e: PermisoEmpleado): void {
        const operation = this.eliminarPermisoEmpleado(e);
        this.obtenerGridPermisoEmpleado();
    }

    public editarPermisoEmpleado(data: PermisoEmpleado): Observable<PermisoEmpleado[]> {
        return this.fetchPermisoEmpleado("update", data);
    }


    public eliminarPermisoEmpleado(data: PermisoEmpleado): Observable<PermisoEmpleado[]> {
        return this.fetchPermisoEmpleado("destroy", data);
    }

    private fetchPermisoEmpleado(action: string = "", data?: PermisoEmpleado): Observable<PermisoEmpleado[]>  {

        if(action=="update"){
            var indice = this.permisosEmpleados.indexOf(data);
            if(indice>=0)
                this.permisosEmpleados[indice]  = (JSON.parse(JSON.stringify(data)));
        }else if(action=="destroy"){
            var indice = this.permisosEmpleados.indexOf(data);

            if(indice>=0)
                this.permisosEmpleados.splice(indice, 1);

        }

        return Observable.of(this.permisosEmpleados);
    }

    obtenerGridPermisoEmpleado():void{
        if(this.permisosEmpleados.length>0){
            //this.isEmpty=false;
            this.gridViewPermisoEmpleado = {
                data: this.permisosEmpleados.slice(this.skipPermisoEmpleado, this.skipPermisoEmpleado + this.pageSizePermisoEmpleado),
                total: this.permisosEmpleados.length
            };
        }else{
            //this.isEmpty=true;
            this.gridViewPermisoEmpleado = {
                data: [],
                total: 0
            };
        }
    }

    protected pageChangePermisoEmpleado(event: PageChangeEvent): void {
        this.skipPermisoEmpleado = event.skip;
        this.obtenerGridPermisoEmpleado();

    }

    //vacaciones empleado

    public dataItemVacacion: Vacacion;

    private gridViewVacaciones: GridDataResult;

    private pageSizeVacaciones: number = 10;
    private skipVacaciones: number = 0;

    @ViewChild(VacacionesDialogFormComponent) protected editVacacionesFormComponent: VacacionesDialogFormComponent;

    public onEditarVacaciones(dataItem: any): void {

        this.editVacacionesFormComponent.tituloCabecera = "Editar";

        this.dataItemVacacion = dataItem;

        if(this.dataItemVacacion.estado == 'P'){
            this.editVacacionesFormComponent.isEnviado=false;
            this.editVacacionesFormComponent.enviadoClass='input';
        }else {
            this.editVacacionesFormComponent.isEnviado=true;
            this.editVacacionesFormComponent.enviadoClass='input state-disabled';
        }


        this.editVacacionesFormComponent.periodo = this.dataItemVacacion.periodo;
        this.editVacacionesFormComponent.jefeInmediato = this.dataItemVacacion.jefeInmediato;
        this.editVacacionesFormComponent.fechaDesde = this.dataItemVacacion.fechaInicio;
        this.editVacacionesFormComponent.fechaHasta = this.dataItemVacacion.fechaFin;
        this.editVacacionesFormComponent.diasCalendarios = this.dataItemVacacion.diasCalendarios;
        this.editVacacionesFormComponent.diasHabiles = this.dataItemVacacion.diasHabiles;
        this.editVacacionesFormComponent.jefeInmediato = this.dataItemVacacion.jefeInmediato;
        this.editVacacionesFormComponent.periodo = this.dataItemVacacion.periodo;
        this.editVacacionesFormComponent.estado = this.dataItemVacacion.estado;
        this.editVacacionesFormComponent.nombreEstado = this.dataItemVacacion.nombreEstado;
        this.editVacacionesFormComponent.estado = this.dataItemVacacion.estado;

    }

    public onCancelarVacaciones(): void {
        this.dataItemVacacion = undefined;
    }

    public onAgregarVacaciones(dto: Vacacion): void {

        this.editarVacaciones(dto);
        this.obtenerGridVacaciones();

    }

    public onEliminarVacaciones(e: Vacacion): void {
        const operation = this.eliminarVacaciones(e);
        this.obtenerGridVacaciones();
    }


    public editarVacaciones(data: Vacacion): Observable<Vacacion[]> {
        return this.fetchVacaciones("update", data);
    }


    public eliminarVacaciones(data: Vacacion): Observable<Vacacion[]> {
        return this.fetchVacaciones("destroy", data);
    }

    private fetchVacaciones(action: string = "", data?: Vacacion): Observable<Vacacion[]>  {

        if(action=="update"){
            var indice = this.vacaciones.indexOf(data);
            if(indice>=0)
                this.vacaciones[indice]  = (JSON.parse(JSON.stringify(data)));
        }else if(action=="destroy"){
            var indice = this.vacaciones.indexOf(data);

            if(indice>=0)
                this.vacaciones.splice(indice, 1);

        }

        return Observable.of(this.vacaciones);
    }

    obtenerGridVacaciones():void{
        if(this.vacaciones.length>0){
            //this.isEmpty=false;
            this.gridViewVacaciones = {
                data: this.vacaciones.slice(this.skipVacaciones, this.skipVacaciones + this.pageSizeVacaciones),
                total: this.vacaciones.length
            };
        }else{
            //this.isEmpty=true;
            this.gridViewVacaciones = {
                data: [],
                total: 0
            };
        }
    }

    protected pageChangeVacaciones(event: PageChangeEvent): void {
        this.skipVacaciones = event.skip;
        this.obtenerGridVacaciones();

    }

    //marcacion
    public dataItemMarcacion: Marcacion;

    @ViewChild(MarcacionesDialogFormComponent) protected editMarcacionesFormComponent: MarcacionesDialogFormComponent;

    public onEditarMarcaciones(dataItem: any): void {

        this.editMarcacionesFormComponent.tituloCabecera = "Solicitar Cambio Marcacion";

        this.dataItemMarcacion = dataItem;

        this.editMarcacionesFormComponent.nombreEmpleado = this.dataItemMarcacion.nombreCompletoEmpleado;
        this.editMarcacionesFormComponent.fechaMarcacion = this.dataItemMarcacion.fecha;
        this.editMarcacionesFormComponent.horaIngreso = this.dataItemMarcacion.horaIngreso;
        this.editMarcacionesFormComponent.horaInicioAlmuerzo = this.dataItemMarcacion.horaInicioAlmuerzo;
        this.editMarcacionesFormComponent.horaFinAlmuerzo = this.dataItemMarcacion.horaFinAlmuerzo;
        this.editMarcacionesFormComponent.horaSalida = this.dataItemMarcacion.horaSalida;

    }

    public onCancelaSolicitudCambio(): void {
        this.dataItemMarcacion = undefined;
    }

    public onAgregarSolicitudCambio(dto: Marcacion): void {

        this.editarMarcaciones(dto);

    }

    public onEliminarMarcacion(e: Marcacion): void {
        const operation = this.eliminarMarcaciones(e);
    }


    public editarMarcaciones(data: Marcacion): Observable<Marcacion[]> {
        return this.fetchMarcaciones("update", data);
    }


    public eliminarMarcaciones(data: Marcacion): Observable<Marcacion[]> {
        return this.fetchMarcaciones("destroy", data);
    }

    private fetchMarcaciones(action: string = "", data?: Marcacion): Observable<Marcacion[]>  {

        if(action=="update"){
            var indice = this.marcaciones.indexOf(data);
            if(indice>=0)
                this.marcaciones[indice]  = (JSON.parse(JSON.stringify(data)));
        }else if(action=="destroy"){
            var indice = this.marcaciones.indexOf(data);

            if(indice>=0)
                this.marcaciones.splice(indice, 1);

        }

        return Observable.of(this.marcaciones);
    }


    //datos persona

    validarRequerido(){
        let validacion = false;


        if(this.empleado.direccionDomicilio === undefined || this.empleado.direccionDomicilio == null || this.empleado.direccionDomicilio==''){
            $('#direccion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.empleado.tipoDomicilio === undefined || this.empleado.tipoDomicilio == null || this.empleado.tipoDomicilio==''){
            validacion = true;
        }

        if(this.empleado.paisDomicilio === undefined || this.empleado.paisDomicilio == null || this.empleado.paisDomicilio==''){
            validacion = true;
        }

        if(this.empleado.telefonoCelular === undefined || this.empleado.telefonoCelular == null || this.empleado.telefonoCelular==''){
            $('#celular').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        return validacion;
    }

    ingresaDireccion(){
        $('#direccion').parent().removeClass('state-error');
    }

    ingresaCelular(){
        $('#celular').parent().removeClass('state-error');
    }

    onActualizarDatosPersonales(){
        this.empleado.dependientes = this.dependientes;
        this.empleado.experienciasLaborales = this.experienciasLaborales;


        if(this.validarRequerido()){
            this._service.error("Error", 'Ingrese los campos obligatorios.');
            return;
        }

        this.empleadoService.actualizarDatosPersonalesEmpleado(this.empleado).subscribe(
            data => {
                this.navegarDatosPersonalesEmpleado(data);
            },
            error => console.log(error)
        );


    }

    navegarDatosPersonalesEmpleado(data:Notificacion){
        if(data.codigo == 1){
            this._service.success("Success", data.mensaje);
            this.state.tabs.tabdatosPersonales=='tab-active-1'
            this.cargarEmpleado(this.empleado);
        }
        else if(data.codigo == 0){
            this._service.error("Error", data.mensaje);
        }

    }

    cerrarDialog(){
        this.mensaje = '';
        $( '#dialog-message' ).dialog( "close" );
    }

}
