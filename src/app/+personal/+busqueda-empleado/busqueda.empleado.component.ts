/**
 * Created by josediaz on 28/10/2016.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {GridEditFormComponent} from "./grid.edit.empleados.component";
import {EmpleadoService} from "../+empleado/empleado.service";
import {TablaGeneralDto} from "../+empleado/tablaGeneralDto";
import {UndNegocio} from "../+cargo/undnegocio";
import {CargoService} from "../+cargo/http-empleados-service";
import {DepartamentoArea} from "../+cargo/departamento";
import {Proyecto} from "../+cargo/proyecto";
import {CentroCostoDto} from "../+empleado/centroCostoDto";
import {BusquedaEmpleado} from "./busqueda.empleado";
import {Empleado} from "../+empleado/empleado";
import {ImportEmpleado} from "./importEmpleado";
import {PageChangeEvent, GridDataResult} from "@progress/kendo-angular-grid";
import {Router} from "@angular/router";
import {CompleterData, CompleterService} from "ng2-completer";
import {environment} from "../../../environments/environment";
import {NotificationsService} from "angular2-notifications";
import {RoleNameDto} from "../../+dtos/roleNameDto";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {Subscription} from "rxjs";


declare var $: any;


@Component({
    selector: 'busqueda-empleado',
    templateUrl: 'busqueda.empleado.component.html',
    providers: [CargoService]
})
export class BusquedaEmpleadoComponent implements OnInit {

    busy: Subscription;

    public undnegocios: UndNegocio[];
    public proyectos: Proyecto[];
    public departamentos: DepartamentoArea[];
    public tiposDocumento: TablaGeneralDto[];
    public centrosCosto: CentroCostoDto[];

    errorMessage: string;


    //import empleados
    public dataItem: ImportEmpleado;

    public tipoDocumentoSelect: TablaGeneralDto;
    public unidadNegocioSelect: UndNegocio;
    public departamentoSelect: DepartamentoArea;
    public proyectoSelect: Proyecto;
    public centroCostoSelect: CentroCostoDto;
    public estadosSelect: TablaGeneralDto;

    public defaultItem: UndNegocio = {idUnidadDeNegocio: null, nombre: 'Todos'};

    public defaultItemCentroCosto: CentroCostoDto = {idCentroCosto: null, nombre: 'Todos'};

    public defaultItemTablaGeneral: TablaGeneralDto = {codigo: null, nombre: 'Todos'};

    public defaultItemDepartamento: DepartamentoArea = {
        idDepartamentoArea: null,
        idUnidadDeNegocio: null,
        nombre: 'Todos'
    };
    public defaultItemProyecto: Proyecto = {idProyecto: null, nombre: 'Todos'};

    public isEnableUndNegocio: boolean;
    public isEnableDpto: boolean;
    public isEnableProyectos: boolean;

    public noItems: boolean = false;

    busquedaEmpleado: BusquedaEmpleado = new BusquedaEmpleado();

    public empleados: Empleado[] = [];

    public estados: TablaGeneralDto[];

    public isSearch: boolean = false;

    public isEmpty: boolean = true;

    uploadSaveUrl: string = "saveUrl";
    uploadRemoveUrl: string = "removeUrl";

    private dataServiceJefeInmediato: CompleterData;

    localhost: String = environment.backend;
    port: String = environment.port;
    public mostrarBoton: boolean;
    public mostrarBotonJefe: boolean;
    private rolNames: Array<RoleNameDto> = [];

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

    @ViewChild(GridEditFormComponent) protected editFormComponent: GridEditFormComponent;

    constructor(
                private _service: NotificationsService,
                private empleadoService: EmpleadoService,
                private cargoService: CargoService,
                private _router: Router,
                private completerService: CompleterService) {
        this.dataServiceJefeInmediato = completerService.remote('http://' + this.localhost + ':' + this.port + '/permisoEmpleado/autocompleteEmpleado?search=', 'nombreEmpleado', 'nombreEmpleado');
        this.rolNames = JSON.parse(localStorage.getItem("rolName") || '{}');

        for (let rolVal of this.rolNames[0].rolNames) {

            if (rolVal.rolName == EnumRolEmpleado[EnumRolEmpleado.RHANA] || rolVal.rolName == EnumRolEmpleado[EnumRolEmpleado.ADMIN]) {
                this.mostrarBoton = true;
            }
            if (rolVal.rolName == EnumRolEmpleado[EnumRolEmpleado.GEREN]) {
                this.mostrarBotonJefe = true;
            }
        }
    }

    selectJefeInmediato(e) {
        if (e != null)
            this.busquedaEmpleado.idJefeInmediato = e.originalObject.idEmpleado;
        else
            this.busquedaEmpleado.idJefeInmediato = null;
    }

    onSubmit() {

        this.validarValoresSeleccionados();

        this.busy = this.empleadoService.buscarEmpleado(this.busquedaEmpleado).subscribe(
            data => {
                this.isSearch = true;
                this.empleados = data;
                this.skip = 0;

                this.obtenerEmpleados();

            },
            error => {
                this.errorMessage = <any>error;

            }
        );

    }

    onLimpiar() {

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

    }

    private validarValoresSeleccionados() {

        if (this.busquedaEmpleado.codigo === undefined) this.busquedaEmpleado.codigo = '';
        if (this.busquedaEmpleado.nombres === undefined) this.busquedaEmpleado.nombres = '';
        if (this.busquedaEmpleado.apePaterno === undefined) this.busquedaEmpleado.apePaterno = '';
        if (this.busquedaEmpleado.apeMaterno === undefined) this.busquedaEmpleado.apeMaterno = '';
        if (this.busquedaEmpleado.numeroDocumento === undefined) this.busquedaEmpleado.numeroDocumento = '';
        if (this.busquedaEmpleado.jefeInmediato === undefined) this.busquedaEmpleado.jefeInmediato = '';
        if (this.busquedaEmpleado.correoElectronico === undefined) this.busquedaEmpleado.correoElectronico = '';

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
    }

    private gridView: GridDataResult;
    private pageSize: number = 10;
    private data: Object[];
    private skip: number = 0;

    ngOnInit() {

        this.getTiposDocumento();
        this.getUndNegocio();
        this.obtenerCentrosCosto();
        this.getEmpleadoEstados();

    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.obtenerEmpleados();
    }

    private obtenerEmpleados(): void {

        if (this.empleados.length > 0) {
            this.isEmpty = false;
            this.gridView = {
                data: this.empleados.slice(this.skip, this.skip + this.pageSize),
                total: this.empleados.length
            };
        } else {
            this.isEmpty = true;
            this.gridView = {
                data: [],
                total: 0
            };
        }

    }

    public onEdit(dataItem: any): void {
        this.empleadoService.storeSessionStorage('entityBusquedaEmpleado',dataItem);
        this._router.navigate(['/personal/empleado']);
    }

    public onView(dataItem: any): void {
        debugger;
        this.empleadoService.storeSessionStorage('entityBusquedaEmpleado',dataItem);
        this._router.navigate(['/personal/verEmpleado']);
    }

    public onCancel(): void {
        this.dataItem = undefined;
    }

    /* Fill combos */
    private getEmpleadoEstados() {
        this.empleadoService.completarComboBox('obtenerEmpleadoEstados').subscribe(
            tablaGeneralDto => this.cargarEstado(tablaGeneralDto),
            error => this.errorMessage = <any>error);
    }

    cargarEstado(estados:TablaGeneralDto[]){
        this.estados = estados;
        this.estadosSelect = {codigo:'A', nombre:'Alta'};
    }

    private obtenerCentrosCosto() {
        this.empleadoService.obtenerComboCentroCosto().subscribe(
            centroCostoDto => this.centrosCosto = centroCostoDto,
            error => this.errorMessage = <any>error);
    }


    private getTiposDocumento() {
        this.empleadoService.completarComboBox('obtenerTipoDocumento').subscribe(
            tablaGeneralDto => this.tiposDocumento = tablaGeneralDto,
            error => this.errorMessage = <any>error);
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


    actualizarDpto(value): void {
        //this.isEnableUndNegocio = false;
        let codigo: any = value;
        this.departamentoSelect = this.defaultItemDepartamento;
        if (value == null) {

            this.departamentos = null;
        } else {
            this.obtenerDepartamentos(codigo);
        }
        //this.isEnableProyectos = true;
        this.proyectoSelect = this.defaultItemProyecto;
        this.proyectos = null;


    }

    actualizarProyecto(value): void {
        let codigo: any = value;
        this.proyectoSelect = this.defaultItemProyecto;
        this.obtenerProyecto(codigo);

    }

    exportarEmpleados() {
        if (this.empleados.length == 0) {
            this.noItems = true;
        } else {

            this.noItems = false;

            if ($("#export_file").length > 0) {
                $("#export_file").remove();
            }
            if ($("#export_file").length === 0) {

                var iframe = $("<iframe src='' name='export_file' id='export_file'></iframe>");
                iframe.appendTo("body");

                var form = $("<form action='http://" + this.localhost + ":" + this.port + "/empleado/exportarEmpleados' method='post' target='export_file'></form>");
                form.append($("<input type='hidden' name='nombres' id='nombres' />").attr("value", this.busquedaEmpleado.nombres));
                form.append($("<input type='hidden' name='apellidoPaterno' id='apellidoPaterno' />").attr("value", this.busquedaEmpleado.apePaterno));
                form.append($("<input type='hidden' name='apellidoMaterno' id='apellidoMaterno' />").attr("value", this.busquedaEmpleado.apeMaterno));
                form.append($("<input type='hidden' name='codigo' id='codigo' />").attr("value", this.busquedaEmpleado.codigo));
                form.append($("<input type='hidden' name='tipoDocumento' id='tipoDocumento' />").attr("value", this.busquedaEmpleado.tipoDocumento));
                form.append($("<input type='hidden' name='numeroDocumento' id='numeroDocumento' />").attr("value", this.busquedaEmpleado.numeroDocumento));
                form.append($("<input type='hidden' name='unidadNegocio' id='unidadNegocio' />").attr("value", this.busquedaEmpleado.unidadNegocio));
                form.append($("<input type='hidden' name='departamento' id='departamento' />").attr("value", this.busquedaEmpleado.departamento));
                form.append($("<input type='hidden' name='proyecto' id='proyecto' />").attr("value", this.busquedaEmpleado.proyecto));
                form.append($("<input type='hidden' name='jefeInmediato' id='jefeInmediato' />").attr("value", this.busquedaEmpleado.jefeInmediato));
                form.append($("<input type='hidden' name='centroCosto' id='centroCosto' />").attr("value", this.busquedaEmpleado.centroCosto));
                form.append($("<input type='hidden' name='correoElectronico' id='correoElectronico' />").attr("value", this.busquedaEmpleado.correoElectronico));
                form.append($("<input type='hidden' name='estado' id='estado' />").attr("value", this.busquedaEmpleado.estado));
                form.append($("<input type='hidden' name='isSearch' id='isSearch' />").attr("value", this.isSearch));
                form.append($("<input type='hidden' name='isEmpty' id='isEmpty' />").attr("value", false));
                form.appendTo("body");

                form.submit();
            }

        }
    }

    importar() {

        this.editFormComponent.titulo = "Importar";
        this.editFormComponent.importarArchivoEmpleados();
    }

    altaDeEmpleado() {
        this.empleadoService.storeData(undefined);
        this._router.navigate(['/personal/empleado']);
    }

}