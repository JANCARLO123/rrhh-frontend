import { Component, Input,  Output, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {forEach} from "@angular/router/src/utils/collection";

import {ModalDirective} from "ng2-bootstrap";
import {Dependiente} from "../../+personal/+empleado/dependiente";
import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";

declare var $: any;

@Component({
  selector: 'dependiente-dialog-form',
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
            
                <section class="col col-md-12">
                  <label for="NombreDependiente">Nombre</label>
                  <label class="input"> 
                        <input type="text" id="nombreDependiente" formControlName="NombreDependiente" [(ngModel)]="nombreDependiente"/>
                  </label>
                 </section>
              
                <section class="col col-md-6">
                  <label for="ApellidoPaternoDependiente">Apellido Paterno</label>
                  <label class="input"> 
                        <input type="text" id="apellidoPaternoDependiente" formControlName="ApellidoPaternoDependiente" [(ngModel)]="apellidoPaternoDependiente"/>
                  </label>
                 </section>
                
                <section class="col col-md-6">
                  <label for="ApellidoMaternoDependiente">Apellido Materno</label>
                  <label class="input"> 
                        <input type="text" id="apellidoMaternoDependiente" formControlName="ApellidoMaternoDependiente" [(ngModel)]="apellidoMaternoDependiente"/>
                  </label>
                 </section>
                 
                 <section class="col col-md-6">
                  <label for="TipoDocumentoDependiente">Tipo Documento</label>
                  <label class="input"> 
                        <kendo-dropdownlist id="tipoDocumentoDependiente" [data]="tiposDocumento" formControlName="TipoDocumentoDependiente" [(value)]="tipoDocumentoDependiente" [valuePrimitive]="true" [defaultItem]="defaultItem" [textField]="'nombre'" [valueField]="'codigo'" style="width: 100%;"></kendo-dropdownlist>
                  </label>
                 </section>
                
                <section class="col col-md-6">
                  <label for="NumeroDocumentoDependiente">Numero Documento</label>
                  <label class="input"> 
                        <input type="text" id="numeroDocumentoDependiente" formControlName="NumeroDocumentoDependiente" [(ngModel)]="numeroDocumentoDependiente"/>
                  </label>
                 </section>
                                
                <section class="col col-md-6">
                  <label for="RelacionDependiente">Relacion</label>
                  <label class="input"> 
                        <kendo-dropdownlist id="relacionDependiente" [data]="relacionesDependiente" formControlName="RelacionDependiente" [(value)]="relacionDepediente" [valuePrimitive]="true" [defaultItem]="defaultItem" [textField]="'nombre'" [valueField]="'codigo'" style="width: 100%;"></kendo-dropdownlist>
                  </label>
                 </section>
                 <section class="col col-md-6">
                  <label for="FechaNacimientoDependiente">Fecha Nacimiento</label>
                  <label class="input"> <i class="icon-append fa fa-calendar"></i>
                        <input type="text" placeholder="Seleccionar una Fecha" formControlName="FechaNacimientoDependiente" [(ngModel)]="fechaNacimientoDepediente" (change)="onChangeDateNacimiento($event)"
                               saUiDatepicker date-format="dd/mm/yy" />
                  </label>
                 </section>
                
              </div>
              
              <div id="dialog-message-dependiente" [saJquiDialog]="{
								autoOpen: false,
								modal: true,
								resizable: false
							  }">
						<!-- dialog header // removing on compile-->
						<div data-dialog-title="">
							<div class="widget-header"><h4><i class="icon-ok"></i> Informacion</h4></div>
						</div>


						<p>
							{{mensaje}}
						</p>

						<div class="hr hr-12 hr-double"></div>

						<div data-dialog-buttons="">
							<button class="btn btn-primary" (click)="cerrarDialogDependiente()"><i class="fa fa-check"></i>&nbsp;OK</button>
						</div>

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
export class DependienteDialogFormComponent {

  public nombreDependiente:string;
  public apellidoPaternoDependiente:string;
  public apellidoMaternoDependiente:string;
  public tipoDocumentoDependiente:string;
  public nombreTipoDocumentoDependiente:string;
  public numeroDocumentoDependiente:string;
  public fechaNacimientoDepediente:string;
  public relacionDepediente:string;
  public nombreRelacionDepediente:string;

  public mensaje:string;

  dataItem;
  editForm;
  @Input() public set model(dto: Dependiente) {
    this.dataItem = dto;
    dto === undefined ?  this.lgModal.hide():  this.lgModal.show();
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();


  public tiposDocumento:TablaGeneralDto[];

  public relacionesDependiente:TablaGeneralDto[];
  errorMessage: string;

  public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};
  
  constructor(private empleadoService:EmpleadoService) {
    this.editForm = new FormGroup({
      'NombreDependiente': new FormControl(),
      'ApellidoPaternoDependiente': new FormControl(),
      'ApellidoMaternoDependiente': new FormControl(),
      'TipoDocumentoDependiente': new FormControl(),
      'NumeroDocumentoDependiente': new FormControl(),
      'FechaNacimientoDependiente': new FormControl(),
      'RelacionDependiente': new FormControl()
    })

  }

  public active: boolean = false;

  public tituloCabecera:string="";

  public onSave(e): void {
    e.preventDefault();

    for(var item in this.tiposDocumento){
      var data = this.tiposDocumento[item];
      if(this.tipoDocumentoDependiente===data.codigo){
        this.nombreTipoDocumentoDependiente = data.nombre;
        break;
      }
    }

    for(var item in this.relacionesDependiente){
      var data = this.relacionesDependiente[item];
      if(this.relacionDepediente===data.codigo){
        this.nombreRelacionDepediente = data.nombre;
        break;
      }
    }

    if (this.dataItem === undefined)
      this.dataItem = new Dependiente(undefined,this.nombreDependiente,this.apellidoPaternoDependiente,this.apellidoMaternoDependiente, this.relacionDepediente, this.tipoDocumentoDependiente,
                                      this.numeroDocumentoDependiente, this.fechaNacimientoDepediente,this.nombreRelacionDepediente, this.nombreTipoDocumentoDependiente);
    else {
      this.dataItem.nombre = this.nombreDependiente;
      this.dataItem.apellidoPaterno = this.apellidoPaternoDependiente;
      this.dataItem.apellidoMaterno = this.apellidoMaternoDependiente;
      this.dataItem.relacion = this.relacionDepediente;
      this.dataItem.tipoDocumento = this.tipoDocumentoDependiente;
      this.dataItem.numeroDocumento = this.numeroDocumentoDependiente;
      this.dataItem.fechaNacimiento = this.fechaNacimientoDepediente;
      this.dataItem.nombreRelacion = this.nombreRelacionDepediente;
      this.dataItem.nombreTipoDocumento = this.nombreTipoDocumentoDependiente;
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

  public agregarDependiente() {
    this.obtenerTipoDocumento();
    this.obtenerRelacionDependiente();

    this.model = new Dependiente();
    this.nombreDependiente = "";
    this.apellidoPaternoDependiente = "";
    this.apellidoMaternoDependiente = "";
    this.relacionDepediente = "";
    this.tipoDocumentoDependiente = "";
    this.numeroDocumentoDependiente = "";
    this.fechaNacimientoDepediente = "";
    this.nombreRelacionDepediente = "";
    this.nombreTipoDocumentoDependiente = "";

    /*$('#empresa').parent().removeClass('state-error');
    $('#departamento').parent().removeClass('state-error');
    $('#fechaInicio').parent().removeClass('state-error');
*/
    this.active = true;
    this.lgModal.show();
  }

  ingresaInstitucion(){
    /*$('#institucion').removeClass('state-error');
    $('#institucion').parent().removeClass('state-error');*/
  }

  validarRequerido():boolean{
    let validacion = false;

    /*if(this.nivelEducacion === undefined || this.nivelEducacion == null || this.nivelEducacion=='' ){
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
    }*/

    return validacion;
  }

  public obtenerTipoDocumento() {
    this.empleadoService.completarComboBox('obtenerTipoDocumento').subscribe(
        tablaGeneralDto => this.tiposDocumento = tablaGeneralDto,
        error =>  this.errorMessage = <any>error);
  }

  public obtenerRelacionDependiente() {
    this.empleadoService.completarComboBox('obtenerRelacionDependiente').subscribe(
        tablaGeneralDto => this.relacionesDependiente = tablaGeneralDto,
        error =>  this.errorMessage = <any>error);
  }

  onChangeDateNacimiento(value){
    this.fechaNacimientoDepediente = value;
  }


  @ViewChild('lgModal') public lgModal:ModalDirective;

  public showChildModal():void {
    this.lgModal.show();
  }

  public hideChildModal():void {
    this.lgModal.hide();
  }

  cerrarDialogDependiente(){
    this.mensaje = '';
    $( '#dialog-message-dependiente' ).dialog( "close");

  }

}