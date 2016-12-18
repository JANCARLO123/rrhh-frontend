import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

import {PermisoService} from "../../+autogestion/+solicitar-permiso/permiso.service";
import {HistoriaLaboralDto} from "../../+personal/+historiaLaboral/historiaLaboralDto";
import {Empleado} from "../../+personal/+empleado/empleado";
import {Notificacion} from "../../+personal/+empleado/notificacion";

import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {HorasExtrasDto} from "../../+personal/+administrar-horas-extras/horasExtrasDto";

declare var $: any;
import * as moment from 'moment';
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {NotificationsService} from "angular2-notifications";

@Component({
	selector: 'solicitarHorasExtra',
	templateUrl: 'solicitarHorasExtras.component.html'
})

export class SolicitarHorasExtraComponent implements OnInit {

	private historiaLaboralActual: HistoriaLaboralDto = new HistoriaLaboralDto();
	
	private horasExtra: HorasExtrasDto = new HorasExtrasDto();
	private infoAdicional: HorasExtrasDto = new HorasExtrasDto();

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
				private location: Location,
				private _router: Router) {
		this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
		this.empleado.idEmpleado = this.localStorageValue.idEmpleado;

		let fechaAct:Date = new Date();
		let nowFormat = moment(fechaAct).format('DD/MM/YYYY');

		this.horasExtra.fecha = nowFormat;

		this.obtenerHistoriaLaboralActual(this.empleado);
		this.horasExtra.idEmpleado = this.localStorageValue.idEmpleado;
		
	}

	ngOnInit() {

	}

	onRegistrarHorasExtraEmpleado(){
		debugger;

	    if(this.validarRequerido()){
			this._service.error("Error",'Ingrese los campos obligatorios.');
	      return;
		}
		this.horasExtra.idAtendidoPor = this.historiaLaboralActual.idEmpleado;
		this.empleadoService.registrarHorasExtra(this.horasExtra).then(
	      data => {
	        this.navegarDashboard(data);
	      }
	      );
	}
	
	/* VALIDACIONES */
	validarRequerido():boolean{
	    debugger;
	    let validacion = false;

	    if(this.horasExtra.fecha === undefined || this.horasExtra.fecha == null || this.horasExtra.fecha=='' ){
	      $('#fecha').addClass('invalid').removeClass('required');
	      $('#fecha').parent().addClass('state-error').removeClass('state-success');
	      validacion = true;
	    }
	    if(this.horasExtra.horaSalidaSolicitado === undefined || this.horasExtra.horaSalidaSolicitado == null || this.horasExtra.horaSalidaSolicitado=='' ){
	      $('#horaSalidaSolicitado').addClass('invalid').removeClass('required');
	      $('#horaSalidaSolicitado').parent().addClass('state-error').removeClass('state-success');
	      validacion = true;
	    }
	    if(this.horasExtra.motivo === undefined || this.horasExtra.motivo == null || this.horasExtra.motivo=='' ){
	      $('#motivo').addClass('invalid').removeClass('required');
	      $('#motivo').parent().addClass('state-error').removeClass('state-success');
	      validacion = true;
	    }
	    
	
	    return validacion;
  	}
	validarRequeridoHoraSalida():boolean{
		let validacion = false;
		if(this.horasExtra.fecha === undefined || this.horasExtra.fecha == null || this.horasExtra.fecha=='' ){
			$('#fecha').addClass('invalid').removeClass('required');
			$('#fecha').parent().addClass('state-error').removeClass('state-success');
			validacion = true;
		}
		return validacion;
	}

	/* DETECTED CHANGE */
	onChangeFecha(value){
		debugger;
        this.horasExtra.fecha = value;
        $('#fecha').removeClass('state-error');
        $('#fecha').parent().removeClass('state-error');
		
  	}
	onChangeMotivo(val){
		$('#motivo').removeClass('state-error');
		$('#motivo').parent().removeClass('state-error');
		this.horasExtra.motivo = val;
	}
	onChangeHoraSalidaSolicitado(val){
		debugger;
		if(this.validarRequeridoHoraSalida()){
			this.mensaje = 'Ingrese la fecha';
			this.horasExtra.horaSalidaSolicitado = null;
			this._service.error("Error", this.mensaje);
			return;
		}
        this.horasExtra.horaSalidaSolicitado = val;
				
        $('#horaSalidaSolicitado').removeClass('state-error');
        $('#horaSalidaSolicitado').parent().removeClass('state-error');


        this.empleado.fechaIngreso = this.horasExtra.fecha;
		this.obtenerInformacionAdicional(this.empleado);

				
		this.horasExtra.horasSemanalesPendientes = 0;
								
  }
	
	/* SERVICIOS REST */
	private obtenerHistoriaLaboralActual(empleado: Empleado) {
      this.permisoService.obtenerHistoriaLaboralActual(empleado).subscribe(
        historiaLaboral => this.historiaLaboralActual = historiaLaboral,
            error =>  this.errorMessage = <any>error);
  }

	private obtenerInformacionAdicional(empleado: Empleado){
		debugger;
			this.permisoService.obtenerInformacionAdicional(this.empleado).subscribe(
        	infoAdicional => {
        		this.getTotalHorasExtras(infoAdicional)
        	},
            error =>  this.errorMessage = <any>error);
	}

	getTotalHorasExtras(infoAdicionalVal:HorasExtrasDto){
		this.horasExtra.horaSalidaHorario = infoAdicionalVal.horaSalidaHorario;

		debugger;
				
				var start = moment.utc(this.horasExtra.horaSalidaHorario, "HH:mm");
				var end = moment.utc(this.horasExtra.horaSalidaSolicitado, "HH:mm");
				
				// account for crossing over to midnight the next day
				if (end.isBefore(start)) end.add(1, 'day');
				
				// calculate the duration
				var d = moment.duration(end.diff(start));
				
				// subtract the lunch break
				d.subtract(30, 'minutes');
				
				// format a string result
				var s = moment.utc(+d).format('H.mm');

				this.horasExtra.horas = s;
				console.log('>>>>>>>>>>hour'+s)
	}

	
	goBack(): void {
    
        this.location.back();
    }

  /* NOTIFICATION */
  navegarDashboard(data:Notificacion){

        if(data.codigo == 1){
            this.mensaje = data.mensaje;
			this.horasExtra = new HorasExtrasDto();
			this._service.success("Correcto", data.mensaje);
        }

        else if(data.codigo == 0){
			this._service.error("Error", data.mensaje);
			return;
        }


  }
}