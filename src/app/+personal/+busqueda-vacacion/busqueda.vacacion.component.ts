

import {Component, OnInit} from "@angular/core";
import {UndNegocio} from "../+cargo/undnegocio";
import {TablaGeneralDto} from "../+empleado/tablaGeneralDto";
import {Proyecto} from "../+cargo/proyecto";
import {DepartamentoArea} from "../+cargo/departamento";
import {BusquedaVacaciones} from "./busqueda.vacacionDto";
import {AgendarVacacion} from "../../+autogestion/+agendar-vacaciones/agendarVacacionDto";
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
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {EnumEstados} from "../../+enums/EnumEstados";
import {Subscription} from "rxjs";



/**
 * Created by josediaz on 8/11/2016.
 */



@Component({
    selector: 'busqueda-permisos',
    templateUrl: 'busqueda.vacacion.component.html',
    providers: [ CargoService]
})
export class BusquedaVacacionesComponent implements OnInit {

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
    public isEnableUndNegocio: boolean;
    public isEnableDpto: boolean;
    public isEnableProyectos: boolean;
    errorMessage: string;

    busquedaVacaciones: BusquedaVacaciones = new BusquedaVacaciones();
    public vacacion: AgendarVacacion[] = [];
    public estados:TablaGeneralDto[];

    private gridView: GridDataResult;
    private pageSize: number = 10;
    private data: Object[];
    private skip: number = 0;

    dataItem: AgendarVacacion;
    public isEmpty:boolean = true;
    public isSearch: boolean = false;

    //Autocomplete

    private dataServiceEmpleado:CompleterData;

    private dataServiceJefeInmediato:CompleterData;

    localhost:  String = environment.backend;
    port: String = environment.port;

    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();
    
    urlBusquedaCodigoPermiso: string = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaCodigoPermiso?codigo=';

    constructor(private empleadoService: EmpleadoService, private cargoService: CargoService,  private _router: Router, private completerService: CompleterService){
        this.dataServiceEmpleado = completerService.remote('http://'+this.localhost+':'+ this.port +'/permisoEmpleado/autocompleteEmpleado?search=','nombreEmpleado','nombreEmpleado');

        this.dataServiceJefeInmediato = completerService.remote('http://'+this.localhost+':'+ this.port +'/permisoEmpleado/autocompleteEmpleado?search=','nombreEmpleado','nombreEmpleado');

        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();


            if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.RHANA]){
                this.localStorageValue.mostrarBotonRhna = true;
            }
            if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.GEREN]){
                this.localStorageValue.mostrarBotonGeren = true;
            }


        let empleado: Empleado = this.empleadoService.retrieveData();

        if(empleado === undefined || empleado == null || empleado.idEmpleado == null){
            this.busquedaVacaciones.idEmpleado = null;
        }else{
            this.busquedaVacaciones.idEmpleado = this.localStorageValue.idEmpleado;
            this.onSubmit();
        }
    }

    selectEmpleado(e){
        if(e !=null)
            this.busquedaVacaciones.idEmpleado = e.originalObject.idEmpleado;
        else
            this.busquedaVacaciones.idEmpleado = null;
    }

    selectJefeInmediato(e){
        if(e !=null)
            this.busquedaVacaciones.idJefeInmediato = e.originalObject.idEmpleado;
        else
            this.busquedaVacaciones.idJefeInmediato = null;
    }

    onLimpiar(){
        this.busquedaVacaciones.nombreEmpleado = undefined;
        this.busquedaVacaciones.fechaInicio = undefined;
        this.busquedaVacaciones.fechaFin = undefined;
        this.busquedaVacaciones.jefeInmediato = undefined;
        this.busquedaVacaciones.codigoPermiso = undefined;

        this.busquedaVacaciones.idJefeInmediato = null;
        this.busquedaVacaciones.idEmpleado = null;

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
        debugger;
        this.validarValoresSeleccionados();
        console.log(this.busquedaVacaciones);
        this.getVacaciones();

    }

    private getVacaciones() {
        this.busy = this.empleadoService.buscarVacacionesEmpleado(this.busquedaVacaciones).subscribe(
            data => {
                this.isSearch = true;
                this.vacacion = data;
                this.skip = 0;

                this.obtenerVacaciones()
            },
            error => this.errorMessage = <any>error
        );
    }

    public onEdit(dataItem: any): void {
        debugger;
        if(dataItem.estado == EnumEstados[EnumEstados.P]){
            this.empleadoService.storeDataVacaciones(dataItem);
            this._router.navigate(['/personal/administrarVacaciones']);

        }else if(dataItem.estado == EnumEstados[EnumEstados.E] && this.localStorageValue.mostrarBotonGeren === true){
            this.empleadoService.storeDataVacaciones(dataItem);
            this._router.navigate(['/personal/administrarVacaciones']);

        }else if(dataItem.estado == EnumEstados[EnumEstados.A]){
            this.empleadoService.storeDataVacaciones(dataItem);
            this._router.navigate(['/personal/administrarVacaciones']);

        }else if(dataItem.estado == EnumEstados[EnumEstados.R]){
            this.empleadoService.storeDataVacaciones(dataItem);
            this._router.navigate(['/personal/administrarVacaciones']);
        }
        
    }

    onDelete(dataItem: AgendarVacacion): void {
        debugger;
        //VERIFICAR ELIMINAR, APROBAR Y RECHAZAR VACACION

        this.empleadoService.eliminarVacacionEmpleado(dataItem).subscribe(
            data => {
                this.getVacaciones();
            },
            error => this.errorMessage = <any>error
        );
    }
    onAprobar(dataItem: AgendarVacacion): void {
        this.empleadoService.aprobarVacacionEmpleado(dataItem).subscribe(
            data => {
                this.getVacaciones();
            },
            error => this.errorMessage = <any>error
        );
    }

    onRechazar(dataItem: AgendarVacacion): void {

        this.empleadoService.rechazarVacacionEmpleado(dataItem).subscribe(
            data => {
                this.getVacaciones();
            },
            error => this.errorMessage = <any>error
        );
    }

    private obtenerVacaciones(): void {

        if(this.vacacion.length>0){
            this.isEmpty=false;
            this.gridView = {
                data: this.vacacion.slice(this.skip, this.skip + this.pageSize),
                total: this.vacacion.length
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

        debugger;

        if (this.busquedaVacaciones.nombreEmpleado === undefined) this.busquedaVacaciones.nombreEmpleado = '';
        if (this.busquedaVacaciones.fechaInicio === undefined) this.busquedaVacaciones.fechaInicio = '';
        if (this.busquedaVacaciones.fechaInicio === undefined) this.busquedaVacaciones.fechaFin = '';
        if (this.busquedaVacaciones.codigoPermiso === undefined) this.busquedaVacaciones.codigoPermiso = '';
        if (this.busquedaVacaciones.jefeInmediato === undefined) this.busquedaVacaciones.jefeInmediato = '';


        (this.estadosSelect === undefined || this.estadosSelect == null) ? this.busquedaVacaciones.estado = ''
            : this.busquedaVacaciones.estado = this.estadosSelect.codigo;


        this.unidadNegocioSelect === undefined ? this.busquedaVacaciones.unidadNegocio = ''
            : this.busquedaVacaciones.unidadNegocio = (this.unidadNegocioSelect.idUnidadDeNegocio == null ?  '': this.unidadNegocioSelect.idUnidadDeNegocio.toString());;

        this.departamentoSelect === undefined ? this.busquedaVacaciones.departamento = ''
            : this.busquedaVacaciones.departamento = (this.departamentoSelect.idDepartamentoArea == null ?  '': this.departamentoSelect.idDepartamentoArea.toString());

        this.proyectoSelect === undefined ? this.busquedaVacaciones.proyecto = ''
            : this.busquedaVacaciones.proyecto = (this.proyectoSelect.idProyecto == null ?  '': this.proyectoSelect.idProyecto.toString());

    }


    onChangeFechaDesde(value){
        this.busquedaVacaciones.fechaInicio = value;
    }

    onChangeFechaHasta(value){
        this.busquedaVacaciones.fechaFin = value;
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
        this.empleadoService.completarComboBox('obtenerVacacionesEstados').subscribe(
            tablaGeneralDto => this.estados = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    actualizarDpto(value): void {
        //this.isEnableUndNegocio = false;

        let codigo: any = value;
        this.departamentoSelect = this.defaultItemDepartamento;
        if(value == null){
            this.departamentos = null;
        }else {
            this.obtenerDepartamentos(codigo);
        }
        //this.isEnableProyectos = true;
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos =null;


    }

    actualizarProyecto(value): void {
        let codigo: any = value;
        this.obtenerProyecto(codigo);

    }
}