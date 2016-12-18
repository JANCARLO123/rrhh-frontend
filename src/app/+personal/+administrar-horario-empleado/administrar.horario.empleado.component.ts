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
import {HorarioDia} from "../../+gestion-tiempo/+administrar-horario/horarioDia";
import {EmpleadoService} from "../+empleado/empleado.service";
import {HorarioEmpleado} from "../+empleado/horarioEmpleado";
import {Horario} from "../+cargo/horario";
import {HorarioEmpleadoDia} from "../+empleado/horarioEmpleadoDia";
import {HorarioEmpleadoDiaDialogFormComponent} from "./horario.empleado.dia.dialog.component";

import {NotificationsService} from "angular2-notifications";

declare var $: any;

@Component({
  selector: 'sa-administrar-horario-empleado',
  templateUrl: 'administrar.horario.empleado.component.html',
  providers: [PermisoService]
})
export class AdministrarHorarioEmpleadoComponent implements OnInit {

    public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};

    public defaultItemHorario:any={idHorario:null,nombre:'Seleccionar'};

    private errorMessage:string;

    public mensaje:string;

    public horarioDias:HorarioDia[]=[];

    public horarioEmpleadoDias:HorarioEmpleadoDia[]=[];

    private empleado:Empleado = new Empleado();

    private horariosEmpleado:HorarioEmpleado[]=[];

    private horarioEmpleado:HorarioEmpleado= new HorarioEmpleado();

    private tiposhorario:TablaGeneralDto[]=[];


    private horarios:Horario[]=[];

    private horarioDefecto:Horario=new Horario();

    private horariosEmpleadoDia:HorarioEmpleadoDia[]=[];

    private historiaLaboralActual: HistoriaLaboralDto = new HistoriaLaboralDto();

    private isPersonalizado:boolean=false;
    private isEdit:boolean=false;
    private classEdit:string='input';

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

    constructor(private _service: NotificationsService, private route:ActivatedRoute, private _router: Router, private empleadoService:EmpleadoService,private permisoService:PermisoService) {

        let empleado:Empleado = empleadoService.retrieveData();

        let horarioEmpleado:HorarioEmpleado = empleadoService.retrieveDataHorarioEmpleado();

        this.horarioEmpleadoDias=[];

        this.getTiposHorario();
        this.verHorarioEmpleado(empleado);
        this.obtenerHistoriaLaboralActual(empleado);
        this.isPersonalizado = true;
        if(horarioEmpleado.idHorarioEmpleado === undefined || horarioEmpleado.idHorarioEmpleado == null){
            this.isEdit=false;
            this.classEdit='input';
        }else{
            this.isEdit=true;
            this.classEdit='input state-disabled';
            if(horarioEmpleado.tipoHorario == 'PE'){
                this.horarios = [];
            }
            this.obtenerHorarios();

            this.obtenerHorarioEmpleadoDiaPorHorarioEmpleado(horarioEmpleado);
        }

        this.empleado=empleado;
    }

    private obtenerHorarioPorTipoHorarioEmpresa(horarioTemp:Horario) {

        this.empleadoService.obtenerHorariosPorTipoHorario(horarioTemp).subscribe(
            horario => this.horarios = horario,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerHorarios() {

        this.empleadoService.obtenerHorarios().subscribe(
            horario => this.horarios = horario,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerHorarioEmpleadoDiaPorHorarioEmpleado(horarioTemp:HorarioEmpleado){

        this.empleadoService.obtenerHorarioEmpleadoDiaPorHorarioEmpleado(horarioTemp).subscribe(
            horario => this.cargarHorarioEmpleado(horarioTemp, horario),
            error =>  this.errorMessage = <any>error);
    }

    cargarHorarioEmpleado(horarioEmpleado:HorarioEmpleado, horarioDias:HorarioEmpleadoDia[]){

        this.horarioEmpleadoDias = horarioDias;

        this.horarioEmpleado = horarioEmpleado;

    }

    private obtenerHistoriaLaboralActual(empleado: Empleado) {
        this.permisoService.obtenerHistoriaLaboralActual(empleado).subscribe(
            historiaLaboral => this.historiaLaboralActual = historiaLaboral,
            error =>  this.errorMessage = <any>error);
    }

    private getTiposHorario() {
        this.empleadoService.completarComboBox('obtenerTipoHorario').subscribe(
            tablaGeneralDto => this.tiposhorario = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerHorariosPorTipoHorario(horarioTemp:Horario) {

        this.empleadoService.obtenerHorariosPorTipoHorario(horarioTemp).subscribe(
            horario => this.cargarHorarios(horario,horarioTemp),
            error =>  this.errorMessage = <any>error);
    }

    private cargarHorarios(horarios:Horario[], horario:Horario){
        this.horarios = horarios;
        this.obtenerHorarioPorTipoHorarioPorDefecto(horario);
    }

    private obtenerHorarioPorTipoHorarioPorDefecto(horarioTemp:Horario){
        this.empleadoService.obtenerHorarioPorTipoHorarioPorDefecto(horarioTemp).subscribe(
            horario => this.cargarHorariosDias(horario),
            error =>  this.errorMessage = <any>error);
    }

    private obtenerHorarioDiaPorHorario(horarioTemp:Horario){
        this.empleadoService.obtenerHorarioDiaPorHorario(horarioTemp).subscribe(
            horario => this.homologarHorarioDias(horario),
            error =>  this.errorMessage = <any>error);
    }

    private cargarHorariosDias(horario:Horario){
        this.horarioEmpleado.idHorario = horario.idHorario;
        this.horarioEmpleado.horasSemanal = horario.horasSemanal;

        this.homologarHorarioDias(horario.horarioDias);
    }

    homologarHorarioDias(horarioDias:HorarioDia[]){
        let horarioEmpleadoDiastemp:HorarioEmpleadoDia[] =[];

        for(var item in horarioDias){
            var data = horarioDias[item];
            let horarioEmpleadoDia:HorarioEmpleadoDia = new HorarioEmpleadoDia();
            horarioEmpleadoDia=(JSON.parse(JSON.stringify(data)));
            horarioEmpleadoDiastemp.push(horarioEmpleadoDia);
        }
        this.horarioEmpleadoDias=horarioEmpleadoDiastemp;
    }

    generarIdHorarioEmpleadoDiaTemporal():number {
        if (this.horarioEmpleadoDias != null)
            return (this.horarioEmpleadoDias.length + 2)* -1;
        else
            return-1;
    }

    onRegresarHorarioEmpleado(){
        this.empleadoService.storeData(this.empleado);
        this._router.navigate(['/personal/horarioEmpleado']);
    }

    onChangeInicioVigencia(value){
        this.horarioEmpleado.inicioVigencia= value;
    }

    onchangeHorario(value){

        let horarioTemp:Horario = new Horario();
        this.horarioEmpleado.idHorario = null;

        if(value == 'PE'){
            this.horarioEmpleadoDias = this.horariosDiaPorPersonalizado();
            this.horarioEmpleado.idHorario = null;
            this.isPersonalizado = true;
            this.horarios=[];


        }else if(value == 'EM'){
            this.isPersonalizado = false;
            horarioTemp.tipoHorario = value;
            this.obtenerHorariosPorTipoHorario(horarioTemp);
        }

        else if(value == 'PR'){
            this.isPersonalizado = false;
            if(this.historiaLaboralActual.idProyecto === undefined || this.historiaLaboralActual.idProyecto == null){
                this.horarioEmpleadoDias=[];
            }else {
                horarioTemp.tipoHorario = value;
                horarioTemp.idProyecto = this.historiaLaboralActual.idProyecto;
                this.obtenerHorariosPorTipoHorario(horarioTemp);
            }
        }else{
            this.horarioEmpleadoDias=[];
            this.isPersonalizado = true;
        }

    }

    onChangeHorarioDia(value){

        if(value == null){
            this.horarioEmpleadoDias=[];
        }else{
            let horario:Horario = new Horario();
            horario.idHorario = value;
            this.obtenerHorarioDiaPorHorario(horario);
        }

    }

    horariosDiaPorPersonalizado():HorarioEmpleadoDia[]{
        return [new HorarioEmpleadoDia(-1,'LU','08:00','17:30',1,'Lunes','Si'),
            new HorarioEmpleadoDia(-2,'MA','08:00','17:30',1,'Lunes','Si'),
            new HorarioEmpleadoDia(-3,'MI','08:00','17:30',1,'Lunes','Si'),
            new HorarioEmpleadoDia(-4,'JU','08:00','17:30',1,'Lunes','Si'),
            new HorarioEmpleadoDia(-5,'VI','08:00','17:30',1,'Lunes','Si'),
            new HorarioEmpleadoDia(-6,'SA',null,null,null,'Sabado','No'),
            new HorarioEmpleadoDia(-7,'DO',null,null,null,'Domingo','No')];
    }

    ngOnInit() {
    }

    onRegistrarHorarioEmpleado(){


        this.horarioEmpleado.horariosEmpleadoDia = this.horarioEmpleadoDias;

        this.horarioEmpleado.idEmpleado = this.empleado.idEmpleado;

        //validacion


        this.empleadoService.registrarHorarioEmpleado(this.horarioEmpleado).subscribe(
            data => {
                this.navegarHorarioEmpleado(data);
            },
            error => console.log(error)
        );

    }
    navegarHorarioEmpleado(data:Notificacion){
        if(data.codigo == 1){
            this.empleadoService.storeData(this.empleado);
            this._router.navigate(['/personal/horarioEmpleado']);
        }
        else if(data.codigo == 0){
            this.mensaje = data.mensaje;
            $( '#dialog-message' ).dialog( "open" );
        }
    }


    verHorarioEmpleado(empleado: Empleado){
        this.empleadoService.verHorariosEmpleado(empleado).subscribe(
            data => this.horariosEmpleado = data,
            error => this.errorMessage = <any>error
        );
    }

    cerrarDialog(){
        this.mensaje = '';
        $( '#dialog-message' ).dialog( "close" );
    }

    //popup horario empleado dia
    public dataItemHorarioDia: HorarioEmpleadoDia;


    @ViewChild(HorarioEmpleadoDiaDialogFormComponent) protected editHorarioEmpleadoDiaFormComponent: HorarioEmpleadoDiaDialogFormComponent;

    public onEditarHorarioDia(dataItem: any): void {
        this.editHorarioEmpleadoDiaFormComponent.tituloCabecera = "Editar Horario Dia";

        this.dataItemHorarioDia = dataItem;

        this.editHorarioEmpleadoDiaFormComponent.diaSemana = this.dataItemHorarioDia.diaSemana;
        this.editHorarioEmpleadoDiaFormComponent.nombreDiaSemana = this.dataItemHorarioDia.nombreDiaSemana;
        this.editHorarioEmpleadoDiaFormComponent.entrada = this.dataItemHorarioDia.entrada;
        this.editHorarioEmpleadoDiaFormComponent.salida = this.dataItemHorarioDia.salida;
        this.editHorarioEmpleadoDiaFormComponent.laboral = this.dataItemHorarioDia.laboral;
        this.editHorarioEmpleadoDiaFormComponent.tiempoAlmuerzo = this.dataItemHorarioDia.tiempoAlmuerzo;

    }

    public onCancelarHorarioDia(): void {
        this.dataItemHorarioDia = undefined;
    }

    public onAgregarHorarioDia(dto: HorarioEmpleadoDia): void {

        this.editarHorarioDia(dto);
    }


    public editarHorarioDia(data: HorarioEmpleadoDia): Observable<HorarioEmpleadoDia[]> {
        return this.fetchHorarioDia("update", data);
    }

    private fetchHorarioDia(action: string = "", data?: HorarioEmpleadoDia): Observable<HorarioEmpleadoDia[]>  {

        if(action=="update"){
            var indice = this.horarioEmpleadoDias.indexOf(data);
            if(indice>=0)
                this.horarioEmpleadoDias[indice]  = (JSON.parse(JSON.stringify(data)));
        }else if(action=="destroy"){
            var indice = this.horarioEmpleadoDias.indexOf(data);

            if(indice>=0)
                this.horarioEmpleadoDias.splice(indice, 1);

        }

        return Observable.of(this.horarioEmpleadoDias);
    }

}
