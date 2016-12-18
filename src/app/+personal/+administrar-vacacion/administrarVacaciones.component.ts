import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

import {PermisoService} from "../../+autogestion/+solicitar-permiso/permiso.service";
import {PermisoEmpleado} from "../../+personal/+empleado/permisoEmpleado";
import {HistoriaLaboralDto} from "../../+personal/+historiaLaboral/historiaLaboralDto";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {Empleado} from "../../+personal/+empleado/empleado";
import {AgendarVacacion} from "../../+autogestion/+agendar-vacaciones/agendarVacacionDto";
import {Notificacion} from "../../+personal/+empleado/notificacion";

import {EmpleadoService} from "../+empleado/empleado.service";
import {RolDto} from "../+empleado/RolDto";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {EnumEstados} from "../../+enums/EnumEstados";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";

declare var $: any;

@Component({
	selector: 'adminVacacioneses',
	templateUrl: 'administrarVacaciones.component.html'
})

export class AdministrarVacacionesComponent implements OnInit {
	private historiaLaboralActual: HistoriaLaboralDto = new HistoriaLaboralDto();
	private periodoEmpleadoActual: PeriodoEmpleado = new PeriodoEmpleado();
	private adminVacaciones: AgendarVacacion = new AgendarVacacion();
	private diasDisponiblesVacacion: AgendarVacacion = new AgendarVacacion();
	private adminVacacionesPeriodo: AgendarVacacion = new AgendarVacacion();
	private empleado:Empleado = new Empleado();

	//opcional
	private permisoEmpleado:PermisoEmpleado = new PermisoEmpleado();

	private errorMessage:string;
	public mensaje:string;

	private isEnviado:boolean=true;
	private isJefeEnviado:boolean=true;
	private rolName: Array<RolDto> = [];
	public mostrarBoton:boolean;

	localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

	constructor(private route:ActivatedRoute,
				private permisoService:PermisoService,
				private empleadoService: EmpleadoService,
				private location: Location,
				private _router: Router) {

		this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();

		this.adminVacaciones = this.empleadoService.retrieveDataVacaciones();
		this.empleado.idEmpleado = this.adminVacaciones.idEmpleado;


		this.obtenerHistoriaLaboralActual(this.empleado);
		this.obtenerDiasDisponibles(this.empleado);
		this.obtenerPeriodoActual(this.empleado);

		/**VALIDACIONES */
		if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.GEREN]){
			this.localStorageValue.typeRead = true;
			if(this.adminVacaciones.estado == EnumEstados[EnumEstados.P]){
				this.localStorageValue.mostrarBoton=false;
			}else if(this.adminVacaciones.estado == 'E'){
				this.localStorageValue.mostrarBoton=true;
			}else if(this.adminVacaciones.estado == 'A'){
				this.localStorageValue.mostrarBoton=false;
			}else if(this.adminVacaciones.estado == 'R'){
				this.localStorageValue.mostrarBoton=false;
			}
		}else{
			this.localStorageValue.typeRead = true;
			this.localStorageValue.mostrarBoton=false;
		}


	}

	ngOnInit() {

	}
	onRegistrarVacaciones(){
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
		this.adminVacaciones.idEmpleado = this.empleado.idEmpleado;
		this.empleadoService.registrarVacaciones(this.adminVacaciones).then(
	      data => {
	        this.navegarDashboard(data);
	      }
	      );
	}
	onRegresarBusquedaVacaciones(){
		this.location.back();
	}
	onActualizarVacacionEmpleado(){
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
		this.adminVacaciones.idEmpleado = this.empleado.idEmpleado;
		this.adminVacaciones.diasVacacionesDisponibles = this.diasDisponiblesVacacion.diasVacacionesDisponibles;
		this.empleadoService.actualizarVacacionEmpleado(this.adminVacaciones).subscribe(
			data => {
				this.navegarDashboard(data);
			},
			error => console.log(error)
		);
	}
	onEnviarVacacionEmpleado(){
		this.empleadoService.enviarVacacionEmpleado(this.adminVacaciones).subscribe(
            data => {
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
	}
	onEliminarVacacionEmpleado(){
		debugger;

        this.empleadoService.eliminarVacacionEmpleado(this.adminVacaciones).subscribe(
            data => {
                this.goBack();
            },
            error => this.errorMessage = <any>error
        );
	}
	onDevolverVacacionEmpleado(){
		this.empleadoService.devolverVacacionEmpleado(this.adminVacaciones).subscribe(
            data => {
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
	}
	onAprobarVacacionEmpleado(){
		this.empleadoService.aprobarVacacionEmpleado(this.adminVacaciones).subscribe(
            data => {
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
	}
	onRechazarVacacionEmpleado(){
		this.empleadoService.rechazarVacacionEmpleado(this.adminVacaciones).subscribe(
            data => {
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
	}

	/* VALIDACIONES */
	validarRequerido():boolean{
	    debugger;
	    let validacion = false;
	    if(this.adminVacaciones.fechaInicio === undefined || this.adminVacaciones.fechaInicio == null || this.adminVacaciones.fechaInicio=='' ){
	      $('#fechaInicio').addClass('invalid').removeClass('required');
	      $('#fechaInicio').parent().addClass('state-error').removeClass('state-success');
	      validacion = true;
	    }
	    if(this.adminVacaciones.fechaFin === undefined || this.adminVacaciones.fechaFin == null || this.adminVacaciones.fechaFin=='' ){
	      $('#fechaFin').addClass('invalid').removeClass('required');
	      $('#fechaFin').parent().addClass('state-error').removeClass('state-success');
	      validacion = true;
	    }
	    
	
	    return validacion;
  	}
	
	/* SERVICIOS REST */
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

	private obtenerDiasDisponibles(empleado: Empleado) {
		this.permisoService.obtenerDiasDisponiblesDeVacacion(empleado).subscribe(
            diasDisponibles => this.diasDisponiblesVacacion = diasDisponibles,
            error =>  this.errorMessage = <any>error);
	}

	private obtenerPeriodoActual(empleado: Empleado) {
		this.permisoService.obtenerPeriodoActual(empleado).subscribe(
            periodoEmpleado => this.adminVacacionesPeriodo = periodoEmpleado,
            error =>  this.errorMessage = <any>error);
	}

	/* DETECTED CHANGE */
	onChangeFechaInicio(value){
		debugger;
        this.adminVacaciones.fechaInicio = value;
        $('#fechaInicio').removeClass('state-error');
        $('#fechaInicio').parent().removeClass('state-error');
		if(this.adminVacaciones.fechaFin != null){
			this.onDiasCalendarios();	
		}
		
    }
	onChangeFechaFin(value){
        this.adminVacaciones.fechaFin = value;
        $('#fechaFin').removeClass('state-error');
        $('#fechaFin').parent().removeClass('state-error');
		this.onDiasCalendarios();
		
    }
	goBack(): void {
    
        this.location.back();
    }

	/* METHOD CALCULATE BUSINESS DAY AND WORKING DAY */
	onDayMommentJS(){
		var result = 0;

		debugger;
	    let cadenaFInicio:string[] = this.adminVacaciones.fechaInicio.split('/');
	    let cadenaFFin:string[] = this.adminVacaciones.fechaFin.split('/');
	
	    let fechaIni:Date= new Date( parseInt(cadenaFInicio[2]),parseInt(cadenaFInicio[1])-1,parseInt(cadenaFInicio[0]));
	
	    let fechaFin:Date= new Date( parseInt(cadenaFFin[2]),parseInt(cadenaFFin[1])-1,parseInt(cadenaFFin[0]));

	  fechaIni.setHours(0,0,0,1);  // Start just after midnight
      fechaFin.setHours(23,59,59,999);  // End just before midnight

	    var currentDate = fechaIni;
	    while (currentDate <= fechaFin)  {  
	
	        var weekDay = currentDate.getDay();
	        if(weekDay != 0 && weekDay != 6)
	            result++;
	
	         currentDate.setDate(currentDate.getDate()+1); 
	    }
		console.log('>>>>>>Working day'+result);
	    return result;
	}

	
	onDiasCalendarios(){

    debugger;
    let cadenaFInicio:string[] = this.adminVacaciones.fechaInicio.split('/');
    let cadenaFFin:string[] = this.adminVacaciones.fechaFin.split('/');

    let fechaIni:Date= new Date( parseInt(cadenaFInicio[2]),parseInt(cadenaFInicio[1])-1,parseInt(cadenaFInicio[0]));

    let fechaFin:Date= new Date( parseInt(cadenaFFin[2]),parseInt(cadenaFFin[1])-1,parseInt(cadenaFFin[0]));
    
    let interval= fechaFin.getTime()- fechaIni.getTime();

    let diasCalendariosVal:number = interval / (1000 * 60 * 60 * 24);
    
    
      let millisecondsPerDay = 86400 * 1000; // Day in milliseconds
      fechaIni.setHours(0,0,0,1);  // Start just after midnight
      fechaFin.setHours(23,59,59,999);  // End just before midnight
      let diff = fechaFin.getTime() - fechaIni.getTime();  // Milliseconds between datetime objects    
      let dias = Math.ceil(diff / millisecondsPerDay);
	
	this.adminVacaciones.diasCalendarios = dias;
	console.log('>>>>>>>>DAY CALENDAR'+dias);

	//Dias Habiles
    //Restar dos semanas por cada semana
    let weeks = Math.floor(dias / 7);
	
    //dias = dias - (weeks * 2);
	dias -= weeks * 2;
    
    //Manejar casos especiales
    let startDay = fechaIni.getDay();
    let endDay = fechaFin.getDay();
    //Eliminar el fin de semana no eliminado previamente
    if(startDay - endDay > 1)
      //dias = dias -2;
	  dias -= 2;
    
    //Eliminar el día de inicio si el período comienza el domingo 
    //pero finaliza antes del sábado
    if(startDay == 0 && endDay != 6)
      dias = dias -1;
    
    //Eliminar el día final si el período termina el sábado
    //pero empieza después del domingo
    if(endDay == 6 && startDay != 0)
      //dias = dias -1
	  dias--;
	// Remove end day if span ends on Saturday but starts after Sunday
    /*if (endDay == 6 && startDay != 0) {
        dias--;
    }*/

    this.adminVacaciones.diasHabiles = dias;
  }

  /* NOTIFICATION */
  navegarDashboard(data:Notificacion){
        console.log('>>>return  data notification: '+data.mensaje);
        
        if(data.codigo == 1){
          console.log('>>>data codigo 1');
            this.mensaje = data.mensaje;
			this.adminVacaciones = new AgendarVacacion();
			/*this.adminVacaciones.fechaInicio = null;
			this.adminVacaciones.fechaFin = null;
			this.adminVacaciones.diasCalendarios = null;
			this.adminVacaciones.diasHabiles = null;*/
			this.obtenerDiasDisponibles(this.empleado);
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