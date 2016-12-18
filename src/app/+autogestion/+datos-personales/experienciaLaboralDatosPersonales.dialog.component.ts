import { Component, Input,  Output, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {ModalDirective} from "ng2-bootstrap";
import {ExperienciaLaboral} from "../../+personal/+empleado/experienciaLaboral";

declare var $: any;

@Component({
  selector: 'experiencialaboral-datos-personales-dialog-form',
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
              
                <section class="col col-md-12">
                  <label for="RazonSocial">Empresa</label>
                  <label class="input"> 
                        <input type="text" id="empresa" formControlName="RazonSocial" [(ngModel)]="razonSocial" (keyup)="ingresaEmpresa()"/>
                  </label>
                 </section>
                
                <section class="col col-md-6">
                  <label for="Departamento">Departamento</label>
                  <label class="input"> 
                        <input type="text" id="departamento" formControlName="Departamento" [(ngModel)]="departamento" (keyup)="ingresaDepartamento()"/>
                  </label>
                 </section>
                
                <section class="col col-md-6">
                  <label for="Cargo">Cargo</label>
                  <label class="input"> 
                        <input type="text" id="cargo" formControlName="Cargo" [(ngModel)]="cargo" (keyup)="ingresaCargo()"/>
                  </label>
                 </section>
                <section class="col col-md-12">
                  <label for="Descripcion">Descripcion</label>
                  <label class="input"> 
                        <input type="text" formControlName="Descripcion" [(ngModel)]="descripcion"/>
                  </label>
                 </section>
                
                <section class="col col-md-4">
                  <label for="FechaInicio">Fecha Inicio</label>
                  <label class="input"> <i class="icon-append fa fa-calendar"></i>
                        <input type="text" id="fechaInicioExperiencia" placeholder="Seleccionar una Fecha" formControlName="FechaInicio" [(ngModel)]="fechaInicio" (change)="onChangeDateInicio($event)"
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
              
              <div id="dialog-message-exp-laboral" [saJquiDialog]="{
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
							<button class="btn btn-primary" (click)="cerrarDialogExpLaboral()"><i class="fa fa-check"></i>&nbsp;OK</button>
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
export class ExperienciaLaboralDatosPersonalesDialogFormComponent {

  public razonSocial:string;
  public departamento:string;
  public cargo:string;
  public fechaInicio:string;
  public fechaFin:string;
  public descripcion:string;

  dataItem;
  editForm;
  @Input() public set model(dto: ExperienciaLaboral) {
    this.dataItem = dto;
    dto === undefined ? this.lgModal.hide(): this.lgModal.show();
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();


  constructor() {

    this.editForm = new FormGroup({
      'RazonSocial': new FormControl(),
      'Departamento': new FormControl(),
      'Cargo': new FormControl(),
      'Descripcion': new FormControl(),
      'FechaInicio': new FormControl(),
      'FechaFin': new FormControl()
    })

  }

  public active: boolean = false;

  public titulo:string="";

  public mensaje:string;

  public onSave(e): void {
    e.preventDefault();

    if (this.dataItem === undefined)
      this.dataItem = new ExperienciaLaboral(undefined,this.razonSocial,this.departamento,this.cargo, this.descripcion, this.fechaInicio,this.fechaFin);
    else {
      this.dataItem.razonSocial = this.razonSocial;
      this.dataItem.departamento = this.departamento;
      this.dataItem.cargo = this.cargo;
      this.dataItem.descripcion = this.descripcion;
      this.dataItem.fechaInicio = this.fechaInicio;
      this.dataItem.fechaFin = this.fechaFin;

    }

    //validar
    if(this.validarRequerido()){
      this.mensaje = 'Ingrese los campos obligatorios';
      $( '#dialog-message-exp-laboral' ).dialog( "open" );
      return;
    }

    this.save.emit(this.dataItem);
    this.lgModal.hide();
  }
  public onCancel(e): void {
    e.preventDefault();
    this.lgModal.hide();
    this.cancel.emit(undefined);
  }

  public onClose(): void {
    this.lgModal.hide();
    this.cancel.emit(undefined);
  }

  public agregarExperienciaLaboral() {
    this.model = new ExperienciaLaboral();
    this.razonSocial = "";
    this.departamento = "";
    this.cargo = "";
    this.descripcion = "";
    this.fechaInicio = "";
    this.fechaFin = "";

    $('#empresa').parent().removeClass('state-error');
    $('#departamento').parent().removeClass('state-error');
    $('#cargo').parent().removeClass('state-error');
    $('#fechaInicioExperiencia').parent().removeClass('state-error');

    this.active= true;
    this.lgModal.show();
  }

  onChangeDateInicio(value){
    debugger;
    this.fechaInicio = value;

    $('#fechaInicio').parent().removeClass('state-error');


  }

  onChangeDateFin(value){
    debugger;
    this.fechaFin = value;

  }

  ingresaEmpresa(){
    $('#empresa').parent().removeClass('state-error');
  }

  ingresaDepartamento(){
    $('#departamento').parent().removeClass('state-error');
  }

  ingresaCargo(){
    $('#cargo').parent().removeClass('state-error');
  }

  validarRequerido():boolean{
    let validacion = false;

    if(this.razonSocial === undefined || this.razonSocial == null || this.razonSocial=='' ){
      $('#empresa').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }
    if(this.departamento === undefined || this.departamento == null || this.departamento==''){
      $('#departamento').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }

    if(this.cargo === undefined || this.cargo == null || this.cargo==''){
      $('#cargo').parent().addClass('state-error').removeClass('state-success');
      validacion = true;
    }

    if(this.fechaInicio === undefined || this.fechaInicio == null || this.fechaInicio==''){
      $('#fechaInicioExperiencia').parent().addClass('state-error').removeClass('state-success');
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

  cerrarDialogExpLaboral(){
    this.mensaje = '';
    $( '#dialog-message-exp-laboral' ).dialog( "close");

  }

}