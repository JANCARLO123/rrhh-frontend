import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ModalDirective} from "ng2-bootstrap";

import {SuccessEvent, FileValidation} from "@progress/kendo-angular-upload";
import {Adjunto} from "./adjunto";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'foto-form',
  template:`
    <div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" (click)="onClose()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">Foto Empleado</h4>
        </div>
        <div class="modal-body">
        
          <form [formGroup]="editForm" class="smart-form">
            
            <div class="row">
            
                 
                 <section class="col col-md-12">
                  <label for="Imagen">Imagen</label>
                  <label class="input"> 
                        <kendo-upload [saveUrl]="uploadSaveUrl" [removeUrl]="uploadRemoveUrl" [multiple]="false" [validation]="uploadValidation" (success)="onSuccessUpload($event)"></kendo-upload>
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
export class FotoFormComponent {

  localhost:  String = environment.backend;
  port: String = environment.port;

  public uploadSaveUrl:string = 'http://'+this.localhost+':'+ this.port +'/empleado/cargarArchivoDocumento';
  public uploadRemoveUrl:string = 'http://'+this.localhost+':'+ this.port +'/empleado/eliminarArchivoDocumento';

  public uploadValidation:FileValidation = {allowedExtensions:[".jpg",".png"], maxFileSize: 8388608};

  public file:Adjunto;
  editForm;


  @Input() public set model(dto: Adjunto) {
    this.file = dto;
    dto === undefined ? this.lgModal.hide(): this.lgModal.show();
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.editForm = new FormGroup({
      'Imagen': new FormControl()
    })
  }

  public active: boolean = false;

  public titulo:string="";

  public onSuccessUpload(event:SuccessEvent){
    debugger;
    this.file = event.response.json();
  }

  public onSave(e): void {
    e.preventDefault();
    debugger;

    this.save.emit(this.file);
    this.active = false;
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

  public subirImagen() {
    this.model = new Adjunto();
    this.lgModal.show();
  }

  @ViewChild('lgModal') public lgModal:ModalDirective;

  public showChildModal():void {
    this.lgModal.show();
  }

  public hideChildModal():void {
    this.lgModal.hide();
  }
}