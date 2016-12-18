

import {Component, OnInit} from "@angular/core";
import {UndNegocio} from "../+cargo/undnegocio";
import {TablaGeneralDto} from "../+empleado/tablaGeneralDto";
import {Proyecto} from "../+cargo/proyecto";
import {DepartamentoArea} from "../+cargo/departamento";
import {BusquedaPermisos} from "./busqueda.permisos";
import {Permisos} from "../+busqueda-empleado/Permisos";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {CargoService} from "../+cargo/http-empleados-service";
import {EmpleadoService} from "../+empleado/empleado.service";

import {Router} from "@angular/router";

import {PermisoEmpleado} from "../+empleado/permisoEmpleado";
import {environment} from "../../../environments/environment";
import {CompleterData, CompleterService} from "ng2-completer";
import {Empleado} from "../+empleado/empleado";
import {RolDto} from "../+empleado/RolDto";
import {RoleNameDto} from "../../+dtos/roleNameDto";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {EnumEstados} from "../../+enums/EnumEstados";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {Subscription} from "rxjs";


/**
 * Created by josediaz on 8/11/2016.
 */



@Component({
    selector: 'busqueda-permisos',
    templateUrl: 'busqueda.permisos.component.html',
    providers: [ CargoService]
})
export class BusquedaPermisosComponent implements OnInit {

    busy: Subscription;
    public undnegocios: UndNegocio[];
    public proyectos: Proyecto[];
    public departamentos: DepartamentoArea[];
    public unidadNegocioSelect: UndNegocio;
    public departamentoSelect: DepartamentoArea;
    public proyectoSelect: Proyecto;
    public estadosSelect: TablaGeneralDto;
    public defaultItem: UndNegocio = {idUnidadDeNegocio: null, nombre: 'Todos'};

    public defaultItemTablaGeneral: TablaGeneralDto = {codigo: null, nombre: 'Todos'};

    public defaultItemDepartamento: DepartamentoArea = {idDepartamentoArea: null,idUnidadDeNegocio: null, nombre: 'Todos'};
    public defaultItemProyecto: Proyecto = {idProyecto: null, nombre: 'Todos'};
    errorMessage: string;

    busquedaPermisos: BusquedaPermisos = new BusquedaPermisos();
    public permisos: Permisos[] = [];
    public estados:TablaGeneralDto[];

    private gridView: GridDataResult;
    private pageSize: number = 10;
    private data: Object[];
    private skip: number = 0;

    dataItem: Permisos;
    public isEmpty:boolean = true;
    public isSearch: boolean = false;

    //Autocomplete

    private dataServiceEmpleado:CompleterData;

    private dataServiceJefeInmediato:CompleterData;

    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

    localhost:  String = environment.backend;
    port: String = environment.port;

    constructor(private empleadoService: EmpleadoService, private cargoService: CargoService,  private _router: Router, private completerService: CompleterService){

        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
        if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.RHANA]){
            this.localStorageValue.mostrarBotonRhna = true;
        }
        if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.GEREN]){
            this.localStorageValue.mostrarBotonGeren = true;
        }

        this.dataServiceEmpleado = completerService.remote('http://'+this.localhost+':'+ this.port +'/permisoEmpleado/autocompleteEmpleado?search=','nombreEmpleado','nombreEmpleado');

        this.dataServiceJefeInmediato = completerService.remote('http://'+this.localhost+':'+ this.port +'/permisoEmpleado/autocompleteEmpleado?search=','nombreEmpleado','nombreEmpleado');

        let empleado: Empleado = this.empleadoService.retrieveSessionStorage('entityGestionarPermiso');

        if(empleado === undefined || empleado == null || empleado.idEmpleado == null){
            this.busquedaPermisos.idEmpleado = null;
        }else{

            this.busquedaPermisos.idEmpleado = empleado.idEmpleado;
            this.onSubmit();
        }
        
    }

    selectEmpleado(e){
        if(e !=null)
            this.busquedaPermisos.idEmpleado = e.originalObject.idEmpleado;
        else
            this.busquedaPermisos.idEmpleado = null;
    }

    selectJefeInmediato(e){
        if(e !=null)
            this.busquedaPermisos.idJefeInmediato = e.originalObject.idEmpleado;
        else
            this.busquedaPermisos.idJefeInmediato = null;
    }

    onLimpiar(){
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
        this.proyectos= null;

        this.estadosSelect = this.defaultItemTablaGeneral;


        this.gridView = {
            data: [],
            total: 0
        };
    }

    onSubmit(){

        this.validarValoresSeleccionados();
        console.log(this.busquedaPermisos);
        this.getPermisos();

    }

    private getPermisos() {
        this.busy = this.empleadoService.buscarPermisoEmpleado(this.busquedaPermisos).subscribe(
            data => {
                this.isSearch = true;
                this.permisos = data;
                this.skip = 0;

                this.obtenerPermisos()
            },
            error => this.errorMessage = <any>error
        );
    }

    public onEdit(dataItem: any): void {

        if(dataItem.estado == EnumEstados[EnumEstados.P]){

            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }else if(dataItem.estado == EnumEstados[EnumEstados.E] && this.localStorageValue.mostrarBotonGeren === true){

            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }else if(dataItem.estado == EnumEstados[EnumEstados.A]){

            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }else if(dataItem.estado == EnumEstados[EnumEstados.R]){

            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }
        
    }

    onDelete(dataItem: Permisos): void {

        this.empleadoService.eliminarPermisoEmpleado(dataItem).subscribe(
            data => {
                this.getPermisos();
            },
            error => this.errorMessage = <any>error
        );
    }
    onAprobar(dataItem: Permisos): void {

        this.empleadoService.aprobarPermisoEmpleado(dataItem).subscribe(
            data => {
                this.getPermisos();
            },
            error => this.errorMessage = <any>error
        );
    }
    onRechazar(dataItem: Permisos): void {

        this.empleadoService.rechazarPermisoEmpleado(dataItem).subscribe(
            data => {
                this.getPermisos();
            },
            error => this.errorMessage = <any>error
        );
    }

    private obtenerPermisos(): void {

        if(this.permisos.length>0){
            this.isEmpty=false;
            this.gridView = {
                data: this.permisos.slice(this.skip, this.skip + this.pageSize),
                total: this.permisos.length
            };

        }else{
            this.isEmpty=true;

            this.gridView = {
                data: [],
                total: 0
            };
        }


    }

    ngOnInit() {
        this.getUndNegocio();
        this.getEmpleadoEstados();
    }


    private validarValoresSeleccionados() {



        if (this.busquedaPermisos.nombreEmpleado === undefined) this.busquedaPermisos.nombreEmpleado = '';
        if (this.busquedaPermisos.desde === undefined) this.busquedaPermisos.desde = '';
        if (this.busquedaPermisos.hasta === undefined) this.busquedaPermisos.hasta = '';
        if (this.busquedaPermisos.codigoPermiso === undefined) this.busquedaPermisos.codigoPermiso = '';
        if (this.busquedaPermisos.jefeInmediato === undefined) this.busquedaPermisos.jefeInmediato = '';


        (this.estadosSelect === undefined || this.estadosSelect == null) ? this.busquedaPermisos.estado = ''
            : this.busquedaPermisos.estado = this.estadosSelect.codigo;

        this.unidadNegocioSelect === undefined ? this.busquedaPermisos.unidadNegocio = ''
            : this.busquedaPermisos.unidadNegocio = (this.unidadNegocioSelect.idUnidadDeNegocio == null ?  '': this.unidadNegocioSelect.idUnidadDeNegocio.toString());;

        this.departamentoSelect === undefined ? this.busquedaPermisos.departamento = ''
            : this.busquedaPermisos.departamento = (this.departamentoSelect.idDepartamentoArea == null ?  '': this.departamentoSelect.idDepartamentoArea.toString());

        this.proyectoSelect === undefined ? this.busquedaPermisos.proyecto = ''
            : this.busquedaPermisos.proyecto = (this.proyectoSelect.idProyecto == null ?  '': this.proyectoSelect.idProyecto.toString());

    }


    onChangeFechaDesde(value){
        this.busquedaPermisos.desde = value;
    }

    onChangeFechaHasta(value){
        this.busquedaPermisos.hasta = value;
    }


    private getUndNegocio() {
        this.cargoService.completarComboUndNegocio().subscribe(
            undnegocios => this.undnegocios = undnegocios,
            error => this.errorMessage = <any>error
        );
    }

    private obtenerDepartamentos(idUndNegocio: number) {
        this.cargoService.completarComboDepa(idUndNegocio).subscribe(
            departamentoDto => this.departamentos = departamentoDto,
            error => this.errorMessage = <any>error);
    }

    private obtenerProyecto(idDepartamentoArea: number) {
        this.cargoService.completarComboProyecto(idDepartamentoArea).subscribe(
            proyectoDto => this.proyectos = proyectoDto,
            error => this.errorMessage = <any>error);
    }


    private getEmpleadoEstados() {
        this.empleadoService.completarComboBox('obtenerPermisoEstados').subscribe(
            tablaGeneralDto => this.estados = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    actualizarDpto(value): void {

        let codigo: any = value;
        this.departamentoSelect = this.defaultItemDepartamento;
        if(value == null){
            this.departamentos = null;
        }else {
            this.obtenerDepartamentos(codigo);
        }
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos =null;

    }

    actualizarProyecto(value): void {
        let codigo: any = value;
        this.obtenerProyecto(codigo);

    }
}