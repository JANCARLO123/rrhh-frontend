import { Component, Input,  Output, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {EmpleadoService} from './empleado.service';

import {TablaGeneralDto} from './tablaGeneralDto';
import {Educacion} from "./educacion";
import {forEach} from "@angular/router/src/utils/collection";

import {ModalDirective} from "ng2-bootstrap";
import {NotificationsService} from "angular2-notifications/src/notifications.service";

declare var $: any;

@Component({
  selector: 'educacion-dialog-form',
  template: `

    <div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" (click)="onClose()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">{{tituloCabecera}}</h4>
        </div>
        <div class="modal-body">
        
          <form [formGroup]="editForm" class="smart-form">
            
            <div class="row">
              
                <section class="col col-md-6">
                  <label for="NivelEducacion">Nivel Educacion<span style="color: red">*</span></label>
                  <label class="input"> 
                        <kendo-dropdownlist id="nivelEducacion" [data]="nivelesEducacion" formControlName="NivelEducacion" [(value)]="nivelEducacion" [valuePrimitive]="true" [defaultItem]="defaultItem" [textField]="'nombre'" [valueField]="'codigo'" style="width: 100%;"></kendo-dropdownlist>
                  </label>
                 </section>
                
                <section class="col col-md-6">
                  <label for="Institucion">Institucion<span style="color: red">*</span></label>
                  <label class="input"> 
                        <input type="text" id="institucion" formControlName="Institucion" [(ngModel)]="institucion" (keyup)="ingresaInstitucion()"/>
                  </label>
                 </section>
                
                <section class="col col-md-12">
                  <label for="Titulo">Titulo</label>
                  <label class="input"> 
                        <input type="text" formControlName="Titulo" [(ngModel)]="titulo"/>
                  </label>
                 </section>
                <section class="col col-md-12">
                  <label for="Descripcion">Descripcion</label>
                  <label class="input"> 
                        <input type="text" formControlName="Descripcion" [(ngModel)]="descripcion"/>
                  </label>
                 </section>
                
                <section class="col col-md-4">
                  <label for="FechaInicio">Fecha Inicio<span style="color: red">*</span></label>
                  <label class="input"> <i class="icon-append fa fa-calendar"></i>
                        <input type="text" id="fechaInicio" placeholder="Seleccionar una Fecha" formControlName="FechaInicio" [(ngModel)]="fechaInicio" (change)="onChangeDateInicio($event)"
                               saUiDatepicker date-format="dd/mm/yy" />
                  </label>
                 </section>
                 <section class="col col-md-4">
                  <label for="FechaFin">Fecha Fin</label>
                  <label class="input"> <i class="icon-append fa fa-calendar"></i>
                        <input type="text" placeholder="Seleccionar una Fecha" formControlName="FechaFin" [(ngModel)]="fechaFin" (change)="onChangeDateFin($event)"
                               saUiDatepicker date-format="dd/mm/yy" />
                  </label>
                 </section>
                
              </div>
              
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
export class EducacionDialogFormComponent {

  public nivelEducacion:string;
  public nombreNivelEducacion:string;
  public institucion:string;
  public fechaInicio:string;
  public fechaFin:string;
  public titulo:string;
  public descripcion:string;

  public mensaje:string;

  public mostrarAlertaEducacion:boolean=false;

  dataItem;
  editForm;
  @Input() public set model(dto: Educacion) {
    this.dataItem = dto;
    dto === undefined ?  this.lgModal.hide():  this.lgModal.show();;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  public nivelesEducacion:TablaGeneralDto[];
  errorMessage: string;

  public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};
  
  constructor(private empleadoService:EmpleadoService,private _service: NotificationsService) {
    this.editForm = new FormGroup({
      'NivelEducacion': new FormControl(),
      'Institucion': new FormControl(),
      'FechaInicio': new FormControl(),
      'FechaFin': new FormControl(),
      'Titulo': new FormControl(),
      'Descripcion': new FormControl()
    })

  }

  public active: boolean = false;

  public tituloCabecera:string="";

  public onSave(e): void {
    e.preventDefault();

    this.mostrarAlertaEducacion=false;

    for(var item in this.nivelesEducacion){
      var data = this.nivelesEducacion[item];
      if(this.nivelEducacion===data.codigo){
        this.nombreNivelEducacion = data.nombre;
        break;
      }
    }

    if (this.dataItem === undefined)
      this.dataItem = new Educacion(undefined,this.nivelEducacion,this.institucion,this.titulo, this.descripcion, this.fechaInicio,this.fechaFin, this.nombreNivelEducacion);
    else {
      this.dataItem.nivelEducacion = this.nivelEducacion;
      this.dataItem.institucion = this.institucion;
      this.dataItem.titulo = this.titulo;
      this.dataItem.descripcion = this.descripcion;
      this.dataItem.fechaInicio = this.fechaInicio;
      this.dataItem.fechaFin = this.fechaFin;
      this.dataItem.nombreNivelEducacion = this.nombreNivelEducacion;

    }

    if(this.validarRequerido()){
      this.mostrarAlertaEducacion=true;
      this._service.error("Error", 'Ingrese los campos obligatorios.');
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

  public closeAlertEducacion(value){
    this.mostrarAlertaEducacion = false;
  }

  public agregarEducacion() {
    this.obtenerNivelEducacion();
    this.model = new Educacion();
    this.nivelEducacion = "";
    this.institucion = "";
    this.titulo = "";
    this.descripcion = "";
    this.fechaInicio = "";
    this.fechaFin = "";
    this.nombreNivelEducacion = "";

    $('#empresa').parent().removeClass('state-error');
    $('#departamento').parent().removeClass('state-error');
    $('#fechaInicio').parent().removeClass('state-error');

    this.active = true;
    this.lgModal.show();
  }

  ingresaInstitucion(){
    $('#institucion').removeClass('state-error');
    $('#institucion').parent().removeClass('state-error');
  }

  validarRequerido():boolean{
    let validacion = false;

    if(this.nivelEducacion === undefined || this.nivelEducacion == null || this.nivelEducacion=='' ){
      $('#nivelEducacion').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }
    if(this.institucion === undefined || this.institucion == null || this.institucion==''){
      $('#institucion').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }
    if(this.fechaInicio === undefined || this.fechaInicio == null || this.fechaInicio==''){
      $('#fechaInicio').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }

    return validacion;
  }

  public obtenerNivelEducacion() {
    this.empleadoService.completarComboBox('obtenerNivelEducacion').subscribe(
        tablaGeneralDto => this.nivelesEducacion = tablaGeneralDto,
        error =>  this.errorMessage = <any>error);
  }

  onChangeDateInicio(value){
    this.fechaInicio = value;
    $('#fechaInicio').removeClass('state-error');
    $('#fechaInicio').parent().removeClass('state-error');

  }

  onChangeDateFin(value){
    this.fechaFin = value;

  }

  @ViewChild('lgModal') public lgModal:ModalDirective;

  public showChildModal():void {
    this.lgModal.show();
  }

  public hideChildModal():void {
    this.lgModal.hide();
  }

}