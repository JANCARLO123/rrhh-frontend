

import {Component, OnInit} from "@angular/core";
import {UndNegocio} from "../+cargo/undnegocio";
import {TablaGeneralDto} from "../+empleado/tablaGeneralDto";
import {Proyecto} from "../+cargo/proyecto";
import {DepartamentoArea} from "../+cargo/departamento";
import {BusquedaHorasExtras} from "./busqueda.HorasExtrasDto";
import {AgendarVacacion} from "../../+autogestion/+agendar-vacaciones/agendarVacacionDto";
import {HorasExtrasDto} from "../+administrar-horas-extras/horasExtrasDto";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {CargoService} from "../+cargo/http-empleados-service";
import {EmpleadoService} from "../+empleado/empleado.service";

import {Router} from "@angular/router";

import {PermisoEmpleado} from "../+empleado/permisoEmpleado";
import {environment} from "../../../environments/environment";
import {CompleterData, CompleterService} from "ng2-completer";
import {Empleado} from "../+empleado/empleado";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {EnumEstados} from "../../+enums/EnumEstados";
import {Subscription} from "rxjs";



/**
 * Created by josediaz on 8/11/2016.
 */



@Component({
    selector: 'busqueda-horas-extras',
    templateUrl: 'busqueda.horas.extras.component.html',
    providers: [ CargoService]
})
export class BusquedaHorasExtrasComponent implements OnInit {

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

    busquedaHorasExtras: BusquedaHorasExtras = new BusquedaHorasExtras();
    public horasExtra: HorasExtrasDto[] = [];
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
        debugger;

        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
        if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.RHANA]){
            this.localStorageValue.mostrarBotonRhna = true;
        }
        if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.GEREN]){
            this.localStorageValue.mostrarBotonGeren = true;
        }

        let empleado: Empleado = this.empleadoService.retrieveData();

        if(empleado === undefined || empleado == null || empleado.idEmpleado == null){
            this.busquedaHorasExtras.idEmpleado = null;
        }else{
            this.busquedaHorasExtras.idEmpleado = empleado.idEmpleado;
            this.onSubmit();
        }
    }

    selectEmpleado(e){
        if(e !=null)
            this.busquedaHorasExtras.idEmpleado = e.originalObject.idEmpleado;
        else
            this.busquedaHorasExtras.idEmpleado = null;
    }

    selectJefeInmediato(e){
        if(e !=null)
            this.busquedaHorasExtras.idJefeInmediato = e.originalObject.idEmpleado;
        else
            this.busquedaHorasExtras.idJefeInmediato = null;
    }

    onLimpiar(){
        this.busquedaHorasExtras.nombreEmpleado = undefined;
        this.busquedaHorasExtras.fechaInicio = undefined;
        this.busquedaHorasExtras.fechaFin = undefined;
        this.busquedaHorasExtras.jefeInmediato = undefined;
        this.busquedaHorasExtras.codigoPermiso = undefined;

        this.busquedaHorasExtras.idJefeInmediato = null;
        this.busquedaHorasExtras.idEmpleado = null;

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
        console.log(this.busquedaHorasExtras);
        this.getHorasExtra();

    }

    private getHorasExtra() {
        this.busy = this.empleadoService.buscarHorasExtrasEmpleado(this.busquedaHorasExtras).subscribe(
            data => {
                this.isSearch = true;
                this.horasExtra = data;
                this.skip = 0;

                this.obtenerHorasExtra()
            },
            error => this.errorMessage = <any>error
        );
    }

    public onEdit(dataItem: any): void {
        debugger;
        if(dataItem.estado == EnumEstados[EnumEstados.P]){
            this.empleadoService.storeSessionStorage('entityBusquedaHoras',dataItem);
            this._router.navigate(['/personal/administrarHorasExtra']);
        }else if(dataItem.estado == EnumEstados[EnumEstados.A]){
            this.empleadoService.storeSessionStorage('entityBusquedaHoras',dataItem);
            this._router.navigate(['/personal/administrarHorasExtra']);
        }else if(dataItem.estado == EnumEstados[EnumEstados.R]){
            this.empleadoService.storeSessionStorage('entityBusquedaHoras',dataItem);
            this._router.navigate(['/personal/administrarHorasExtra']);
        }
        
    }

    onDelete(dataItem: HorasExtrasDto): void {
        debugger;
        this.empleadoService.eliminarHorasExtraEmpleado(dataItem).subscribe(
            data => {
                this.getHorasExtra();
            },
            error => this.errorMessage = <any>error
        );
    }
    onAprobar(dataItem: HorasExtrasDto): void{
        this.empleadoService.aprobarHorasExtraEmpleado(dataItem).subscribe(
            data => {
                this.getHorasExtra();
            },
            error => console.log(error)
        );
    }
    onRechazar(dataItem: HorasExtrasDto): void{
        this.empleadoService.rechazarHorasExtraEmpleado(dataItem).subscribe(
            data => {
                this.getHorasExtra();
            },
            error => console.log(error)
        );
    }

    private obtenerHorasExtra(): void {

        if(this.horasExtra.length>0){
            this.isEmpty=false;
            this.gridView = {
                data: this.horasExtra.slice(this.skip, this.skip + this.pageSize),
                total: this.horasExtra.length
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

        if (this.busquedaHorasExtras.nombreEmpleado === undefined) this.busquedaHorasExtras.nombreEmpleado = '';
        if (this.busquedaHorasExtras.fechaInicio === undefined) this.busquedaHorasExtras.fechaInicio = '';
        if (this.busquedaHorasExtras.fechaInicio === undefined) this.busquedaHorasExtras.fechaFin = '';
        if (this.busquedaHorasExtras.codigoPermiso === undefined) this.busquedaHorasExtras.codigoPermiso = '';
        if (this.busquedaHorasExtras.jefeInmediato === undefined) this.busquedaHorasExtras.jefeInmediato = '';


        (this.estadosSelect === undefined || this.estadosSelect == null) ? this.busquedaHorasExtras.estado = ''
            : this.busquedaHorasExtras.estado = this.estadosSelect.codigo;


        this.unidadNegocioSelect === undefined ? this.busquedaHorasExtras.unidadNegocio = ''
            : this.busquedaHorasExtras.unidadNegocio = (this.unidadNegocioSelect.idUnidadDeNegocio == null ?  '': this.unidadNegocioSelect.idUnidadDeNegocio.toString());;

        this.departamentoSelect === undefined ? this.busquedaHorasExtras.departamento = ''
            : this.busquedaHorasExtras.departamento = (this.departamentoSelect.idDepartamentoArea == null ?  '': this.departamentoSelect.idDepartamentoArea.toString());

        this.proyectoSelect === undefined ? this.busquedaHorasExtras.proyecto = ''
            : this.busquedaHorasExtras.proyecto = (this.proyectoSelect.idProyecto == null ?  '': this.proyectoSelect.idProyecto.toString());

    }


    onChangeFechaDesde(value){
        this.busquedaHorasExtras.fechaInicio = value;
    }

    onChangeFechaHasta(value){
        this.busquedaHorasExtras.fechaFin = value;
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