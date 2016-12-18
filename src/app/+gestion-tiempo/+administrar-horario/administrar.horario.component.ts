import {Component, OnInit, EventEmitter,ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router, ActivatedRoute} from "@angular/router";
import {PermisoEmpleado} from "../../+personal/+empleado/permisoEmpleado";
import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {Empleado} from "../../+personal/+empleado/empleado";
import {HistoriaLaboralDto} from "../../+personal/+historiaLaboral/historiaLaboralDto";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {isUndefined} from "util";
import {Notificacion} from "../../+personal/+empleado/notificacion";
import {PermisoService} from "../../+autogestion/+solicitar-permiso/permiso.service";
import {GridDataResult, PageChangeEvent} from "@progress/kendo-angular-grid";
import {HorarioDia} from "./horarioDia";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {Proyecto} from "../../+personal/+cargo/proyecto";
import {Horario} from "../../+personal/+cargo/horario";
import {CargoService} from "../../+personal/+cargo/http-empleados-service";
import {HorarioDiaDialogFormComponent} from "./horario.dia.dialog.component";

import {NotificationsService} from "angular2-notifications";

declare var $: any;

@Component({
  selector: 'sa-administrar-horario',
  templateUrl: 'administrar.horario.component.html',
  providers: [ CargoService]
})
export class AdministrarHorarioComponent implements OnInit {

    public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};

    public defaultItemProyecto: Proyecto = {idProyecto: null, nombre: 'Seleccionar'};

    private errorMessage:string;

    public mensaje:string;

    public horarioDias:HorarioDia[]=[];

    public proyectos: Proyecto[];

    public estados:TablaGeneralDto[];

    public tiposHorario:TablaGeneralDto[];

    public horario:Horario=new Horario();

    public isEmpresa:boolean=true;
    public isEdit:boolean=false;
    public classEdit:string='input';

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


    constructor(private _service: NotificationsService, private empleadoService: EmpleadoService,private cargoService: CargoService, private route:ActivatedRoute, private _router: Router) {

        let horario:Horario = empleadoService.retrieveDataHorario();

        this.getTiposHorario();

        this.getEstados();

        if(horario.idHorario === undefined || horario.idHorario == null){
            this.horarioDias= [new HorarioDia(-1,'LU','Lunes','Si',1,'08:00','17:30'),
                new HorarioDia(-2,'MA','Martes','Si',1,'08:00','17:30'),
                new HorarioDia(-3,'MI','Miercoles','Si',1,'08:00','17:30'),
                new HorarioDia(-4,'JU','Jueves','Si',1,'08:00','17:30'),
                new HorarioDia(-5,'VI','Viernes','Si',1,'08:00','17:30'),
                new HorarioDia(-6,'SA','Sabado','No',null,null,null),
                new HorarioDia(-7,'DO','Domingo','No',null,null,null)];
            this.isEdit = false;
            this.classEdit = 'input';
            this.horario.horasSemanal=48;
        }else{
            this.obtenerProyectos();
            this.obtenerHorarioDiaPorHorario(horario);
            this.obtenerhorario(horario);
            this.isEdit = true;
            this.isEmpresa = true;
            this.classEdit = 'input state-disabled';
        }


    }

    onChangeTipoHorario(value){
         if(value== 'PR'){
            this.isEmpresa = false;
             this.obtenerProyectos();
        }else{
             this.isEmpresa = true;
             this.horario.idProyecto = null;
             this.proyectos = [];
         }

    }

    private obtenerhorario(horario: Horario){
        this.empleadoService.obtenerHorario(horario).subscribe(
            data => this.horario = data,
            error => this.errorMessage = <any>error
        );
    }

    private obtenerHorarioDiaPorHorario(horarioTemp:Horario){
        this.empleadoService.obtenerHorarioDiaPorHorario(horarioTemp).subscribe(
            horario => this.horarioDias = horario,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit() {
    }

    private getTiposHorario() {
        this.empleadoService.completarComboBox('obtenerTipoHorario').subscribe(
            tablaGeneralDto => this.tiposHorario = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerProyectos() {
        this.cargoService.completarComboTodosProyectos().subscribe(
            proyectoDto => this.proyectos = proyectoDto,
            error => this.errorMessage = <any>error);
    }


    private getEstados() {
        this.empleadoService.completarComboBox('obtenerEstados').subscribe(
            tablaGeneralDto => this.estados = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    validarRequerido(){
        let validacion = false;

        if(this.horario.nombre === undefined || this.horario.nombre == null || this.horario.nombre=='' ){
            $('#nombreHorario').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if(this.horario.horasSemanal === undefined || this.horario.horasSemanal == null){
            $('#horasSemana').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        if(this.horario.tipoHorario === undefined || this.horario.tipoHorario == null){

            validacion = true;
        }

        if(this.horario.estado === undefined || this.horario.estado == null){

            validacion = true;
        }

        return validacion;
    }

    ingresaNombreHorario(){
        $('#nombreHorario').parent().removeClass('state-error');
    }

    ingresaHorasSemanal(){
        $('#horasSemana').parent().removeClass('state-error');
    }

    onRegistrarHorario(){

        this.horario.horarioDias = this.horarioDias;
        this.horario.idEmpresa = 4;

        //validar
        if(this.validarRequerido()){
            this._service.error("Error", 'Ingrese los campos obligatorios.');
            return;
        }

        if(this.horario.tipoHorario == 'PR'){
            if(this.horario.idProyecto === undefined || this.horario.idProyecto == null){

                this._service.error("Error", 'Seleccione el proyecto.');
                return;
            }
        }


        this.empleadoService.registrarHorario(this.horario).subscribe(
            data => {
                this.navegarBusquedaHorario(data);
            },
            error => console.log(error)
        );


    }

    navegarBusquedaHorario(data:Notificacion){
        if(data.codigo == 1){
            this.horario = new Horario();
            this._service.success("Success", data.mensaje);
            this._router.navigate(['/gestionTiempo/busquedaHorarios']);
        }
        else if(data.codigo == 0){
            this.mensaje = data.mensaje;
            //$( '#dialog-message' ).dialog( "open" );
            this._service.error("Error", data.mensaje);
        }

    }

    onRegresarBusquedaHorario(){
        this._router.navigate(['/gestionTiempo/busquedaHorarios']);
    }
    cerrarDialog(){
        this.mensaje = '';
        $( '#dialog-message' ).dialog( "close" );
    }

    public dataItemHorarioDia: HorarioDia;

    @ViewChild(HorarioDiaDialogFormComponent) protected editHorarioDiaFormComponent: HorarioDiaDialogFormComponent;

    public onEditarHorarioDia(dataItem: any): void {
        this.editHorarioDiaFormComponent.tituloCabecera = "Editar Horario Dia";

        this.dataItemHorarioDia = dataItem;

        this.editHorarioDiaFormComponent.diaSemana = this.dataItemHorarioDia.diaSemana;
        this.editHorarioDiaFormComponent.nombreDiaSemana = this.dataItemHorarioDia.nombreDiaSemana;
        this.editHorarioDiaFormComponent.entrada = this.dataItemHorarioDia.entrada;
        this.editHorarioDiaFormComponent.salida = this.dataItemHorarioDia.salida;
        this.editHorarioDiaFormComponent.laboral = this.dataItemHorarioDia.laboral;
        this.editHorarioDiaFormComponent.tiempoAlmuerzo = this.dataItemHorarioDia.tiempoAlmuerzo;

    }

    public onCancelarHorarioDia(): void {
        this.dataItemHorarioDia = undefined;
    }

    public onAgregarHorarioDia(dto: HorarioDia): void {

        this.editarHorarioDia(dto);
    }


    public editarHorarioDia(data: HorarioDia): Observable<HorarioDia[]> {
        return this.fetchHorarioDia("update", data);
    }

    private fetchHorarioDia(action: string = "", data?: HorarioDia): Observable<HorarioDia[]>  {

        if(action=="update"){
            var indice = this.horarioDias.indexOf(data);
            if(indice>=0)
                this.horarioDias[indice]  = (JSON.parse(JSON.stringify(data)));
        }else if(action=="destroy"){
            var indice = this.horarioDias.indexOf(data);

            if(indice>=0)
                this.horarioDias.splice(indice, 1);

        }

        return Observable.of(this.horarioDias);
    }


}
