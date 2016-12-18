
import {Component, OnInit} from "@angular/core";
import {GridDataResult, PageChangeEvent} from "@progress/kendo-angular-grid";

import {Router} from "@angular/router";

import {environment} from "../../../environments/environment";
import {CompleterData, CompleterService} from "ng2-completer";
import {CargoService} from "../../+personal/+cargo/http-empleados-service";
import {UndNegocio} from "../../+personal/+cargo/undnegocio";
import {Proyecto} from "../../+personal/+cargo/proyecto";
import {DepartamentoArea} from "../../+personal/+cargo/departamento";
import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {BusquedaPermisos} from "../../+personal/+permisos/busqueda.permisos";
import {Permisos} from "../../+personal/+busqueda-empleado/Permisos";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {Empleado} from "../../+personal/+empleado/empleado";
import {BusquedaMarcacion} from "../+busqueda-marcacion/busqueda.marcacion";
import {Marcacion} from "../../+personal/+empleado/marcacion";
import {BusquedaHorario} from "./busqueda.horario";
import {Horario} from "../../+personal/+cargo/horario";
import {Subscription} from "rxjs";

declare var $: any;

@Component({
    selector: 'busqueda-horario',
    templateUrl: 'busqueda.horario.component.html',
    providers: [ CargoService]
})
export class BusquedaHorarioComponent implements OnInit {

    busy: Subscription;
    public undnegocios: UndNegocio[];
    public proyectos: Proyecto[];
    public departamentos: DepartamentoArea[];
    public unidadNegocioSelect: UndNegocio;
    public departamentoSelect: DepartamentoArea;
    public proyectoSelect: Proyecto;
    public estadosSelect: TablaGeneralDto;

    public tipoHorarioSelect: TablaGeneralDto;

    public porDefectoSelect: {defecto: number,nombre:string};

    public defaultItem: UndNegocio = {idUnidadDeNegocio: null, nombre: 'Todos'};
    public defaultItemTablaGeneral: TablaGeneralDto = {codigo: null, nombre: 'Todos'};
    public defaultItemDepartamento: DepartamentoArea = {idDepartamentoArea: null,idUnidadDeNegocio: null, nombre: 'Todos'};
    public defaultItemProyecto: Proyecto = {idProyecto: null, nombre: 'Todos'};
    public isEnableUndNegocio: boolean;
    public isEnableDpto: boolean;
    public isEnableProyectos: boolean;
    errorMessage: string;

    public porDefecto: any = [{defecto: 1, nombre: 'Si'},{defecto: 0, nombre: 'No'}];

    public defaultItemPorDefecto: any = {defecto: null, nombre: 'Todos'};

    busquedaHorario: BusquedaHorario = new BusquedaHorario();
    public permisos: Permisos[] = [];

    public horarios: Horario[] = [];

    public estados:TablaGeneralDto[];

    private gridView: GridDataResult;
    private pageSize: number = 10;
    private data: Object[];
    private skip: number = 0;

    dataItem: Permisos;
    public isEmpty:boolean = true;
    public isSearch: boolean = false;

    public noItems: boolean = false;

    private tiposhorario:TablaGeneralDto[]=[];

    localhost:  String = environment.backend;
    port: String = environment.port;

    constructor(private empleadoService: EmpleadoService, private cargoService: CargoService,  private _router: Router, private completerService: CompleterService){


    }

    private getTiposHorario() {
        this.empleadoService.completarComboBox('obtenerTipoHorario').subscribe(
            tablaGeneralDto => this.tiposhorario = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    onLimpiar(){

        this.unidadNegocioSelect = this.defaultItem;
        this.departamentoSelect = this.defaultItemDepartamento;
        this.departamentos = null;
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos= null;

        this.estadosSelect = this.defaultItemTablaGeneral;

        this.horarios = [];

        this.gridView = {
            data: [],
            total: 0
        };

        this.skip = 0;
    }

    onSubmit(){
        this.validarValoresSeleccionados();
        console.log(this.busquedaHorario);
        this.getHorarios();

    }

    private getHorarios() {
        this.busy = this.empleadoService.buscarHorarios(this.busquedaHorario).subscribe(
            data => {
                this.isSearch = true;
                this.horarios = data;
                this.skip = 0;

                this.obtenerHorarios()
            },
            error => this.errorMessage = <any>error
        );
    }

    public onNew(): void {
        this.empleadoService.storeDataHorario(new Horario());
        this._router.navigate(['/gestionTiempo/administrarHorario']);
    }

    public onEdit(dataItem: Horario): void {
        this.empleadoService.storeDataHorario(dataItem);
        this._router.navigate(['/gestionTiempo/administrarHorario']);
        
    }

    private obtenerHorarios(): void {

        if(this.horarios.length>0){
            this.isEmpty=false;
            this.gridView = {
                data: this.horarios.slice(this.skip, this.skip + this.pageSize),
                total: this.horarios.length
            };
        }else{
            this.isEmpty=true;

            this.gridView = {
                data: [],
                total: 0
            };
        }


    }

    protected pageChangeMarcaciones(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.obtenerHorarios();

    }


    ngOnInit() {
        this.getTiposHorario();
        this.obtenerProyectos();
        this.getEstados();
    }

    private validarValoresSeleccionados() {

        (this.estadosSelect === undefined || this.estadosSelect == null) ? this.busquedaHorario.estado = null
            : this.busquedaHorario.estado = this.estadosSelect.codigo;

        (this.tipoHorarioSelect === undefined || this.tipoHorarioSelect == null) ? this.busquedaHorario.tipoHorario = null
            : this.busquedaHorario.tipoHorario = this.tipoHorarioSelect.codigo;

        this.porDefectoSelect === undefined ? this.busquedaHorario.porDefecto = null
            : this.busquedaHorario.porDefecto = this.porDefectoSelect.defecto;


        this.proyectoSelect === undefined ? this.busquedaHorario.proyecto = ''
            : this.busquedaHorario.proyecto = (this.proyectoSelect.idProyecto == null ?  '': this.proyectoSelect.idProyecto.toString());

    }


    private obtenerProyectos() {
        this.cargoService.completarComboTodosProyectos().subscribe(
            proyectoDto => this.proyectos = proyectoDto,
            error => this.errorMessage = <any>error);
    }


    private getEstados() {
        this.empleadoService.completarComboBox('obtenerEstados').subscribe(
            tablaGeneralDto => this.estados = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }



}