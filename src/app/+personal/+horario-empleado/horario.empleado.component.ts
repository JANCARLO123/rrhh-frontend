import {Component, OnInit, EventEmitter,ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router, ActivatedRoute} from "@angular/router";
import {PermisoEmpleado} from "../../+personal/+empleado/permisoEmpleado";
import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {Empleado} from "../../+personal/+empleado/empleado";
import {GridDataResult, PageChangeEvent} from "@progress/kendo-angular-grid";
import {HorarioDia} from "../../+gestion-tiempo/+administrar-horario/horarioDia";
import {EmpleadoService} from "../+empleado/empleado.service";
import {HorarioEmpleado} from "../+empleado/horarioEmpleado";


declare var $: any;

@Component({
  selector: 'sa-horario-empleado',
  templateUrl: 'horario.empleado.component.html',
  providers: []
})
export class HorarioEmpleadoComponent implements OnInit {

    public defaultItem:TablaGeneralDto={codigo:null,nombre:'Seleccionar'};

    private motivos:TablaGeneralDto[];

    private permisoEmpleado:PermisoEmpleado = new PermisoEmpleado();

    private isCompensarhoras:boolean=true;

    private errorMessage:string;

    private gridView: GridDataResult;
    private pageSize: number = 10;
    private data: Object[];
    private skip: number = 0;

    public mensaje:string;

    public horarioDias:HorarioDia[]=[];

    private empleado:Empleado = new Empleado();

    private horariosEmpleado:HorarioEmpleado[]=[];

    constructor(private route:ActivatedRoute, private _router: Router, private empleadoService:EmpleadoService) {

        let empleado:Empleado = empleadoService.retrieveData();


        //busqueda los horarios del empleado

        this.horarioDias= [new HorarioDia(-1,'LU','Lunes','Si',1,'08:00','17:30'),
            new HorarioDia(-2,'MA','Martes','Si',1,'08:00','17:30'),
            new HorarioDia(-3,'MI','Miercoles','Si',1,'08:00','17:30'),
            new HorarioDia(-4,'JU','Jueves','Si',1,'08:00','17:30'),
            new HorarioDia(-5,'VI','Viernes','Si',1,'08:00','17:30'),
            new HorarioDia(-6,'SA','Sabado','No',1,'08:00','17:30'),
            new HorarioDia(-7,'DO','Domingo','No',1,'08:00','17:30')];


        this.verHorarioEmpleado(empleado);

        this.empleado=empleado;
    }

    onRegresarVerEmpleado(){
        this.empleadoService.storeData(this.empleado);
        this._router.navigate(['/personal/verEmpleado']);
    }

    onNuevoHorarioEmpleado(){
        this.empleadoService.storeData(this.empleado);
        this.empleadoService.storeDataHorarioEmpleado(new HorarioEmpleado());
        this._router.navigate(['/personal/administrarHorarioEmpleado']);
    }


    onEditarHorarioEmpleado(dataItem:HorarioEmpleado){
        this.empleadoService.storeData(this.empleado);
        this.empleadoService.storeDataHorarioEmpleado(dataItem);
        this._router.navigate(['/personal/administrarHorarioEmpleado']);
    }


    ngOnInit() {
    }

    verHorarioEmpleado(empleado: Empleado){
        this.empleadoService.verHorariosEmpleado(empleado).subscribe(
            data => this.horariosEmpleado = data,
            error => this.errorMessage = <any>error
        );
    }

    protected pageChangeMarcaciones(event: PageChangeEvent): void {
        this.skip = event.skip;
        //this.obtenerHorarios();

    }


    cerrarDialog(){
        this.mensaje = '';
        $( '#dialog-message' ).dialog( "close" );
    }

}
