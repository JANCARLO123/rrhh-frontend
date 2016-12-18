import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {PermisoService} from "../+solicitar-permiso/permiso.service";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {HistoriaLaboralDto} from "../../+personal/+historiaLaboral/historiaLaboralDto";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {Empleado} from "../../+personal/+empleado/empleado";
import {AgendarVacacion} from "./agendarVacacionDto";
import {Notificacion} from "../../+personal/+empleado/notificacion";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {NotificationsService} from "angular2-notifications";

declare var $: any;

@Component({
	selector: 'agendarVacaciones',
	templateUrl: 'agendarVacaciones.component.html'
})

export class AgendarVacacionesComponent implements OnInit {
	private historiaLaboralActual: HistoriaLaboralDto = new HistoriaLaboralDto();
	private periodoEmpleadoActual: PeriodoEmpleado = new PeriodoEmpleado();
	private agendarVacacion: AgendarVacacion = new AgendarVacacion();
	private agendarVacacionPeriodo: AgendarVacacion = new AgendarVacacion();
	private empleado:Empleado = new Empleado();

	private errorMessage:string;
	public mensaje:string;
	localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

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

	constructor(private route:ActivatedRoute,
				private _service: NotificationsService,
				private permisoService:PermisoService,
				private empleadoService: EmpleadoService,
				private _router: Router) {


		this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
		this.empleado.idEmpleado = this.localStorageValue.idEmpleado;

		this.obtenerHistoriaLaboralActual(this.empleado);
		this.obtenerDiasDisponibles(this.empleado);
		this.obtenerPeriodoActual(this.empleado);

	}

	ngOnInit() {

	}
	onRegistrarVacaciones(){
		debugger;

	    if(this.validarRequerido()){
	      this._service.error("Error", 'Ingrese los campos obligatorios.');
	      return;
		}
		this.agendarVacacion.idEmpleado = this.empleado.idEmpleado;
		this.empleadoService.registrarVacaciones(this.agendarVacacion).then(
	      data => {
	        this.navegarDashboard(data);
	      }
	      );
	}

	validarRequerido():boolean{
	    debugger;
	    let validacion = false;
	    if(this.agendarVacacion.fechaInicio === undefined || this.agendarVacacion.fechaInicio == null || this.agendarVacacion.fechaInicio=='' ){
	      $('#fechaInicio').addClass('invalid').removeClass('required');
	      $('#fechaInicio').parent().addClass('state-error').removeClass('state-success');
	      validacion = true;
	    }
	    if(this.agendarVacacion.fechaFin === undefined || this.agendarVacacion.fechaFin == null || this.agendarVacacion.fechaFin=='' ){
	      $('#fechaFin').addClass('invalid').removeClass('required');
	      $('#fechaFin').parent().addClass('state-error').removeClass('state-success');
	      validacion = true;
	    }
	    
	
	    return validacion;
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

	private obtenerDiasDisponibles(empleado: Empleado) {
		this.permisoService.obtenerDiasDisponiblesDeVacacion(empleado).subscribe(
            diasDisponibles => this.agendarVacacion = diasDisponibles,
            error =>  this.errorMessage = <any>error);
	}

	private obtenerPeriodoActual(empleado: Empleado) {
		this.permisoService.obtenerPeriodoActual(empleado).subscribe(
            periodoEmpleado => this.agendarVacacionPeriodo = periodoEmpleado,
            error =>  this.errorMessage = <any>error);
	}

	onChangeFechaInicio(value){
		debugger;
        this.agendarVacacion.fechaInicio = value;
        $('#fechaInicio').removeClass('state-error');
        $('#fechaInicio').parent().removeClass('state-error');
		if(this.agendarVacacion.fechaFin != null){
			this.onDiasCalendarios();	
		}
		
    }
	onChangeFechaFin(value){
        this.agendarVacacion.fechaFin = value;
        $('#fechaFin').removeClass('state-error');
        $('#fechaFin').parent().removeClass('state-error');
		this.onDiasCalendarios();
		
    }
	onDayMommentJS(){
		var result = 0;

		debugger;
	    let cadenaFInicio:string[] = this.agendarVacacion.fechaInicio.split('/');
	    let cadenaFFin:string[] = this.agendarVacacion.fechaFin.split('/');
	
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
    let cadenaFInicio:string[] = this.agendarVacacion.fechaInicio.split('/');
    let cadenaFFin:string[] = this.agendarVacacion.fechaFin.split('/');

    let fechaIni:Date= new Date( parseInt(cadenaFInicio[2]),parseInt(cadenaFInicio[1])-1,parseInt(cadenaFInicio[0]));

    let fechaFin:Date= new Date( parseInt(cadenaFFin[2]),parseInt(cadenaFFin[1])-1,parseInt(cadenaFFin[0]));
    
    let interval= fechaFin.getTime()- fechaIni.getTime();

    let diasCalendariosVal:number = interval / (1000 * 60 * 60 * 24);
    
    
      let millisecondsPerDay = 86400 * 1000; // Day in milliseconds
      fechaIni.setHours(0,0,0,1);  // Start just after midnight
      fechaFin.setHours(23,59,59,999);  // End just before midnight
      let diff = fechaFin.getTime() - fechaIni.getTime();  // Milliseconds between datetime objects    
      let dias = Math.ceil(diff / millisecondsPerDay);
	
	this.agendarVacacion.diasCalendarios = dias;
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

    this.agendarVacacion.diasHabiles = dias;
  }

  navegarDashboard(data:Notificacion){
        
        if(data.codigo == 1){
            this.mensaje = data.mensaje;
			this.agendarVacacion = new AgendarVacacion();
			this.obtenerDiasDisponibles(this.empleado);
			this._service.success("Correcto", data.mensaje);
            
        }

        else if(data.codigo == 0){
            this.mensaje = data.mensaje;
			this._service.error("Error", data.mensaje);
        }

  }
}