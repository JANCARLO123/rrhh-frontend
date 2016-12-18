import {Component, OnInit} from '@angular/core';
import {PermisoEmpleado} from "../../+personal/+empleado/permisoEmpleado";
import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {PermisoService} from "./permiso.service";
import {Empleado} from "../../+personal/+empleado/empleado";
import {HistoriaLaboralDto} from "../../+personal/+historiaLaboral/historiaLaboralDto";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {Notificacion} from "../../+personal/+empleado/notificacion";

import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {EnumEstados} from "../../+enums/EnumEstados";
import {NotificationsService} from "angular2-notifications";

declare var $: any;

@Component({
    selector: 'sa-permiso',
    templateUrl: 'permiso.component.html',
    providers: []
})
export class PermisoComponent implements OnInit {

    public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};

    private motivos:TablaGeneralDto[];

    private permisoEmpleado:PermisoEmpleado = new PermisoEmpleado();

    private isCompensarhoras:boolean=true;

    private errorMessage:string;

    private empleado:Empleado = new Empleado();

    private historiaLaboralActual: HistoriaLaboralDto = new HistoriaLaboralDto();
    private periodoEmpleadoActual: PeriodoEmpleado = new PeriodoEmpleado();

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

    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

    constructor(private _service: NotificationsService,
                private empleadoService: EmpleadoService,
                private permisoService:PermisoService) {

        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
        this.empleado.idEmpleado = this.localStorageValue.idEmpleado;


        //historia laboral
        this.obtenerHistoriaLaboralActual(this.empleado);
        this.obtenerPeriodoEmpleadoActual(this.empleado);
        //periodo

        this.getMotivosPermiso();
    }

    ngOnInit() {
    }

    private getMotivosPermiso() {
        this.permisoService.completarComboBox('obtenerMotivosPermiso').subscribe(
            tablaGeneralDto => this.motivos = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerHistoriaLaboralActual(empleado: Empleado) {
        this.permisoService.obtenerHistoriaLaboralActual(empleado).subscribe(
            historiaLaboral => this.historiaLaboralActual = historiaLaboral,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerPeriodoEmpleadoActual(empleado: Empleado) {
        this.permisoService.obtenerPeriodoEmpleadoActual(empleado).subscribe(
            periodoEmpleado => this.periodoEmpleadoActual = periodoEmpleado,
            error =>  this.errorMessage = <any>error);
    }


    cargarMotivo(value){
        $('#motivo').css('border','none');
        if(value == EnumEstados[EnumEstados.P]){
            this.isCompensarhoras=false;

        }else{
            this.isCompensarhoras=true;
            this.permisoEmpleado.fechaRecuperacion=undefined;
            this.permisoEmpleado.horaInicioRecuperacion=undefined;
            this.permisoEmpleado.horaFinRecuperacion=undefined;

            $('#fechaRecuperacion').removeClass('state-error');
            $('#fechaRecuperacion').parent().removeClass('state-error');

            $('#horaDesdeRecuperacion').removeClass('state-error');
            $('#horaDesdeRecuperacion').parent().removeClass('state-error');

            $('#horaHastaRecuperacion').removeClass('state-error');
            $('#horaHastaRecuperacion').parent().removeClass('state-error');
        }
    }

    onChangeFecha(value){
        this.permisoEmpleado.fecha = value;
        $('#fechaPermiso').removeClass('state-error');
        $('#fechaPermiso').parent().removeClass('state-error');
    }

    onChangeHoraInicio(value){
        this.permisoEmpleado.horaInicio = value;
        $('#horaDesde').removeClass('state-error');
        $('#horaDesde').parent().removeClass('state-error');
    }

    onChangeHoraFin(value){
        this.permisoEmpleado.horaFin = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }

    onChangeFechaRecuperacion(value){
        this.permisoEmpleado.fechaRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }

    onChangeHoraInicioRecuperacion(value){
        this.permisoEmpleado.horaInicioRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }

    onChangeHoraFinRecuperacion(value){
        this.permisoEmpleado.horaFinRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }

    onRegistrarPermisoEmpleado(){

        let fechaAct:Date = new Date();

        this.permisoEmpleado.periodoEmpleado = this.periodoEmpleadoActual;

        if(this.validarRequerido()){
            this._service.error("Error", 'Ingrese los campos obligatorios.');
            return;
        }

        let cadena:string[] = this.permisoEmpleado.fecha.split('/');
        let horaIni:string[] = this.permisoEmpleado.horaInicio.split(':');
        let horaFin:string[] = this.permisoEmpleado.horaFin.split(':');

        let fechaIni:Date= new Date( parseInt(cadena[2]),parseInt(cadena[1])-1,parseInt(cadena[0]),parseInt(horaIni[0]),parseInt(horaIni[1]));

        let fechaFin:Date= new Date( parseInt(cadena[2]),parseInt(cadena[1])-1,parseInt(cadena[0]),parseInt(horaFin[0]),parseInt(horaFin[1]));

        let fechaPerm:Date= new Date( parseInt(cadena[2]),parseInt(cadena[1])-1,parseInt(cadena[0]));


        if(fechaPerm<fechaAct){
            this._service.error("Error", 'La fecha del permiso debe ser mayor a la fecha de hoy.');
            return;
        }

        if(fechaFin.getTime()<fechaIni.getTime()){
            this._service.error("Error", 'La hora final del permiso debe ser mayor a la hora inicial del permiso.');
            return;
        }

        let interval= fechaFin.getTime()- fechaIni.getTime();
        let hours:number = interval / (1000*60*60);
        this.permisoEmpleado.horas = parseFloat(hours.toFixed(2));

        if( this.permisoEmpleado.motivo == 'P'){

            if(this.validarRequeridoFechaRecuperacion()){
                this._service.error("Error", 'Ingrese los campos obligatorios de la Fecha de Recuperacion.');
                return;
            }

            let cadenaRecuperacion:string[] = this.permisoEmpleado.fechaRecuperacion.split('/');
            let horaIniRecuperacion:string[] = this.permisoEmpleado.horaInicioRecuperacion.split(':');
            let horaFinRecuperacion:string[] = this.permisoEmpleado.horaFinRecuperacion.split(':');

            let fechaIniRecuperacion:Date= new Date( parseInt(cadenaRecuperacion[2]),parseInt(cadenaRecuperacion[1])-1,parseInt(cadenaRecuperacion[0]),parseInt(horaIniRecuperacion[0]),parseInt(horaIniRecuperacion[1]));

            let fechaFinRecuperacion:Date= new Date( parseInt(cadenaRecuperacion[2]),parseInt(cadenaRecuperacion[1])-1,parseInt(cadenaRecuperacion[0]),parseInt(horaFinRecuperacion[0]),parseInt(horaFinRecuperacion[1]));

            let fechaRec:Date= new Date( parseInt(cadenaRecuperacion[2]),parseInt(cadenaRecuperacion[1])-1,parseInt(cadenaRecuperacion[0]));


            if(fechaRec<fechaAct){
                this._service.error("Error", 'La fecha de recuperacion debe ser mayor a la fecha de hoy.');
                return;
            }

            if(fechaFinRecuperacion.getTime()<fechaIniRecuperacion.getTime()){
                this._service.error("Error", 'La hora final de recuperacion debe ser mayor a la hora inicial de recuperacion.');
                return;
            }

        }

        this.permisoService.registrarPermisoEmpleado(this.permisoEmpleado).subscribe(
            data => {
                this.navegarDashboard(data);

            },
            error => console.log(error)
        );

    }

    public mensaje:string;

    navegarDashboard(data:Notificacion){
        if(data.codigo == 1){
            this.mensaje = data.mensaje;
            this.permisoEmpleado = new PermisoEmpleado();
            this._service.success("Correcto", data.mensaje);
        }

        else if(data.codigo == 0){
            this._service.error("Error", data.mensaje);
            return;
        }

    }

    cerrarDialog(){
        this.mensaje = '';
        $( '#dialog-message' ).dialog( "close" );
    }

    validarRequerido():boolean{
        debugger;
        let validacion = false;

        if(this.permisoEmpleado.motivo === undefined || this.permisoEmpleado.motivo == null || this.permisoEmpleado.motivo=='' ){
            $('#motivo').addClass('invalid').removeClass('required');
            $('#motivo').parent().addClass('state-error').removeClass('state-success');
            $('#motivo').css('border','2px solid red');
            validacion = true;
        }
        if(this.permisoEmpleado.fecha === undefined || this.permisoEmpleado.fecha == null || this.permisoEmpleado.fecha==''){
            $('#fechaPermiso').addClass('invalid').removeClass('required');
            $('#fechaPermiso').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisoEmpleado.horaInicio === undefined || this.permisoEmpleado.horaInicio == null || this.permisoEmpleado.horaInicio==''){
            $('#horaDesde').addClass('invalid').removeClass('required');
            $('#horaDesde').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisoEmpleado.horaFin === undefined || this.permisoEmpleado.horaFin == null || this.permisoEmpleado.horaFin==''){
            $('#horaHasta').addClass('invalid').removeClass('required');
            $('#horaHasta').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        return validacion;
    }

    validarRequeridoFechaRecuperacion():boolean{
        let validacion = false;

        if(this.permisoEmpleado.fechaRecuperacion === undefined || this.permisoEmpleado.fechaRecuperacion == null || this.permisoEmpleado.fechaRecuperacion==''){
            $('#fechaRecuperacion').addClass('invalid').removeClass('required');
            $('#fechaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisoEmpleado.horaInicioRecuperacion === undefined || this.permisoEmpleado.horaInicioRecuperacion == null || this.permisoEmpleado.horaInicioRecuperacion==''){
            $('#horaDesdeRecuperacion').addClass('invalid').removeClass('required');
            $('#horaDesdeRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisoEmpleado.horaFinRecuperacion === undefined || this.permisoEmpleado.horaFinRecuperacion == null || this.permisoEmpleado.horaFinRecuperacion==''){
            $('#horaHastaRecuperacion').addClass('invalid').removeClass('required');
            $('#horaHastaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        return validacion;
    }
}
