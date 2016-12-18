import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {HttpModule} from '@angular/http';
import { Location } from '@angular/common';

import {DepartamentoArea} from './departamento';
import {UndNegocio} from './undnegocio';
import {Proyecto} from './proyecto';
import {Cargo} from './cargo';
import {Moneda} from './moneda';
import {Horario} from './horario';
import {Dias} from './dias';
import {TablaGeneralDto} from '../+empleado/tablaGeneralDto';
import { HorarioDialogFormComponent } from './horario.dialog.component';
import { HistoriaLaboralDto } from '../+historiaLaboral/historiaLaboralDto';
import { CargoService } from './http-empleados-service';

//Empleado
import {EmpleadoService} from "../+empleado/empleado.service";
import {Empleado} from "../+empleado/empleado";
import {HorarioEmpleado} from "../+empleado/horarioEmpleado";
import {Notificacion} from "../../+personal/+empleado/notificacion";
import {HorarioEmpleadoDia} from "../+empleado/horarioEmpleadoDia";
import {HorarioDia} from "../../+gestion-tiempo/+administrar-horario/horarioDia";
import {Observable} from "rxjs";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {NotificationsService} from "angular2-notifications";

declare var $: any;

@Component({
    selector: 'sa-empleado-cargo',
    templateUrl: 'cargo.component.html',
    providers: [HttpModule]
})
export class CargoComponent implements OnInit {

    @ViewChild(HorarioDialogFormComponent) protected horarioDialogFormComponent: HorarioDialogFormComponent;

    public defaultItem:UndNegocio={idUnidadDeNegocio:null,nombre:'Seleccionar'};
    public departamentos : DepartamentoArea[];
    public undnegocios : UndNegocio[];
    public proyectos : Proyecto[];
    public cargos : Cargo[];
    public historiaLaboralDto:HistoriaLaboralDto= new HistoriaLaboralDto();
    public monedas : Moneda[];
    public tipoHorarios : TablaGeneralDto[];
    public dias : Dias[];
    public horarios : Horario[];

    public empleado:Empleado= new Empleado();
    private horariosEmpleado:HorarioEmpleado=new HorarioEmpleado();


    public isEnableUndNegocio:boolean;
    public isEnableProyectos:boolean;
    public isEnableCargos:boolean;
    public isHorarioSelectec:boolean = false;

    public errorMessage: string;
    public mensaje:string;

    public horarioEmpleado:HorarioEmpleado= new HorarioEmpleado();
    private tiposhorario:TablaGeneralDto[]=[];
    public horarioEmpleadoDias:HorarioEmpleadoDia[]=[];
    private isPersonalizado:boolean=false;

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

    public selectedValue: number = 3;

    constructor(private cargoService: CargoService,
                private _service: NotificationsService,
                private empleadoService:EmpleadoService,
                private location: Location) {

        this.isPersonalizado=true;
        this.empleado = this.empleadoService.retrieveSessionStorage('entityEditHistoriaLaboral');
        //this.verHorarioEmpleado(this.empleado);

        this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();

        if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.RHANA] || this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.ADMIN]){
            this.localStorageValue.mostrarBoton = true;
        }

    }

    ngOnInit() {
        this.getUndNegocio(),this.getMonedas(),this.getTipoHorario(),this.getListCargos();
        this.getTiposHorario();
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
            if(this.historiaLaboralDto.idProyecto === undefined || this.historiaLaboralDto.idProyecto == null){
                this.horarioEmpleadoDias=[];
            }else {
                horarioTemp.tipoHorario = value;
                horarioTemp.idProyecto = this.historiaLaboralDto.idProyecto;//this.historiaLaboralActual.idProyecto;
                this.obtenerHorariosPorTipoHorario(horarioTemp);
            }
        }else{
            this.horarioEmpleadoDias=[];
            this.isPersonalizado = true;
        }

    }

    private getTiposHorario() {
        this.empleadoService.completarComboBox('obtenerTipoHorario').subscribe(
            tablaGeneralDto => this.tiposhorario = tablaGeneralDto,
            error =>  this.errorMessage = <any>error);
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

    private obtenerHorariosPorTipoHorario(horarioTemp:Horario) {
        debugger;
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

    onChangeHorarioDia(value){

        if(value == null){
            this.horarioEmpleadoDias=[];
        }else{
            let horario:Horario = new Horario();
            horario.idHorario = value;
            this.obtenerHorarioDiaPorHorario(horario);
        }

    }

    generarIdHorarioEmpleadoDiaTemporal():number {
        if (this.horarioEmpleadoDias != null)
            return (this.horarioEmpleadoDias.length + 2)* -1;
        else
            return-1;
    }
    //popup

    editable: boolean = true;
    public dataItemHorarioDia: HorarioEmpleadoDia;


    @ViewChild(HorarioDialogFormComponent) protected editHorarioEmpleadoDiaFormComponent: HorarioDialogFormComponent;

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

    //fin popup

    rows = [];
    editing = {};

    getMonedas() {
        this.cargoService.completarComboMoneda().subscribe(
            monedaDto => this.monedas = monedaDto,
            error => this.errorMessage = <any>error
        );
    }
    getTipoHorario() {
        this.cargoService.completarComboTipoHorario().subscribe(
            tipoHorarioDto => this.tipoHorarios = tipoHorarioDto,
            error => this.errorMessage = <any>error
        );
    }
    getHorarioPersonalizado() {
        this.cargoService.completarFilaDia().subscribe(
            diaDto => this.dias = diaDto,
            error => this.errorMessage = <any>error
        );
    }
    getUndNegocio() {
        this.cargoService.completarComboUndNegocio().subscribe(
            undnegocios => this.undnegocios = undnegocios,
            error => this.errorMessage = <any>error
        );
    }

    getListCargos() {
        this.cargoService.completarComboCargos().subscribe(
            listCargos => this.cargos = listCargos,
            error => this.errorMessage = <any>error
        );
    }

    private cargarHorarioSeleccionado() {
        debugger;
        this.cargoService.cargarComboHorario().subscribe(
            horarioDto => this.horarios = horarioDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerDepartamentos(idUndNegocio:number) {
        this.cargoService.completarComboDepa(idUndNegocio).subscribe(
            departamentoDto => this.departamentos = departamentoDto,
            error =>  this.errorMessage = <any>error);
    }

    private obtenerProyecto(idDepartamentoArea:number) {
        this.cargoService.completarComboProyecto(idDepartamentoArea).subscribe(
            proyectoDto => this.proyectos = proyectoDto,
            error =>  this.errorMessage = <any>error);
    }

    /*private obtenerCargo(idProyecto:number) {
     this.cargoService.completarComboCargo(idProyecto).subscribe(
     cargoDto => this.cargos = cargoDto,
     error =>  this.errorMessage = <any>error);
     }*/

    enableRow(dataItem: any):void{

        console.log(dataItem);
    }

    onEstadoHorario(value:boolean){
        return value;
    }

    actualizarHorarioSel(value):void{
        debugger;

        let nombre:any = value;
        switch (nombre) {
            case "EX":
                console.log('Hi1')
                this.isHorarioSelectec = false;
                this.cargarHorarioSeleccionado();
                //this.onEstadoHorario(true);
                break;
            case "PR":
                console.log('Hi2')
                this.historiaLaboralDto.idHorario = null;
                this.isHorarioSelectec = true;
                //this.onEstadoHorario(false);
                break;
            case "EM":
                console.log('Hi3')
                this.historiaLaboralDto.idHorario = null;
                this.isHorarioSelectec = true;
                //this.onEstadoHorario(false);
                break;
            case "PE":

                this.historiaLaboralDto.idHorario = null;
                this.isHorarioSelectec = true;
                this.getHorarioPersonalizado();
                //this.onEstadoHorario(false);
                break;
            default:
                console.log('error')

        }


    }

    actualizarDpto(value):void{
        this.isEnableUndNegocio=false;
        let codigo:any = value;
        this.obtenerDepartamentos(codigo);

        this.isEnableProyectos=true;
        this.isEnableCargos=true;
        this.proyectos = null;


    }

    actualizarProyecto(value):void{
        let codigo:any = value;
        this.obtenerProyecto(codigo);

    }

    /*actualizarCargo(value):void{

     let codigo:any = value;

     this.obtenerCargo(codigo);
     }*/
    //Grid
    actualizarRowLunes(event:Event):void{
        let codigo:any = (<HTMLSelectElement>event.srcElement).value;
        this.dias = null;
    }

    onChangeIniDate(e) {

        this.historiaLaboralDto.desdeFecha = e;
    }

    onChangeFinDate(e) {

        this.historiaLaboralDto.hastaFecha = e;

    }

    verHorarioEmpleado(empleado: Empleado){
        this.empleadoService.verHorarioEmpleado(empleado).subscribe(
            data => this.horariosEmpleado = data,
            error => this.errorMessage = <any>error
        );
    }

    goBack(): void {

        this.location.back();
    }

    public onRegistrarCargo(historiaLaboralDto: HistoriaLaboralDto): void{
        debugger;
        this.historiaLaboralDto.idEmpleado = this.empleado.idEmpleado;
        this.historiaLaboralDto.horasSemanal = this.horariosEmpleado.horasSemanal;
        this.historiaLaboralDto.horasSemanalHorario = this.horariosEmpleado.horasSemanalHorario;
        //this.historiaLaboralDto.tipoHorario = this.horarioEmpleado.tipoHorario;
        this.cargoService.registrarCargo(this.historiaLaboralDto).subscribe(
            data => {
                debugger;
                this.historiaLaboralDto = new HistoriaLaboralDto();
            },
            error => console.log(error)
        );

    }

    public onRegistrarCargo2(historiaLaboralDto: HistoriaLaboralDto): void{
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
        this.historiaLaboralDto.idEmpleado = this.empleado.idEmpleado;
        this.historiaLaboralDto.horasSemanal = this.horariosEmpleado.horasSemanal;
        this.historiaLaboralDto.horasSemanalHorario = this.horariosEmpleado.horasSemanalHorario;


        let horarioEmpleadoTemp:HorarioEmpleado=this.horarioEmpleado;

        horarioEmpleadoTemp.horariosEmpleadoDia = this.horarioEmpleadoDias;

        horarioEmpleadoTemp.idEmpleado = this.empleado.idEmpleado;
        horarioEmpleadoTemp.inicioVigencia = this.historiaLaboralDto.desdeFecha;

        this.historiaLaboralDto.horarioEmpleado = horarioEmpleadoTemp;

        this.cargoService.registrarCargo2(this.historiaLaboralDto).then(
            data => {
                this.navegarDashboard(data);
            }
        );

    }
    validarRequerido():boolean{
        debugger;
        let validacion = false;
        if(this.historiaLaboralDto.desdeFecha === undefined || this.historiaLaboralDto.desdeFecha == null || this.historiaLaboralDto.desdeFecha=='' ){
            $('#desdeFecha').addClass('invalid').removeClass('required');
            $('#desdeFecha').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if(this.historiaLaboralDto.unidadNegocio === undefined || this.historiaLaboralDto.unidadNegocio == null || this.historiaLaboralDto.unidadNegocio=='' ){
            $('#unidadNegocio').addClass('invalid').removeClass('required');
            $('#unidadNegocio').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if(this.historiaLaboralDto.idCargo === undefined || this.historiaLaboralDto.idCargo == null ){
            $('#idCargo').addClass('invalid').removeClass('required');
            $('#idCargo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if(this.historiaLaboralDto.idMoneda === undefined || this.historiaLaboralDto.idMoneda == null ){
            $('#idMoneda').addClass('invalid').removeClass('required');
            $('#idMoneda').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }

        return validacion;
    }

    navegarDashboard(data:Notificacion){
        console.log('>>>return  data notification: '+data.mensaje);

        if(data.codigo == 1){
            console.log('>>>data codigo 1');
            this.mensaje = data.mensaje;
            $( '#dialog-message' ).dialog( {
                modal: true,
                buttons: {
                    Ok: function() {
                        $( this ).dialog( "close" );
                    }
                }
            } );
            this.goBack();
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


    @ViewChild('lgModal') public lgModal:ModalDirective;

    public showChildModal():void {
        this.lgModal.show();
    }

    public hideChildModal():void {
        this.lgModal.hide();
    }

}
