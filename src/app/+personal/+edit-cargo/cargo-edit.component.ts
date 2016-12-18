import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Rx';

import { HttpModule } from '@angular/http';

import { Moneda } from '../+cargo/moneda';
import { CargoService } from '../+cargo/http-empleados-service';
import { Cargo } from '../+cargo/cargo';

import { HistoriaLaboralDto } from '../+historiaLaboral/historiaLaboralDto';
import { HistoriaLaboralService } from '../+historiaLaboral/http-historiaLaboral-service';
import {EmpleadoService} from "../+empleado/empleado.service";

@Component({
  selector: 'sa-empleado-cargo-detail',
  templateUrl: 'cargo-edit.component.html',
  providers: [HttpModule, CargoService]
})
export class EditCargoComponent implements OnInit {

  public historiaLaboral:HistoriaLaboralDto= new HistoriaLaboralDto();
  public errorMessage: string;
  public monedas: Moneda[];
  @Input() cargoEditForm: Cargo;
  @Output() close = new EventEmitter();

  private view: Array<HistoriaLaboralDto>=[];

  error: any;
  navigated = false; // true if navigated here

  constructor(
            private historiaLaboralService: HistoriaLaboralService,
            private cargoService: CargoService,
            private empleadoService:EmpleadoService,
            private route: ActivatedRoute,
            private router: Router,
            private location: Location) {

    this.historiaLaboral = this.empleadoService.retrieveSessionStorage('entityEditHistoriaLaboral');
  }

  ngOnInit() {

    this.getMonedas();

  }

  getMonedas() {
    this.cargoService.completarComboMoneda().subscribe(
      monedaDto => this.monedas = monedaDto,
      error => this.errorMessage = <any>error
    );
  }

  onChangeIniDate(e) {

    this.historiaLaboral.desdeFecha = e;

  }

  onChangeFinDate(e) {

    this.historiaLaboral.hastaFecha = e;

  }

  public onGuardarCargo(historiaLaboral: HistoriaLaboralDto): void{
    debugger;
    this.historiaLaboralService.updateCargo(this.historiaLaboral).subscribe(
      data => {
          debugger;
          this.historiaLaboral = new HistoriaLaboralDto();
      },
      error => console.log(error)
    );
    
    this.goBack();
  }

  public crearCargo(data: HistoriaLaboralDto): Observable<HistoriaLaboralDto[]>{

    return this.fetch("create", data);
  }

  public editarCargo(data: HistoriaLaboralDto): Observable<HistoriaLaboralDto[]>{
    return this.fetch("update", data);
  }

  private fetch(action: string = "", data?: HistoriaLaboralDto): Observable<HistoriaLaboralDto[]>  {
        debugger;
        if(action=="create"){
            var documento : HistoriaLaboralDto = (JSON.parse(JSON.stringify(data)));
            this.view.push(documento);
        }else if(action=="update"){
            var indice = this.view.indexOf(data);
            if(indice>=0)
                this.view[indice]  = (JSON.parse(JSON.stringify(data)));
        }

        return Observable.of(this.view);
    }


  goBack(): void {
    this.location.back();
  }

}