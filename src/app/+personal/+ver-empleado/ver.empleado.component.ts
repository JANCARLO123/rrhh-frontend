import {Component, OnInit} from "@angular/core";
import {PageChangeEvent} from "@progress/kendo-angular-grid";
import {TablaGeneralDto} from "../+empleado/tablaGeneralDto";
import {CentroCostoDto} from "../+empleado/centroCostoDto";
import {PaisDto} from "../+empleado/paisDto";
import {DepartamentoDto} from "../+empleado/departamentoDto";
import {EmpleadoService} from "../+empleado/empleado.service";
import {PaisService} from "../+empleado/pais.service";
import {Empleado} from "../+empleado/empleado";
import {DocumentoEmpleado} from "../+empleado/documentoEmpleado";
import {ActivatedRoute, Router} from "@angular/router";
import {Educacion} from "../+empleado/educacion";
import {ExperienciaLaboral} from "../+empleado/experienciaLaboral";
import {EquipoEntregado} from "../+empleado/equipoEntregado";
import {Dependiente} from "../+empleado/dependiente";
import {Licencia} from "../+empleado/licencia";
import {HorarioEmpleado} from "../+empleado/horarioEmpleado";
import {HistoriaLaboralDto} from "../+historiaLaboral/historiaLaboralDto";
import {PeriodoEmpleado} from "../+empleado/periodoEmpleado";
import {PermisoEmpleado} from "../+empleado/permisoEmpleado";
import {Vacacion} from "../+empleado/Vacacion";

declare var $: any;

@Component({
  selector: 'sa-ver-empleado',
  templateUrl: 'ver.empleado.component.html',
  providers: [PaisService]
})
export class VerEmpleadoComponent implements OnInit {

    public empleado:Empleado= new Empleado();

    public defaultItem={idPeriodoEmpleado:null,periodo:'Todos'};

    public tiposDocumento:TablaGeneralDto[];

    public estadosCivil:TablaGeneralDto[];

    public gruposSanguineo:TablaGeneralDto[];

    public generos:TablaGeneralDto[];

    public contratosTrabajo:TablaGeneralDto[];

    public tiposTrabajo:TablaGeneralDto[];

    public regimenesHorario:TablaGeneralDto[];

    public regimenesLaboral:TablaGeneralDto[];

    public tiposDomicilio:TablaGeneralDto[];

    public relacionesContacto:TablaGeneralDto[];

    public centrosCosto:CentroCostoDto[];

    public paises:PaisDto[];

    public departamentos:DepartamentoDto[];

    public provincias:DepartamentoDto[];

    public distritos:DepartamentoDto[];

    public paisesDomicilio:PaisDto[];

    public departamentosDomicilio:DepartamentoDto[];

    public provinciasDomicilio:DepartamentoDto[];

    public distritosDomicilio:DepartamentoDto[];

    public isEnableDepartamento:boolean;

    public isEnableProvincia:boolean;

    public isEnableDistrito:boolean;

    public isEnableDepartamentoDomicilio:boolean;

    public isEnableProvinciaDomicilio:boolean;

    public isEnableDistritoDomicilio:boolean;

    errorMessage: string;

    private documentos: DocumentoEmpleado[]=[];

    private educaciones: Educacion[]=[];

    private experienciasLaborales: ExperienciaLaboral[]=[];

    private equiposEntregados: EquipoEntregado[]=[];

    private dependientes: Dependiente[]=[];

    private licencias: Licencia[]=[];

    private horariosEmpleado:HorarioEmpleado=new HorarioEmpleado();

    private historiasLaborales:HistoriaLaboralDto[]=[];

    private periodosEmpleados:PeriodoEmpleado[]=[];

    private permisosEmpleados:PermisoEmpleado[]=[];

    private vacaciones:Vacacion[]=[];

    private periodoEmpleado:PeriodoEmpleado = new PeriodoEmpleado();

    private pageSize: number = 10;
    private skip: number = 0;


    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
    }


    public dataItem: DocumentoEmpleado;

    constructor(private route:ActivatedRoute,private empleadoService:EmpleadoService, private paisService:PaisService,private _router: Router) {
        debugger;

        debugger;
        let empleado: Empleado = this.empleadoService.retrieveSessionStorage('entityBusquedaEmpleado');

        empleado.fechaNacimiento = null;
        empleado.fechaIngreso = null;

        this.verEmpleado(empleado);
        this.verDocumentos(empleado);
        this.verEducacion(empleado);
        this.verExperienciaLaboral(empleado);
        this.verEquipoEntregado(empleado);
        this.verDependiente(empleado);
        this.verLicencia(empleado);
        this.verHorarioEmpleado(empleado);
        this.verHistoriaLaboral(empleado);
        this.verPeriodoEmpleado(empleado);

        this.verPermisoEmpleado(empleado);
        this.verVacaciones(empleado);

        //this.subirImagen();

    }

    onRegresarBusquedaEmpleado(){
        this._router.navigate(['/personal/busquedaEmpleado']);
    }

    verEmpleado(empleado: Empleado){
        this.empleadoService.verEmpleado(empleado).subscribe(
            data => this.empleado = data,
            error => this.errorMessage = <any>error
        );
    }

    verDocumentos(empleado: Empleado){
        this.empleadoService.verDocumentos(empleado).subscribe(
            data => this.cargarDocumentos(data),
            error => this.errorMessage = <any>error
        );
    }

    verEducacion(empleado: Empleado){
        this.empleadoService.verEducacion(empleado).subscribe(
            data => this.educaciones = data,
            error => this.errorMessage = <any>error
        );
    }

    verExperienciaLaboral(empleado: Empleado){
        this.empleadoService.verExperienciaLaboral(empleado).subscribe(
            data => this.experienciasLaborales = data,
            error => this.errorMessage = <any>error
        );
    }

    verEquipoEntregado(empleado: Empleado){
        this.empleadoService.verEquipoEntregado(empleado).subscribe(
            data => this.equiposEntregados = data,
            error => this.errorMessage = <any>error
        );
    }

    verDependiente(empleado: Empleado){
        this.empleadoService.verDependiente(empleado).subscribe(
            data => this.dependientes = data,
            error => this.errorMessage = <any>error
        );
    }

    verLicencia(empleado: Empleado){
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarLicencia(this.periodoEmpleado);
    }

    verHorarioEmpleado(empleado: Empleado){
        this.empleadoService.verHorarioEmpleado(empleado).subscribe(
            data => this.horariosEmpleado = data,
            error => this.errorMessage = <any>error
        );
    }

    verHistoriaLaboral(empleado: Empleado){
        this.empleadoService.verHistoriaLaboral(empleado).subscribe(
            data => this.historiasLaborales = data,
            error => this.errorMessage = <any>error
        );
    }

    verPeriodoEmpleado(empleado: Empleado){
        this.empleadoService.verPeriodoEmpleado(empleado).subscribe(
            data => this.periodosEmpleados = data,
            error => this.errorMessage = <any>error
        );
    }

    verPermisoEmpleado(empleado: Empleado){
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarPermisoEmpleado(this.periodoEmpleado);
    }

    verVacaciones(empleado: Empleado){
        this.periodoEmpleado.idEmpleado = empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = null;
        this.cargarVacaciones(this.periodoEmpleado);
    }

    onChangeLicenciaPorPeriodo(value){
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarLicencia(this.periodoEmpleado);

    }

    onChangePermisoEmpleadoPorPeriodo(value){
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarPermisoEmpleado(this.periodoEmpleado);

    }

    onChangeVacacionesPorPeriodo(value){
        this.periodoEmpleado.idEmpleado = this.empleado.idEmpleado;
        this.periodoEmpleado.idPeriodoEmpleado = value;
        this.cargarVacaciones(this.periodoEmpleado);

    }

    cargarLicencia(periodoEmpleado: PeriodoEmpleado){
        this.empleadoService.verLicencia(periodoEmpleado).subscribe(
            data => this.licencias = data,
            error => this.errorMessage = <any>error
        );
    }

    cargarPermisoEmpleado(periodoEmpleado: PeriodoEmpleado){
        this.empleadoService.verPermisoEmpleado(periodoEmpleado).subscribe(
            data => this.permisosEmpleados = data,
            error => this.errorMessage = <any>error
        );
    }

    cargarVacaciones(periodoEmpleado: PeriodoEmpleado){
        this.empleadoService.verVacaciones(periodoEmpleado).subscribe(
            data => this.vacaciones = data,
            error => this.errorMessage = <any>error
        );
    }



    cargarDocumentos(data:DocumentoEmpleado[]){
        this.documentos = data;
        for(var indice in this.documentos){
            if(this.documentos[indice].tipoDocumento == 'FO'){
                $("#imgLogo1Subido").css("background-image", "url('data:image/jpeg;base64," + this.documentos[indice].contenidoArchivo + "')");
                this.documentos.splice(parseInt(indice), 1);
                break;
            }

        }

    }

    onIrHistorialTrabajo(){
        this.empleadoService.storeSessionStorage('entityHistorialTrabajo',this.empleado);
        this._router.navigate(['/personal/historiaLaboral']);
    }
    onIrDarBajaEmpleado(){
        sessionStorage.setItem('darBajaEmpleadoSessionData',JSON.stringify(this.empleado));
        this._router.navigate(['/personal/darDeBaja']);
    }

    public onViewDocument(dto: DocumentoEmpleado): void {

        if ($("#export_file").length > 0) {
            $("#export_file").remove();
        }
        if ($("#export_file").length === 0) {
            var iframe = $("<iframe src='' name='export_file' id='export_file'></iframe>");
            iframe.appendTo("body");

            var form = $("<form action='http://localhost:7999/empleado/descargarArchivoDocumento' method='post' target='export_file'></form>");
            form.append($("<input type='hidden' name='contenidoArchivo' id='contenidoArchivo' />").attr("value",dto.contenidoArchivo));
            form.append($("<input type='hidden' name='tipoArchivo' id='tipoArchivo' />").attr("value",dto.tipoArchivo));
            form.append($("<input type='hidden' name='nombre' id='nombre' />").attr("value",dto.nombre));
            form.append($("<input type='hidden' name='nombreArchivo' id='nombreArchivo' />").attr("value",dto.nombreArchivo));
            form.appendTo("body");

            form.submit();
        }

    }

    ngOnInit() {
    }

    public onEdit(): void {
        this.empleadoService.storeData(this.empleado);
        this._router.navigate(['/personal/empleado']);
    }

    public onIrGestionarPermiso(){
        this.empleadoService.storeSessionStorage('entityGestionarPermiso',this.empleado);
        this._router.navigate(['/personal/busquedaPermisos']);
    }

    public onIrHorarioEmpleado(){
        this.empleadoService.storeData(this.empleado);
        this._router.navigate(['/personal/horarioEmpleado']);
    }




}
