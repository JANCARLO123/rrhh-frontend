
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
import {BusquedaMarcacion} from "./busqueda.marcacion";
import {Marcacion} from "../../+personal/+empleado/marcacion";
import {Subscription} from "rxjs";

declare var $: any;

@Component({
    selector: 'busqueda-marcacion',
    templateUrl: 'busqueda.marcacion.component.html',
    providers: [ CargoService]
})
export class BusquedaMarcacionComponent implements OnInit {

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

    public defaultItemTardanzaInasistencia: TablaGeneralDto[] = [{codigo: 'TA', nombre: 'Tardanzas'},{codigo: 'IN', nombre: 'Inasistencias'}];

    public defaultItemDepartamento: DepartamentoArea = {idDepartamentoArea: null,idUnidadDeNegocio: null, nombre: 'Todos'};
    public defaultItemProyecto: Proyecto = {idProyecto: null, nombre: 'Todos'};
    public isEnableUndNegocio: boolean;
    public isEnableDpto: boolean;
    public isEnableProyectos: boolean;
    errorMessage: string;

    busquedaMarcaciones: BusquedaMarcacion = new BusquedaMarcacion();
    public permisos: Permisos[] = [];

    public marcaciones: Marcacion[] = [];

    public estados:TablaGeneralDto[];

    private gridView: GridDataResult;
    private pageSize: number = 10;
    private data: Object[];
    private skip: number = 0;

    dataItem: Permisos;
    public isEmpty:boolean = true;
    public isSearch: boolean = false;

    public noItems: boolean = false;

    //Autocomplete

    private dataServiceEmpleado:CompleterData;

    private dataServiceJefeInmediato:CompleterData;

    localhost:  String = environment.backend;
    port: String = environment.port;
    
    urlBusquedaCodigoPermiso: string = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaCodigoPermiso?codigo=';

    constructor(private empleadoService: EmpleadoService, private cargoService: CargoService,  private _router: Router, private completerService: CompleterService){
        this.dataServiceEmpleado = completerService.remote('http://'+this.localhost+':'+ this.port +'/permisoEmpleado/autocompleteEmpleado?search=','nombreEmpleado','nombreEmpleado');

        this.dataServiceJefeInmediato = completerService.remote('http://'+this.localhost+':'+ this.port +'/permisoEmpleado/autocompleteEmpleado?search=','nombreEmpleado','nombreEmpleado');


        /*let empleado: Empleado = this.empleadoService.retrieveData();

        if(empleado === undefined || empleado == null || empleado.idEmpleado == null){
            this.busquedaMarcaciones.idEmpleado = null;
        }else{
            this.busquedaMarcaciones.idEmpleado = empleado.idEmpleado;
            this.onSubmit();
        }*/
    }

    selectEmpleado(e){
        if(e !=null)
            this.busquedaMarcaciones.idEmpleado = e.originalObject.idEmpleado;
        else
            this.busquedaMarcaciones.idEmpleado = null;
    }

    selectJefeInmediato(e){
        if(e !=null)
            this.busquedaMarcaciones.idJefeInmediato = e.originalObject.idEmpleado;
        else
            this.busquedaMarcaciones.idJefeInmediato = null;
    }

    onLimpiar(){
        this.busquedaMarcaciones.nombreEmpleado = undefined;
        this.busquedaMarcaciones.desde = undefined;
        this.busquedaMarcaciones.hasta = undefined;
        this.busquedaMarcaciones.jefeInmediato = undefined;
        this.busquedaMarcaciones.codigoPermiso = undefined;

        this.busquedaMarcaciones.idJefeInmediato = null;
        this.busquedaMarcaciones.idEmpleado = null;

        this.unidadNegocioSelect = this.defaultItem;
        this.departamentoSelect = this.defaultItemDepartamento;
        this.departamentos = null;
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos= null;

        this.estadosSelect = this.defaultItemTablaGeneral;

        this.marcaciones = [];

        this.gridView = {
            data: [],
            total: 0
        };

        this.skip = 0;
    }

    onSubmit(){
        debugger;
        this.validarValoresSeleccionados();
        console.log(this.busquedaMarcaciones);
        this.getMarcaciones();

    }

    onExportar(){
        if(this.marcaciones.length==0){
            this.noItems = true;


        }else {

            debugger;
            this.noItems = false;

            if ($("#export_file").length > 0) {
                $("#export_file").remove();
            }
            if ($("#export_file").length === 0) {
                var iframe = $("<iframe src='' name='export_file' id='export_file'></iframe>");
                iframe.appendTo("body");

                var form = $("<form action='http://"+this.localhost+":"+ this.port +"/empleado/exportarMarcaciones' method='post' target='export_file'></form>");
                form.append($("<input type='hidden' name='idEmpleado' id='idEmpleado' />").attr("value",this.busquedaMarcaciones.idEmpleado));
                form.append($("<input type='hidden' name='desde' id='desde' />").attr("value",this.busquedaMarcaciones.desde));
                form.append($("<input type='hidden' name='hasta' id='hasta' />").attr("value",this.busquedaMarcaciones.hasta));
                form.append($("<input type='hidden' name='unidadNegocio' id='unidadNegocio' />").attr("value",this.busquedaMarcaciones.unidadNegocio));
                form.append($("<input type='hidden' name='departamento' id='departamento' />").attr("value",this.busquedaMarcaciones.departamento));
                form.append($("<input type='hidden' name='proyecto' id='proyecto' />").attr("value",this.busquedaMarcaciones.proyecto));
                form.append($("<input type='hidden' name='idJefeInmediato' id='idJefeInmediato' />").attr("value",this.busquedaMarcaciones.idJefeInmediato));
                form.appendTo("body");

                form.submit();
            }
        }
    }

    private getMarcaciones() {
        this.busy = this.empleadoService.buscarMarcacionesEmpleado(this.busquedaMarcaciones).subscribe(
            data => {
                this.isSearch = true;
                this.marcaciones = data;
                this.skip = 0;

                this.obtenerMarcaciones()
            },
            error => this.errorMessage = <any>error
        );
    }

    public onEdit(dataItem: any): void {
        /*debugger;
        if(dataItem.estado == 'P'){
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }else if(dataItem.estado == 'E'){
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }else if(dataItem.estado == 'A'){
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }else if(dataItem.estado == 'R'){
            this.empleadoService.storeDataPermiso(dataItem);
            this._router.navigate(['/personal/administrarPermiso']);
        }*/
        
    }

    private obtenerMarcaciones(): void {

        if(this.marcaciones.length>0){
            this.isEmpty=false;
            this.gridView = {
                data: this.marcaciones.slice(this.skip, this.skip + this.pageSize),
                total: this.marcaciones.length
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
        this.obtenerMarcaciones();

    }


    ngOnInit() {
        this.getUndNegocio();
        this.getEmpleadoEstados();
    }


    private validarValoresSeleccionados() {

        debugger;

        /*if (this.busquedaPermisos.nombreEmpleado === undefined) this.busquedaPermisos.nombreEmpleado = '';

        if (this.busquedaPermisos.jefeInmediato === undefined) this.busquedaPermisos.jefeInmediato = '';
        */


        /*(this.estadosSelect === undefined || this.estadosSelect == null) ? this.busquedaPermisos.estado = ''
            : this.busquedaPermisos.estado = this.estadosSelect.codigo;
*/
        if (this.busquedaMarcaciones.desde === undefined) this.busquedaMarcaciones.desde = '';
        if (this.busquedaMarcaciones.hasta === undefined) this.busquedaMarcaciones.hasta = '';

        this.unidadNegocioSelect === undefined ? this.busquedaMarcaciones.unidadNegocio = ''
            : this.busquedaMarcaciones.unidadNegocio = (this.unidadNegocioSelect.idUnidadDeNegocio == null ?  '': this.unidadNegocioSelect.idUnidadDeNegocio.toString());

        this.departamentoSelect === undefined ? this.busquedaMarcaciones.departamento = ''
            : this.busquedaMarcaciones.departamento = (this.departamentoSelect.idDepartamentoArea == null ?  '': this.departamentoSelect.idDepartamentoArea.toString());

        this.proyectoSelect === undefined ? this.busquedaMarcaciones.proyecto = ''
            : this.busquedaMarcaciones.proyecto = (this.proyectoSelect.idProyecto == null ?  '': this.proyectoSelect.idProyecto.toString());

    }

    onChangeFechaDesde(value){
        this.busquedaMarcaciones.desde = value;
    }

    onChangeFechaHasta(value){
        this.busquedaMarcaciones.hasta = value;
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