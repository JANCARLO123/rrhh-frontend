import {Component, OnInit, EventEmitter,ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import {EmpleadoService} from "../+empleado/empleado.service";
import {Permisos} from "../+busqueda-empleado/Permisos";

import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {PermisoService} from "../../+autogestion/+solicitar-permiso/permiso.service";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {Empleado} from "../../+personal/+empleado/empleado";

import {isUndefined} from "util";
import {Notificacion} from "../../+personal/+empleado/notificacion";
import {RolDto} from "../+empleado/RolDto";
import {RoleNameDto} from "../../+dtos/roleNameDto";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {EnumEstados} from "../../+enums/EnumEstados";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {HistoriaLaboralDto} from "../+historiaLaboral/historiaLaboralDto";

declare var $: any;

@Component({
  selector: 'sa-adm-permiso',
  templateUrl: 'administrar.permiso.component.html',
  providers: []
})
export class AdministrarPermisoComponent implements OnInit {

  public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};
  public permisos:Permisos= new Permisos();
  private motivos:TablaGeneralDto[];
  private errorMessage:string;
  public mensaje:string;

  private periodoEmpleadoActual: PeriodoEmpleado = new PeriodoEmpleado();
  private empleado:Empleado = new Empleado();

  public isCompensarhoras:boolean=true;

  private historiaLaboralActual: HistoriaLaboralDto = new HistoriaLaboralDto();
  localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

  constructor(private route:ActivatedRoute,
                private empleadoService: EmpleadoService,
                private _router: Router,
                private permisoService:PermisoService,
                private location: Location) {

      this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
      this.permisos = this.empleadoService.retrieveDataPermisos();
      this.empleado.idEmpleado = this.permisos.idEmpleado;
      debugger;
      this.obtenerHistoriaLaboralActual(this.empleado);

      if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.GEREN]){

              if(this.permisos.estado == EnumEstados[EnumEstados.P]){
                  this.localStorageValue.mostrarBotonGeren = false;
                  this.localStorageValue.typeRead = true;
              }else if(this.permisos.estado == EnumEstados[EnumEstados.E]){
                  this.localStorageValue.mostrarBotonGeren = true;
                  this.localStorageValue.typeRead = true;
              }else if(this.permisos.estado == EnumEstados[EnumEstados.A]){
                  this.localStorageValue.mostrarBotonGeren = false;
                  this.localStorageValue.typeRead = true;
              }else if(this.permisos.estado == EnumEstados[EnumEstados.R]){
                  this.localStorageValue.mostrarBotonGeren = false;
                  this.localStorageValue.typeRead = true;
              }
      }

      this.obtenerPeriodoEmpleadoActual(this.empleado);
      this.getMotivosPermiso();

    }

    ngOnInit() {
    }

    private obtenerPeriodoEmpleadoActual(empleado: Empleado) {
        this.permisoService.obtenerPeriodoEmpleadoActual(empleado).subscribe(
            periodoEmpleado => this.periodoEmpleadoActual = periodoEmpleado,
            error =>  this.errorMessage = <any>error);
    }

    private getMotivosPermiso() {
        this.permisoService.completarComboBox('obtenerMotivosPermiso').subscribe(
            tablaGeneralDto => this.motivos = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    cargarMotivo(value){
        if(value == EnumEstados[EnumEstados.P]){
            this.isCompensarhoras=false;
            $('#fechaRecuperacion').removeClass('state-error');
            $('#fechaRecuperacion').parent().removeClass('state-error');

            $('#horaDesdeRecuperacion').removeClass('state-error');
            $('#horaDesdeRecuperacion').parent().removeClass('state-error');

            $('#horaHastaRecuperacion').removeClass('state-error');
            $('#horaHastaRecuperacion').parent().removeClass('state-error');

        }else{
            this.isCompensarhoras=true;            
        }
    }

    onChangeFecha(value){
        this.permisos.fecha = value;
        $('#fechaPermiso').removeClass('state-error');
        $('#fechaPermiso').parent().removeClass('state-error');
    }

    onChangeHoraInicio(value){
        this.permisos.horaInicio = value;
        $('#horaDesde').removeClass('state-error');
        $('#horaDesde').parent().removeClass('state-error');
    }

    onChangeHoraFin(value){
        this.permisos.horaFin = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }

    onChangeFechaRecuperacion(value){
        this.permisos.fechaRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }
    onChangeHoraInicioRecuperacion(value){
        this.permisos.horaInicioRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }

    onChangeHoraFinRecuperacion(value){
        this.permisos.horaFinRecuperacion = value;
        $('#horaHasta').removeClass('state-error');
        $('#horaHasta').parent().removeClass('state-error');
    }

    onActualizarPermisoEmpleado(){
      debugger;
      let fechaAct:Date = new Date();

      this.permisos.periodoEmpleado = this.periodoEmpleadoActual;

      if(this.validarRequerido()){
            this.mensaje = 'Ingrese los campos obligatorios';
            $( '#dialog-message' ).dialog( "open" );
            return;
      }

        let cadena:string[] = this.permisos.fecha.split('/');
        let horaIni:string[] = this.permisos.horaInicio.split(':');
        let horaFin:string[] = this.permisos.horaFin.split(':');

        let fechaIni:Date= new Date( parseInt(cadena[2]),parseInt(cadena[1])-1,parseInt(cadena[0]),parseInt(horaIni[0]),parseInt(horaIni[1]));

        let fechaFin:Date= new Date( parseInt(cadena[2]),parseInt(cadena[1])-1,parseInt(cadena[0]),parseInt(horaFin[0]),parseInt(horaFin[1]));

        let fechaPerm:Date= new Date( parseInt(cadena[2]),parseInt(cadena[1])-1,parseInt(cadena[0]));


        if(fechaPerm<fechaAct){
            this.mensaje = 'La fecha del permiso debe ser mayor a la fecha de hoy.';
            $( '#dialog-message' ).dialog( "open" );
            return;
        }

        if(fechaFin.getTime()<fechaIni.getTime()){
            this.mensaje = 'La hora final del permiso debe ser mayor a la hora inicial del permiso.';
            $( '#dialog-message' ).dialog( "open" );
            return;
        }

        let interval= fechaFin.getTime()- fechaIni.getTime();
        let hours:number = interval / (1000*60*60);
        this.permisos.horas = parseFloat(hours.toFixed(2));

        if( this.permisos.motivo == EnumEstados[EnumEstados.P]){
            if(this.validarRequeridoFechaRecuperacion()){
                this.mensaje = 'Ingrese los campos obligatorios de la Fecha de Recuperacion.';
                $( '#dialog-message' ).dialog( "open" );
                return;
            }

            let cadenaRecuperacion:string[] = this.permisos.fechaRecuperacion.split('/');
            let horaIniRecuperacion:string[] = this.permisos.horaInicioRecuperacion.split(':');
            let horaFinRecuperacion:string[] = this.permisos.horaFinRecuperacion.split(':');

            let fechaIniRecuperacion:Date= new Date( parseInt(cadenaRecuperacion[2]),parseInt(cadenaRecuperacion[1])-1,parseInt(cadenaRecuperacion[0]),parseInt(horaIniRecuperacion[0]),parseInt(horaIniRecuperacion[1]));

            let fechaFinRecuperacion:Date= new Date( parseInt(cadenaRecuperacion[2]),parseInt(cadenaRecuperacion[1])-1,parseInt(cadenaRecuperacion[0]),parseInt(horaFinRecuperacion[0]),parseInt(horaFinRecuperacion[1]));

            let fechaRec:Date= new Date( parseInt(cadenaRecuperacion[2]),parseInt(cadenaRecuperacion[1])-1,parseInt(cadenaRecuperacion[0]));


            if(fechaRec<fechaAct){
                this.mensaje = 'La fecha de recuperacion debe ser mayor a la fecha de hoy.';
                $( '#dialog-message' ).dialog( "open" );
                return;
            }

            if(fechaFinRecuperacion.getTime()<fechaIniRecuperacion.getTime()){
                this.mensaje = 'La hora final de recuperacion debe ser mayor a la hora inicial de recuperacion.';
                $( '#dialog-message' ).dialog( "open" );
                return;
            }
        }
        this.permisoService.actualizarPermisoEmpleado(this.permisos).subscribe(
            data => {
                this.navegarDashboard(data);
            },
            error => console.log(error)

        );
        
    }

    onEnviarPermisoEmpleado(){
        this.permisoService.enviarPermisoEmpleado(this.permisos).subscribe(
            data => {
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
    }

    onRechazarPermisoEmpleado(): void{
        this.permisoService.rechazarPermisoEmpleado(this.permisos).subscribe(
            data => {
                this.navegarDashboard(data);

            },
            error => console.log(error)
        );
    }

    onEliminarPermisoEmpleado(): void {
        debugger;

        this.empleadoService.eliminarPermisoEmpleado(this.permisos).subscribe(
            data => {
                this.goBack();
            },
            error => this.errorMessage = <any>error
        );
    }

    onDevolverPermisoEmpleado(){
        this.permisoService.devolverPermisoEmpleado(this.permisos).subscribe(
            data => {
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
    }

    validarRequerido():boolean{
      debugger;
        let validacion = false;

        if(this.permisos.motivo === undefined || this.permisos.motivo == null || this.permisos.motivo=='' ){
            $('#motivo').addClass('invalid').removeClass('required');
            $('#motivo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if(this.permisos.fecha === undefined || this.permisos.fecha == null || this.permisos.fecha==''){
            $('#fechaPermiso').addClass('invalid').removeClass('required');
            $('#fechaPermiso').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisos.horaInicio === undefined || this.permisos.horaInicio == null || this.permisos.horaInicio==''){
            $('#horaDesde').addClass('invalid').removeClass('required');
            $('#horaDesde').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisos.horaFin === undefined || this.permisos.horaFin == null || this.permisos.horaFin==''){
            $('#horaHasta').addClass('invalid').removeClass('required');
            $('#horaHasta').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        return validacion;
    }

    validarRequeridoFechaRecuperacion():boolean{
        let validacion = false;

        if(this.permisos.fechaRecuperacion === undefined || this.permisos.fechaRecuperacion == null || this.permisos.fechaRecuperacion==''){
            $('#fechaRecuperacion').addClass('invalid').removeClass('required');
            $('#fechaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisos.horaInicioRecuperacion === undefined || this.permisos.horaInicioRecuperacion == null || this.permisos.horaInicioRecuperacion==''){
            $('#horaDesdeRecuperacion').addClass('invalid').removeClass('required');
            $('#horaDesdeRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.permisos.horaFinRecuperacion === undefined || this.permisos.horaFinRecuperacion == null || this.permisos.horaFinRecuperacion==''){
            $('#horaHastaRecuperacion').addClass('invalid').removeClass('required');
            $('#horaHastaRecuperacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        return validacion;
    }

    navegarDashboard(data:Notificacion){
        console.log('>>>return  data notification: '+data.mensaje);
        
        if(data.codigo == 1){
            this.mensaje = data.mensaje;
            this.permisos = new Permisos();
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
            $( '#dialog-message' ).dialog( "open" );
        }

    }

    cerrarDialog(){
        this.mensaje = '';
        $( '#dialog-message' ).dialog( "close" );
    }

    onRegresarBusquedaEmpleado(){
      this.location.back();
    }

    private obtenerHistoriaLaboralActual(empleado: Empleado) {
        this.permisoService.obtenerHistoriaLaboralActual(empleado).subscribe(
            historiaLaboral => this.historiaLaboralActual = historiaLaboral,
            error =>  this.errorMessage = <any>error);
    }
    
    goBack(): void {
    
        this.location.back();
    }



}
