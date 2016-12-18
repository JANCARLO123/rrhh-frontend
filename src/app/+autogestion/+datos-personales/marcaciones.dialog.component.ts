import { Component, Input,  Output, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


import {ModalDirective} from "ng2-bootstrap";
import {EmpleadoService} from "../../+personal/+empleado/empleado.service";
import {PermisoService} from "../+solicitar-permiso/permiso.service";
import {Notificacion} from "../../+personal/+empleado/notificacion";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {Marcacion} from "../../+personal/+empleado/marcacion";

declare var $: any;

@Component({
  selector: 'marcacion-dialog-form',
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
              <fieldset>
                <div class="col-md-12">
                
                    <section class="col col-md-4">
                      <label for="Empleado">Empleado</label>
                      <label class="input"> 
                            <input type="text" formControlName="Empleado" [(ngModel)]="nombreEmpleado" disabled="disabled" />
                      </label>
                     </section>
                
                    <section class="col col-md-4">
                      <label for="Proyecto">Proyecto</label>
                      <label class="input"> 
                            <input type="text" formControlName="Proyecto" [(ngModel)]="nombreProyecto" disabled="disabled"/>
                      </label>
                     </section>
                </div>
              
              </fieldset>
              
              <fieldset>
                <div class="col-md-12">
                
                    <section class="col col-md-4">
                      <label for="FechaMarcacion">Fecha</label>
                      <label class="input"> 
                            <input type="text" formControlName="FechaMarcacion" [(ngModel)]="fechaMarcacion" disabled="disabled" />
                      </label>
                     </section>
                </div>
                <div class="col-md-12">
                    <section class="col col-md-3">
                      <label for="HoraIngreso">Hora Ingreso</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraIngreso" [(ngModel)]="horaIngreso" disabled="disabled"/>
                      </label>
                    </section>
                    <section class="col col-md-3">
                      <label for="HoraInicioAlmuerzo">Hora Inicio Almuerzo</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraInicioAlmuerzo" [(ngModel)]="horaInicioAlmuerzo" disabled="disabled"/>
                      </label>
                    </section>
                    <section class="col col-md-3">
                      <label for="HoraFinAlmuerzo">Hora Fin Almuerzo</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraFinAlmuerzo" [(ngModel)]="horaFinAlmuerzo" disabled="disabled"/>
                      </label>
                    </section>
                    <section class="col col-md-3">
                      <label for="HoraSalida">Hora Salida</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraSalida" [(ngModel)]="horaSalida" disabled="disabled"/>
                      </label>
                    </section>
                </div>
              
              </fieldset>
              
              
              <fieldset>
                
                <div class="col-md-12">
                    <section class="col col-md-1">
                      <label for="CheckIngreso">Cambiar</label>
                      <label class="select"> 
                            <input type="checkbox" formControlName="CheckIngreso">
                      </label>
                    </section>
                    <section class="col col-md-3">
                      <label for="HoraIngresoCambio">Hora Ingreso</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraIngresoCambio"/>
                      </label>
                    </section>
                    <section class="col col-md-8">
                      <label for="RazonCambioIngreso">Razon del cambio</label>
                      <label class="input"> 
                            <input type="text" formControlName="RazonCambioIngreso"/>
                      </label>
                    </section>
                </div>
                                
                <div class="col-md-12">
                    <section class="col col-md-1">
                      <label for="CheckInicioAlmuerzo">Cambiar</label>
                      <label class="select"> 
                            <input type="checkbox" formControlName="CheckInicioAlmuerzo">
                      </label>
                    </section>
                    <section class="col col-md-3">
                      <label for="HoraInicioAlmuerzoCambio">Hora Inicio Almuerzo</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraInicioAlmuerzoCambio"/>
                      </label>
                    </section>
                    <section class="col col-md-8">
                      <label for="RazonCambioInicioAlmuerzo">Razon del cambio</label>
                      <label class="input"> 
                            <input type="text" formControlName="RazonCambioInicioAlmuerzo"/>
                      </label>
                    </section>
                </div>
                
                
                <div class="col-md-12">
                    <section class="col col-md-1">
                      <label for="CheckFinAlmuerzo">Cambiar</label>
                      <label class="select"> 
                            <input type="checkbox" formControlName="CheckFinAlmuerzo">
                      </label>
                    </section>
                    <section class="col col-md-3">
                      <label for="HoraFinAlmuerzoCambio">Hora Fin Almuerzo</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraFinAlmuerzoCambio"/>
                      </label>
                    </section>
                    <section class="col col-md-8">
                      <label for="RazonCambioFinAlmuerzo">Razon del cambio</label>
                      <label class="input"> 
                            <input type="text" formControlName="RazonCambioFinAlmuerzo"/>
                      </label>
                    </section>
                </div>
                                
                <div class="col-md-12">
                    <section class="col col-md-1">
                      <label for="CheckSalida">Cambiar</label>
                      <label class="select"> 
                            <input type="checkbox" formControlName="CheckSalida">
                      </label>
                    </section>
                    <section class="col col-md-3">
                      <label for="HoraSalidaCambio">Hora Ingreso</label>
                      <label class="input"> 
                            <input type="text" formControlName="HoraSalidaCambio"/>
                      </label>
                    </section>
                    <section class="col col-md-8">
                      <label for="RazonCambioSalida">Razon del cambio</label>
                      <label class="input"> 
                            <input type="text" formControlName="RazonCambioSalida"/>
                      </label>
                    </section>
                </div>
              
              </fieldset>
            
              </div>
              
              <div id="dialog-message-marcacion" [saJquiDialog]="{
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
							<button class="btn btn-primary" (click)="cerrarDialogMarcacion()"><i class="fa fa-check"></i>&nbsp;OK</button>
						</div>

					</div>
          </form>
          
          </div>
               
          <div class="modal-footer">
                <a (click)="onSolicitarCambioMarcacion($event)" class="btn btn-primary"><i class="fa  fa-sign-out"></i> Guardar</a>
				<a (click)="onCancel($event)" class="btn btn-default"><i class="fa fa-arrow-circle-left"></i> Cancelar</a>
          </div>
          
          </div>
    </div>
  </div>
    `
})
export class MarcacionesDialogFormComponent {

  public nombreEmpleado:string;
  public nombreProyecto:string;
  public fechaMarcacion:string;
  public horaIngreso:string;
  public horaInicioAlmuerzo:string;
  public horaFinAlmuerzo:string;
  public horaSalida:string;

  public mensaje:string;


  dataItemMarcacion:Marcacion;
  editForm;

  @Input() public set model(dto: Marcacion) {
    this.dataItemMarcacion = dto;
    dto === undefined ?  this.lgModal.hide():  this.lgModal.show();
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();


  errorMessage: string;

  constructor(private empleadoService:EmpleadoService, private permisoService:PermisoService) {

    this.editForm = new FormGroup({
      'Empleado': new FormControl(),
      'Proyecto': new FormControl(),
      'FechaMarcacion': new FormControl(),
      'HoraIngreso': new FormControl(),
      'HoraInicioAlmuerzo': new FormControl(),
      'HoraFinAlmuerzo': new FormControl(),
      'HoraSalida': new FormControl(),
      'CheckIngreso': new FormControl(),
      'RazonCambioIngreso': new FormControl(),
      'HoraIngresoCambio': new FormControl(),
      'CheckInicioAlmuerzo': new FormControl(),
      'RazonCambioInicioAlmuerzo': new FormControl(),
      'HoraInicioAlmuerzoCambio': new FormControl(),
      'CheckFinAlmuerzo': new FormControl(),
      'RazonCambioFinAlmuerzo': new FormControl(),
      'HoraFinAlmuerzoCambio': new FormControl(),
      'CheckSalida': new FormControl(),
      'RazonCambioSalida': new FormControl(),
      'HoraSalidaCambio': new FormControl()
    })

  }

  public active: boolean = false;

  public tituloCabecera:string="";


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


  onSolicitarCambioMarcacion(e){

    /*this.dataItemVacacion.fechaInicio = this.fechaDesde;
    this.dataItemVacacion.fechaFin = this.fechaHasta;
    this.dataItemVacacion.estado = this.estado;

    let periodoEmpleado:PeriodoEmpleado = new PeriodoEmpleado();
    periodoEmpleado.idPeriodoEmpleado = this.dataItemVacacion.idPeriodoEmpleado;

    this.dataItemVacacion.periodoEmpleado = periodoEmpleado;
*/


    /*this.permisoService.actualizarPermisoEmpleadoDatosPersonales(this.dataItemPermisoEmpleado).subscribe(
        data => {
          this.guardarFilaGrilla(data);
        },
        error => console.log(error)

    );*/

  }

  guardarFilaGrilla(notificacion:Notificacion){
    if(notificacion.codigo == 1){
      this.save.emit(this.dataItemMarcacion);
      this.active = false;
      this.lgModal.hide();
    }else{
      this.active = false;
      this.lgModal.hide();
      this.cancel.emit(undefined);

    }
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

  @ViewChild('lgModal') public lgModal:ModalDirective;

  public showChildModal():void {
    this.lgModal.show();
  }

  public hideChildModal():void {
    this.lgModal.hide();
  }

  cerrarDialogMarcacion(){
    this.mensaje = '';
    $( '#dialog-message-marcacion' ).dialog( "close");

  }

}