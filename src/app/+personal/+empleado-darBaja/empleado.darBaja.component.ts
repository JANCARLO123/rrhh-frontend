import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {TablaGeneralDto} from "../+empleado/tablaGeneralDto";
import {Empleado} from "../+empleado/empleado";
import {SuccessEvent, FileValidation, UploadLocalization} from "@progress/kendo-angular-upload";
import {CargoService} from "../+cargo/http-empleados-service";
import {EmpleadoService} from "../+empleado/empleado.service";
import {EquipoEntregado} from "../+empleado/equipoEntregado";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Adjunto} from "../+empleado/adjunto";
import {Notificacion} from "../+empleado/notificacion";
import {DocumentoEmpleado} from "../+empleado/documentoEmpleado";
import {JwtHelper} from "angular2-jwt";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {User} from "../../+auth/_models/usuario";
declare var $: any;

/**
 * Created by josediaz on 8/11/2016.
 */

@Component({
    selector: 'darBaja',
    templateUrl: 'empleado.darBaja.component.html',
    providers: [ CargoService]
})
export class DarbajaComponent implements OnInit {

    public empleadoDarBaja: Empleado = new Empleado();
    public idEmpleado:Empleado= new Empleado();
    public motivoRenunciaSelect: TablaGeneralDto;
    public motivoRenuncia:TablaGeneralDto[];
    equiposPendientesDevo: EquipoEntregado[];
    public defaultItemTablaGeneral: TablaGeneralDto = {codigo: null, nombre: 'Todos'};
    public mensaje: string;
    public errorMessage: string;
    public mostrarBoton:boolean;
    public showWidget: boolean;

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<any> = new EventEmitter();

    nombreDocumento:string;
    contenidoArchivo:string;
    nombreArchivo:string;
    contentTypeArchivo:string;

    private view: Array<DocumentoEmpleado>=[];

    uploadLocalization: UploadLocalization = {
        select: "Cargar"
    }
    localhost:  String = environment.backend;
    port: String = environment.port;
    public uploadSaveUrl:string = 'http://'+this.localhost+':'+ this.port +'/empleado/cargarArchivoDocumento';
    public uploadRemoveUrl:string = 'http://'+this.localhost+':'+ this.port +'/empleado/eliminarArchivoDocumento';

    public uploadValidation: FileValidation = {
        allowedExtensions:[".doc",".docx",".pdf",".xlsx",".xls"]
    };
    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();
    jwtHelper: JwtHelper = new JwtHelper();
    private currentUser: User;

    constructor(private empleadoService: EmpleadoService, private cargoService: CargoService,  private _router: Router){

        this.nombreDocumento = "";
        this.contenidoArchivo = "";
        this.nombreArchivo = "";
        this.contentTypeArchivo = "";
        debugger;
        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
        this.idEmpleado = JSON.parse(sessionStorage.getItem("darBajaEmpleadoSessionData") || '{}');

        var token = localStorage.getItem('currentUser');
        console.log(this.jwtHelper.decodeToken(token));
        if(token) {
            var decoded = this.jwtHelper.decodeToken(token);
            var body = $('#scopes');
            decoded.scopes.forEach(function(item) {
                body.append('<li>' + item + '</li>');
                console.log('Roles>:' +item);
            });
        }


        if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.RHANA] || this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.ADMIN]){
            this.localStorageValue.mostrarBoton = true;
        }

        this.empleadoDarBaja.idEmpleado = this.idEmpleado.idEmpleado;
        
    }

    public onSuccessUpload(event:SuccessEvent){
        let file: Adjunto = event.response.json();
        this.contenidoArchivo = file.content;
        this.nombreArchivo = file.name;
        this.contentTypeArchivo = file.contentType;
    }

    public onEdit(dataItem: any): void {
        debugger;
        if(dataItem.estado == 'P'){
            this.empleadoService.storeDataHorasExtra(dataItem);
            this._router.navigate(['/personal/administrarHorasExtra']);
        }else if(dataItem.estado == 'A'){
            this.empleadoService.storeDataHorasExtra(dataItem);
            this._router.navigate(['/personal/administrarHorasExtra']);
        }else if(dataItem.estado == 'R'){
            this.empleadoService.storeDataHorasExtra(dataItem);
            this._router.navigate(['/personal/administrarHorasExtra']);
        }
        
    }

    ngOnInit() {
        this.getMotivoRenuncia();
        this.getEquiposPendientesDevolucion();
        this.countEquiposPendientes();
    }

    /* VALIDACIONES */
    validarRequerido():boolean{
        debugger;
        let validacion = false;
        if(this.empleadoDarBaja.fechaRenuncia === undefined || this.empleadoDarBaja.fechaRenuncia == null || this.empleadoDarBaja.fechaRenuncia=='' ){
            $('#fechaRenuncia').addClass('invalid').removeClass('required');
            $('#fechaRenuncia').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if(this.empleadoDarBaja.fechaCese === undefined || this.empleadoDarBaja.fechaCese == null || this.empleadoDarBaja.fechaCese=='' ){
            $('#fechaCese').addClass('invalid').removeClass('required');
            $('#fechaCese').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if(this.motivoRenunciaSelect === undefined || this.motivoRenunciaSelect == null ){
            $('#motivoRenuncia').addClass('invalid').removeClass('required');
            $('#motivoRenuncia').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        return validacion;
    }
    private validarValoresSeleccionados() {

        debugger;

        if (this.empleadoDarBaja.fechaRenuncia === undefined) this.empleadoDarBaja.fechaRenuncia = '';
        if (this.empleadoDarBaja.fechaCese === undefined) this.empleadoDarBaja.fechaCese = '';
        

        (this.motivoRenunciaSelect === undefined || this.motivoRenunciaSelect == null) ? this.empleadoDarBaja.motivoRenuncia = ''
            : this.empleadoDarBaja.motivoRenuncia = this.empleadoDarBaja.codigo;

    }

    onChangeFechaRenuncia(value){
        this.empleadoDarBaja.fechaRenuncia = value;
    }

    onChangeFechaCese(value){
        this.empleadoDarBaja.fechaCese = value;
    }

    private getMotivoRenuncia() {
        this.empleadoService.completarComboBox('obtenerMotivoRenuncia').subscribe(
            tablaGeneralDto => this.motivoRenuncia = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    private getEquiposPendientesDevolucion(){
        this.empleadoService.obtenerEquiposPendientesDevolucion(this.empleadoDarBaja.idEmpleado).subscribe(
            equiposPendientesDevo =>

                    this.equiposPendientesDevo = equiposPendientesDevo

            ,
            error => this.errorMessage = <any>error
        );
    }
    private countEquiposPendientes() {
        this.empleadoService.countEquiposPendientes(this.empleadoDarBaja).subscribe(
            data => {
                this.navegarDashboard(data);
            }
        )
    }

    onRegresarVerEmpleado(){
        this._router.navigate(['/personal/verEmpleado']);
    }

    onRegresarBusquedaEmpleado(){
        this._router.navigate(['/personal/busquedaEmpleado']);
    }

    public onRegistrarDarBajaEmpleado(e): void {
        e.preventDefault();
        debugger;

        if(this.validarRequerido()){
            this.mensaje = 'Ingrese los campos obligatorios';
            $( '#dialog-message' ).dialog( {
                modal: true,
                buttons: {
                    Ok: function() {
                        $( this ).dialog( "close" );
                    }
                }
            } );
            return;
        }
        debugger;
        this.empleadoDarBaja.documentos = this.view;
        this.empleadoDarBaja.idEmpleado = this.idEmpleado.idEmpleado;
        this.empleadoService.registrarDarBajaEmpleado(this.empleadoDarBaja).subscribe(
                data => {
                    this.navegarDashboard(data)
                }
        );

    }

    /* NOTIFICATION */
    navegarDashboard(data:Notificacion){

        if(data.codigo == 1){
            this.mensaje = data.mensaje;
            this.showWidget = true;
            this.empleadoDarBaja = new Empleado();
            $( '#dialog-message' ).dialog( {
                modal: true,
                buttons: {
                    Ok: function() {
                        $( this ).dialog( "close" );
                    }
                }
            } );

        }

        else if(data.codigo == 0){
            this.mensaje = data.mensaje;
            $( '#dialog-message' ).dialog( {
                modal: true,
                buttons: {
                    Ok: function() {
                        $( this ).dialog( "close" );
                    }
                }
            } );
        }

    }
    backBusquedaEmpleadoDashboard(data:Notificacion){

        if(data.codigo == 1){
            this.mensaje = data.mensaje;
            this.onRegresarBusquedaEmpleado();
            this.empleadoDarBaja = new Empleado();
            $( '#dialog-message' ).dialog( {
                modal: true,
                buttons: {
                    Ok: function() {
                        $( this ).dialog( "close" );
                    }
                }
            } );

        }

        else if(data.codigo == 0){
            this.mensaje = data.mensaje;
            $( '#dialog-message' ).dialog( {
                modal: true,
                buttons: {
                    Ok: function() {
                        $( this ).dialog( "close" );
                    }
                }
            } );
        }

    }

}