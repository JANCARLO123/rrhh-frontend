import {Component, OnInit, ViewChild,ViewContainerRef, EventEmitter, LOCALE_ID,
    trigger,
    state,
    style,
    animate,
    transition  } from '@angular/core';
//import {ViewChild} from "@angular/core/src/metadata/di";
import { Router,ActivatedRoute } from '@angular/router';
import {ModalDirective} from "ng2-bootstrap";
import {HttpModule} from '@angular/http';
import { Location } from '@angular/common';


import {HorarioDia} from "../../+gestion-tiempo/+administrar-horario/horarioDia";
import {Observable} from "rxjs";
import {RoleNameDto} from "../../+dtos/roleNameDto";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {Empleado} from "../../+personal/+empleado/empleado";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {Marcacion} from "../../+personal/+empleado/marcacion";
import {SolicitudCambioMarcacion} from "./solicitudCambioMarcacion";
import {Notificacion} from "../../+personal/+empleado/notificacion";
import {NotificationsService} from "angular2-notifications/src/notifications.service";

declare var $: any;

@Component({
    selector: 'sa-solicitar-correccion',
    templateUrl: 'solicitar.correccion.component.html',
    providers: []
})
export class SolicitarCorreccionComponent {

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

    public empleado:Empleado=new Empleado();

    public marcacion:Marcacion= new Marcacion();

    public solicitudCambioMarcacion:SolicitudCambioMarcacion= new SolicitudCambioMarcacion();

    public errorMessage:string;

    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

    constructor(private _service: NotificationsService, private empleadoService:EmpleadoService,private _router: Router) {

        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();
        this.empleado.idEmpleado = this.localStorageValue.idEmpleado;

        this.obtenerMarcacionEmpleado(this.empleado);

    }


    private obtenerMarcacionEmpleado(empleado: Empleado) {
        this.empleadoService.obtenerMarcacionEmpleado(empleado).subscribe(
            marcacion => this.cargarSolicitudCambio(marcacion),
            error =>  this.errorMessage = <any>error);
    }

    public cargarSolicitudCambio(marcacion:Marcacion){
        this.marcacion = marcacion;
        this.solicitudCambioMarcacion.horaIngreso = marcacion.horaIngreso;
        this.solicitudCambioMarcacion.horaInicioAlmuerzo = marcacion.horaInicioAlmuerzo;
        this.solicitudCambioMarcacion.horaFinAlmuerzo = marcacion.horaFinAlmuerzo;
        this.solicitudCambioMarcacion.horaSalida = marcacion.horaSalida;
    }

    private onRegistrarSolicitudCorreccionMarcacion(){
        this.solicitudCambioMarcacion.marcacion = this.marcacion;

        this.empleadoService.registrarCorreccionMarcacion(this.solicitudCambioMarcacion).subscribe(
            data => {
                this.navegarDashborad(data);
            },
            error => console.log(error)
        );
    }

    navegarDashborad(data:Notificacion){
        if(data.codigo == 1){
            //this.empleado = new Empleado();
            //this._service.success("Error", 'Ingrese los campos obligatorios.');
            this._router.navigate(['/dashboard/analytics']);
        }
        else if(data.codigo == 0){
            this._service.error("Error", data.mensaje);
        }

    }

}
