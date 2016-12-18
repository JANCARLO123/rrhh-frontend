import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {ViewChild} from "@angular/core/src/metadata/di";
import {ModalDirective} from "ng2-bootstrap";
import {HttpModule} from '@angular/http';

import { Location } from '@angular/common';

import { HistoriaLaboralService } from './http-historiaLaboral-service';
import { HistoriaLaboralDto } from './historiaLaboralDto';
//Empleado
import {EmpleadoService} from "../+empleado/empleado.service";
import {Empleado} from "../+empleado/empleado";
import {RolDto} from "../+empleado/RolDto";
import {RoleNameDto} from "../../+dtos/roleNameDto";
import {EnumRolEmpleado} from "../../+enums/EnumRolEmpleado";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";

@Component({
  selector: 'sa-empleado-historiaLaboral',
  templateUrl: 'historiaLaboral.component.html',
  providers: [HttpModule]
})
export class HistoriaLaboralComponent implements OnInit {

  public empleado:Empleado= new Empleado();
  localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

  constructor(private router: Router,
              private empleadoService:EmpleadoService,
              private location: Location,
              private historiaLaboralService: HistoriaLaboralService) {

    this.empleado = this.empleadoService.retrieveSessionStorage('entityHistorialTrabajo');

    this.localStorageValue = this.empleadoService.retrieveDataLocalStorage();

    if(this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.RHANA] || this.localStorageValue.rolName == EnumRolEmpleado[EnumRolEmpleado.ADMIN]){
      this.localStorageValue.mostrarBoton = true;
    }
  }

  historiaLaboral: HistoriaLaboralDto[];
  dataItemHistorial: HistoriaLaboralDto;
  public errorMessage: string;

  onRegresarVerEmpleado(){
        this.router.navigate(['/personal/verEmpleado']);
  }

  
  public onEdit(dataItem: any): void {
    debugger;
    this.empleadoService.storeSessionStorage('entityEditHistoriaLaboral',dataItem);
    this.router.navigate(['/personal/editarCargo']);
  }
  onDelete(dataItem: any): void {
    debugger;
    let idHistorialLaboral = dataItem.idHistorialLaboral;
     
    this.historiaLaboralService.eliminarHistorialLaboral(idHistorialLaboral).subscribe(
      historiaLaboralDto => this.historiaLaboral = historiaLaboralDto,
      error => this.errorMessage = <any>error
    );
    location.reload();
  }

  public onNuevoCargo(): void {
    this.empleadoService.storeSessionStorage('entityEditHistoriaLaboral',this.empleado);
    this.router.navigate(['/personal/nuevoCargo'])
  }

  ngOnInit() {
    this.getGrid_HistoriaLaboral();
    
  }

  getGrid_HistoriaLaboral() {
  let idEmpleado = this.empleado.idEmpleado;
  this.historiaLaboralService.completar_Grid_Historia_Laboral(idEmpleado).subscribe(
      historiaLaboralDto => this.historiaLaboral = historiaLaboralDto,
      error => this.errorMessage = <any>error
    );
    
  }

  getGrid_HistoriaLaboral2(): void {
  let idEmpleado = this.empleado.idEmpleado;

  debugger;
  this.historiaLaboralService.completar_Grid_Historia_Laboral2(idEmpleado).then(
      historiaLaboralDto => this.historiaLaboral = historiaLaboralDto,
      error => this.errorMessage = <any>error
    );
    
  }
}