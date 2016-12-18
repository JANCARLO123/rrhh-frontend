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
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {HorasExtrasDto} from "./horasExtrasDto";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {EnumEstados} from "../../+enums/EnumEstados";

declare var $: any;

@Component({
	selector: 'adminHorasExtra',
	templateUrl: 'administrarHorasExtras.component.html'
})

export class AdministrarHorasExtraComponent implements OnInit {
	private historiaLaboralActual: HistoriaLaboralDto = new HistoriaLaboralDto();
	private horasExtra: HorasExtrasDto = new HorasExtrasDto();
	private empleado:Empleado = new Empleado();

	//opcional
	private permisoEmpleado:PermisoEmpleado = new PermisoEmpleado();

	private errorMessage:string;
	public mensaje:string;

	private isEnviado:boolean=true;
	private isJefeEnviado:boolean=true;
	localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

	constructor(private route:ActivatedRoute,
				private permisoService:PermisoService,
				private empleadoService: EmpleadoService,
				private location: Location,
				private _router: Router) { 
		debugger;

		this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();

		this.horasExtra = this.empleadoService.retrieveSessionStorage('entityBusquedaHoras');
		this.empleado.idEmpleado = this.horasExtra.idEmpleado;

		this.obtenerHistoriaLaboralActual(this.empleado);

		if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.GEREN]){
			this.localStorageValue.typeRead = true;
			if(this.horasExtra.estado == EnumEstados[EnumEstados.P]){
				this.localStorageValue.mostrarBoton=true;
			}
		}

	}

	ngOnInit() {

	}

	onRegresarBusquedaVacaciones(){
		this.location.back();
	}

	onEliminarHorasExtraEmpleado(){
		debugger;

        this.empleadoService.eliminarHorasExtraEmpleado(this.horasExtra).subscribe(
            data => {
                this.goBack();
				this.navegarDashboard(data);
            },
            error => this.errorMessage = <any>error
        );
	}
	onRegresarBusquedaHorasExtra(){
		this.location.back();
	}
	onAprobarHorasExtraEmpleado(){
		this.empleadoService.aprobarHorasExtraEmpleado(this.horasExtra).subscribe(
            data => {
				this.goBack();
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
	}
	onRechazarHorasExtraEmpleado(){
		this.empleadoService.rechazarHorasExtraEmpleado(this.horasExtra).subscribe(
            data => {
				this.goBack();
                this.navegarDashboard(data);
                
            },
            error => console.log(error)
        );
	}

	
	/* SERVICIOS REST */
	private obtenerHistoriaLaboralActual(empleado: Empleado) {
        this.permisoService.obtenerHistoriaLaboralActual(empleado).subscribe(
        historiaLaboral => this.historiaLaboralActual = historiaLaboral,
            error =>  this.errorMessage = <any>error);
    }

	goBack(): void {
    
        this.location.back();
    }


  /* NOTIFICATION */
  navegarDashboard(data:Notificacion){
        console.log('>>>return  data notification: '+data.mensaje);
        
        if(data.codigo == 1){
          console.log('>>>data codigo 1');
            this.mensaje = data.mensaje;
			this.horasExtra = new HorasExtrasDto();

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