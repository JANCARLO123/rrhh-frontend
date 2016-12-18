import { Component, Input,  Output, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {EmpleadoService} from './empleado.service';

import {TablaGeneralDto} from './tablaGeneralDto';
import {EquipoEntregado} from "./equipoEntregado";
import {ModalDirective} from "ng2-bootstrap";

declare var $: any;

@Component({
  selector: 'equipoentregado-dialog-form',
  template: `
        <div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" (click)="onClose()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">{{titulo}}</h4>
        </div>
        <div class="modal-body">
        
            <form [formGroup]="editForm" class="smart-form">
            
            <div class="row">
              
                <section class="col col-md-6">
                  <label for="TipoEquipo">Tipo Equipo<span style="color: red">*</span></label>
                  <label class="input"> 
                        <kendo-dropdownlist id="tipoEquipo" [data]="tiposEquipo" formControlName="TipoEquipo" [(value)]="tipoEquipo" [valuePrimitive]="true" [defaultItem]="defaultItem" [textField]="'nombre'" [valueField]="'codigo'" style="width: 100%;"></kendo-dropdownlist>
                  </label>
                 </section>
                
                <section class="col col-md-6">
                  <label for="Estado">Estado<span style="color: red">*</span></label>
                  <label class="input"> 
                        <kendo-dropdownlist id="equipoEstado" [data]="estados" formControlName="Estado" [(value)]="estado" [valuePrimitive]="true" [defaultItem]="defaultItem" [textField]="'nombre'" [valueField]="'codigo'" style="width: 100%;"></kendo-dropdownlist>
                  </label>
                 </section>
                
                <section class="col col-md-12">
                  <label for="Descripcion">Descripcion<span style="color: red">*</span></label>
                  <label class="input"> 
                        <input type="text" id="descripcion" formControlName="Descripcion" [(ngModel)]="descripcion" (keyup)="ingresaDescripcion()"/>
                  </label>
                 </section>
                
                <section class="col col-md-4">
                  <label for="FechaEntrega">Fecha Entrega<span style="color: red">*</span></label>
                  <label class="input"> <i class="icon-append fa fa-calendar"></i>
                        <input type="text" id="fechaEntrega" placeholder="Seleccionar una Fecha" formControlName="FechaEntrega" [(ngModel)]="fechaEntrega" (change)="onChangeDateInicio($event)"
                               saUiDatepicker date-format="dd/mm/yy" />
                  </label>
                 </section>
                 <section class="col col-md-4">
                  <label for="FechaDevolucion">Fecha Devolucion</label>
                  <label class="input"> <i class="icon-append fa fa-calendar"></i>
                        <input type="text" placeholder="Seleccionar una Fecha" formControlName="FechaDevolucion" [(ngModel)]="fechaDevolucion" (change)="onChangeDateFin($event)"
                               saUiDatepicker date-format="dd/mm/yy" />
                  </label>
                 </section>
                
              </div>
              
              <alert *ngIf="mostrarAlertaEquipo" type="danger" dismissible="true" dismissOnTimeout="10000" (close)="closeAlertEquipo($event)">
                <i class="fa-fw fa fa-exclamation"></i>
                <strong>Completar los campos requeridos.</strong>
            </alert>
              
              
          </form>
        
          </div>
               
          <div class="modal-footer">
            <button type="button" class="btn btn-default" (click)="onCancel($event)"> Cancelar
            </button>
            <button type="button" class="btn btn-primary" (click)="onSave($event)"> Agregar
            </button>
          </div>
          
          </div>
    </div>
  </div>
    `
})
export class EquipoEntregadoDialogFormComponent {

  public tipoEquipo:string;
  public nombreTipoEquipo:string;
  public estado:string;
  public fechaEntrega:string;
  public fechaDevolucion:string;
  public nombreEstado:string;
  public descripcion:string;

  public mensaje:string;

  public mostrarAlertaEquipo:boolean=false;

  dataItem;
  editForm;
  @Input() public set model(dto: EquipoEntregado) {
    this.dataItem = dto;
    dto === undefined ? this.lgModal.hide(): this.lgModal.show();
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();


  public tiposEquipo:TablaGeneralDto[];
  public estados:TablaGeneralDto[];
  errorMessage: string;

  public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};
  
  constructor(private empleadoService:EmpleadoService) {
    this.editForm = new FormGroup({
      'TipoEquipo': new FormControl(),
      'Descripcion': new FormControl(),
      'Estado': new FormControl(),
      'FechaEntrega': new FormControl(),
      'FechaDevolucion': new FormControl()
    })
    

  }

  public active: boolean = false;

  public titulo:string="";

  public onSave(e): void {
    e.preventDefault();
    this.mostrarAlertaEquipo = false;

    for(var item in this.tiposEquipo){
      var data = this.tiposEquipo[item];
      if(this.tipoEquipo===data.codigo){
        this.nombreTipoEquipo = data.nombre;
        break;
      }
    }

    for(var item in this.estados){
      var data = this.estados[item];
      if(this.estado===data.codigo){
        this.nombreEstado = data.nombre;
        break;
      }
    }

    if (this.dataItem === undefined)
      this.dataItem = new EquipoEntregado(undefined,this.tipoEquipo,this.estado, this.descripcion, this.nombreTipoEquipo,this.nombreEstado, this.fechaEntrega, this.fechaDevolucion);
    else {
      this.dataItem.tipoEquipo = this.tipoEquipo;
      this.dataItem.estado = this.estado;
      this.dataItem.nombreTipoEquipo = this.nombreTipoEquipo;
      this.dataItem.nombreEstado = this.nombreEstado;
      this.dataItem.fechaEntrega = this.fechaEntrega;
      this.dataItem.fechaDevolucion = this.fechaDevolucion;
      this.dataItem.descripcion = this.descripcion;

    }

    if(this.validarRequerido()){
      this.mostrarAlertaEquipo = true;
      return;
    }


    this.save.emit(this.dataItem);
    this.active = false;
    this.lgModal.hide();
  }
  public onCancel(e): void {
    e.preventDefault();
    this.active = false;
    this.lgModal.hide();
    this.cancel.emit(undefined);
  }

  public onClose(): void {
    this.active = false;
    this.lgModal.hide();
    this.cancel.emit(undefined);
  }

  public closeAlertEquipo(value){
    this.mostrarAlertaEquipo = false;
  }

  public agregarEquipoEntregado() {
    this.obtenerTipoEquipo();
    this.obtenerEstadoTipoEquipo();
    this.model = new EquipoEntregado();
    this.tipoEquipo = "";
    this.estado = "";
    this.nombreTipoEquipo = "";
    this.nombreEstado = "";
    this.fechaEntrega = "";
    this.fechaDevolucion = "";

    $('#tipoEquipo').parent().removeClass('state-error');
    $('#equipoEstado').parent().removeClass('state-error');
    $('#descripcion').parent().removeClass('state-error');
    $('#fechaEntrega').parent().removeClass('state-error');

    this.active = true;
    this.lgModal.show();
  }

  public obtenerTipoEquipo() {
    this.empleadoService.completarComboBox('obtenerTipoEquipo').subscribe(
        tablaGeneralDto => this.tiposEquipo = tablaGeneralDto,
        error =>  this.errorMessage = <any>error);
  }

  public obtenerEstadoTipoEquipo() {
    this.empleadoService.completarComboBox('obtenerEstadoTipoEquipo').subscribe(
        tablaGeneralDto => this.estados = tablaGeneralDto,
        error =>  this.errorMessage = <any>error);
  }

  onChangeDateInicio(value){
    this.fechaEntrega = value;
    $('#fechaEntrega').removeClass('state-error');
    $('#fechaEntrega').parent().removeClass('state-error');

  }

  onChangeDateFin(value){
    this.fechaDevolucion = value;

  }

  ingresaDescripcion(){
    $('#descripcion').removeClass('state-error');
    $('#descripcion').parent().removeClass('state-error');
  }

  validarRequerido():boolean{
    let validacion = false;

    if(this.tipoEquipo === undefined || this.tipoEquipo == null || this.tipoEquipo=='' ){
      $('#tipoEquipo').addClass('invalid').removeClass('required');
      $('#tipoEquipo').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }
    if(this.estado === undefined || this.estado == null || this.estado==''){
      $('#equipoEstado').addClass('invalid').removeClass('required');
      $('#equipoEstado').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }

    if(this.descripcion === undefined || this.descripcion == null || this.descripcion==''){
      $('#descripcion').addClass('invalid').removeClass('required');
      $('#descripcion').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }

    if(this.fechaEntrega === undefined || this.fechaEntrega == null || this.fechaEntrega==''){
      $('#fechaEntrega').addClass('invalid').removeClass('required');
      $('#fechaEntrega').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }

    return validacion;
  }


  @ViewChild('lgModal') public lgModal:ModalDirective;

  public showChildModal():void {
    this.lgModal.show();
  }

  public hideChildModal():void {
    this.lgModal.hide();
  }

}