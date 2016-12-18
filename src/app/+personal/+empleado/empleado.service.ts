import {Injectable} from "@angular/core";
import {Http, Response, Headers, Jsonp} from "@angular/http";
import {TablaGeneralDto} from "./tablaGeneralDto";
import {CentroCostoDto} from "./centroCostoDto";
import {Observable} from "rxjs/Observable";
import {Empleado} from "./empleado";
import {BusquedaEmpleado} from "../+busqueda-empleado/busqueda.empleado";
import "rxjs/Rx";
import {BusquedaPermisos} from "../+permisos/busqueda.permisos";
import {Permisos} from "../+busqueda-empleado/Permisos";
import {DocumentoEmpleado} from "./documentoEmpleado";
import {Educacion} from "./educacion";
import {ExperienciaLaboral} from "./experienciaLaboral";
import {EquipoEntregado} from "./equipoEntregado";
import {Dependiente} from "./dependiente";
import {Licencia} from "./licencia";
import {HorarioEmpleado} from "./horarioEmpleado";
import {HistoriaLaboralDto} from "../+historiaLaboral/historiaLaboralDto";
import {PeriodoEmpleado} from "./periodoEmpleado";
import {Vacacion} from "./Vacacion";
import {PermisoEmpleado} from "./permisoEmpleado";

import {environment} from "../../../environments/environment";
import {Notificacion} from "./notificacion";
import {BusquedaVacaciones} from "../+busqueda-vacacion/busqueda.vacacionDto";
import {BusquedaHorasExtras} from "../+busqueda-horas-extras/busqueda.HorasExtrasDto";
import {HorasExtrasDto} from "../+administrar-horas-extras/horasExtrasDto";
import 'rxjs/add/operator/toPromise';
import {Marcacion} from "./marcacion";
import {BusquedaMarcacion} from "../../+gestion-tiempo/+busqueda-marcacion/busqueda.marcacion";
import {BusquedaHorario} from "../../+gestion-tiempo/+busqueda-horario/busqueda.horario";
import {Horario} from "../+cargo/horario";
import {HorarioDia} from "../../+gestion-tiempo/+administrar-horario/horarioDia";
import {AgendarVacacion} from "../../+autogestion/+agendar-vacaciones/agendarVacacionDto";
import {HorarioEmpleadoDia} from "./horarioEmpleadoDia";
import {RoleNameDto} from "../../+dtos/roleNameDto";
import {LocalStorageGlobal} from "../../+enums/LocalStorage";
import {SolicitudCambioMarcacion} from "../../+autogestion/+solicitar-correccion/solicitudCambioMarcacion";

@Injectable()
export class EmpleadoService {

    localhost:  String = environment.backend;
    port: String = environment.port;

    private tablaGeneralUrl: string = 'http://'+this.localhost+':'+ this.port +'/tablaGeneral/';

    empleado: Empleado = new Empleado();
    permisos: Permisos = new Permisos();
    vacacion: AgendarVacacion = new AgendarVacacion();
    horasExtra: HorasExtrasDto = new HorasExtrasDto();
    private rolNames: Array<RoleNameDto> = [];

    horario:Horario = new Horario();

    horarioEmpleado:HorarioEmpleado = new HorarioEmpleado();
    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

    constructor(private http: Http, private jsonp: Jsonp) {
    }

    completarComboBox(metodo: string) {

        return this.http.get(this.tablaGeneralUrl + metodo)
            .map(res => <TablaGeneralDto[]> res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    obtenerComboCentroCosto() {

        return this.http.get('http://'+this.localhost+':'+ this.port +'/centroCosto/obtenerCentrosCosto')
            .map(res => <CentroCostoDto[]> res.json())
            .catch(this.handleError);
    }

    buscarEmpleado(busquedaEmpleado: BusquedaEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(busquedaEmpleado), {headers: header}).map(res => <Empleado[]> res.json())
            .catch(this.handleError);
    }


    registrarEmpleado(empleado: Empleado) {

        empleado.idEmpresa = 4;

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/registrarEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Notificacion> res.json());

    }

    registrarHorario(horario: Horario) {


        let url = 'http://'+this.localhost+':'+ this.port +'/horario/registrarHorario';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horario), {headers: header}).map(res => <Notificacion> res.json());;

    }

    registrarCorreccionMarcacion(solicitudCambioMarcacion: SolicitudCambioMarcacion) {


        let url = 'http://'+this.localhost+':'+ this.port +'/marcacion/registrarCorreccionMarcacion';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(solicitudCambioMarcacion), {headers: header}).map(res => <Notificacion> res.json());;

    }

    obtenerHorario(horario: Horario) {

        let url = 'http://'+this.localhost+':'+ this.port +'/horario/obtenerHorario';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horario), {headers: header}).map(res => <Horario> res.json())
            .catch(this.handleError);

    }

    registrarHorarioEmpleado(horarioEmpleado: HorarioEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/registrarHorarioEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horarioEmpleado), {headers: header}).map(res => <Notificacion> res.json());;

    }

    actualizarDatosPersonalesEmpleado(empleado: Empleado) {

        empleado.idEmpresa = 4;

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/actualizarDatosPersonales';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Notificacion> res.json());;

    }

    verEmpleado(empleado: Empleado) {

    let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verEmpleado';
    let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Empleado> res.json())
            .catch(this.handleError);

    }

    verDocumentos(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verDocumentos';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <DocumentoEmpleado[]> res.json())
            .catch(this.handleError);

    }

    verEducacion(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verEducacion';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Educacion[]> res.json())
            .catch(this.handleError);

    }

    verExperienciaLaboral(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verExperienciaLaboral';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <ExperienciaLaboral[]> res.json())
            .catch(this.handleError);

    }

    verEquipoEntregado(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verEquipoEntregado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <EquipoEntregado[]> res.json())
            .catch(this.handleError);

    }

    verDependiente(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verDependiente';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Dependiente[]> res.json())
            .catch(this.handleError);

    }

    verLicencia(periodoEmpleado: PeriodoEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verLicencia';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(periodoEmpleado), {headers: header}).map(res => <Licencia[]> res.json())
            .catch(this.handleError);

    }
    
    verMarcaciones(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verMarcaciones';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Marcacion[]> res.json())
            .catch(this.handleError);

    }

    verHorarioEmpleado(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verHorarioEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <HorarioEmpleado> res.json())
            .catch(this.handleError);

    }
    
    verHorariosEmpleado(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verHorariosEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <HorarioEmpleado[]> res.json())
            .catch(this.handleError);

    }

    verHistoriaLaboral(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verHistoriaLaboral';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <HistoriaLaboralDto[]> res.json())
            .catch(this.handleError);

    }

    verPeriodoEmpleado(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verPeriodoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <PeriodoEmpleado[]> res.json())
            .catch(this.handleError);

    }

    verPermisoEmpleado(periodoEmpleado: PeriodoEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(periodoEmpleado), {headers: header}).map(res => <PermisoEmpleado[]> res.json())
            .catch(this.handleError);

    }

    verVacaciones(periodoEmpleado: PeriodoEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/verVacaciones';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(periodoEmpleado), {headers: header}).map(res => <Vacacion[]> res.json())
            .catch(this.handleError);

    }
    
    obtenerHorariosPorTipoHorario(horario: Horario) {

    let url = 'http://'+this.localhost+':'+ this.port +'/horario/obtenerHorariosPorTipoHorario';
    let header = new Headers({'Content-Type': 'application/json'});

    return this.http.post(url, JSON.stringify(horario), {headers: header}).map(res => <Horario[]> res.json())
        .catch(this.handleError);

    }

    obtenerHorarios() {

        let url = 'http://'+this.localhost+':'+ this.port +'/horario/obtenerHorarios';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url,{headers: header}).map(res => <Horario[]> res.json())
            .catch(this.handleError);

    }

    obtenerHorarioPorTipoHorarioPorDefecto(horario: Horario) {

        let url = 'http://'+this.localhost+':'+ this.port +'/horario/obtenerHorarioPorTipoHorarioPorDefecto';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horario), {headers: header}).map(res => <Horario> res.json())
            .catch(this.handleError);

    }

    obtenerHorarioDiaPorHorario(horario: Horario) {

        let url = 'http://'+this.localhost+':'+ this.port +'/horario/obtenerHorarioDiaPorHorario';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horario), {headers: header}).map(res => <HorarioDia[]> res.json())
            .catch(this.handleError);

    }

    obtenerHorarioEmpleadoDiaPorHorarioEmpleado(horarioEmpleado: HorarioEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/obtenerHorarioEmpleadoDiasPorHorarioEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horarioEmpleado), {headers: header}).map(res => <HorarioEmpleadoDia[]> res.json())
            .catch(this.handleError);

    }

    storeData(empleado: Empleado){
        this.empleado = empleado;
    }
    storeDataPermiso(permisos: Permisos){
        this.permisos = permisos;
    }

    storeDataHorario(horario: Horario){
        this.horario = horario;
    }

    storeDataHorarioEmpleado(horarioEmpleado: HorarioEmpleado){
        this.horarioEmpleado = horarioEmpleado;
    }

    storeDataVacaciones(vacacion: AgendarVacacion){
        this.vacacion = vacacion;
    }
    storeDataHorasExtra(horasExtra: HorasExtrasDto){
        this.horasExtra = horasExtra;
    }

    retrieveData(): Empleado{
        return this.empleado;
    }
    retrieveDataPermisos(): Permisos{
        return this.permisos;
    }

    retrieveDataHorario(): Horario{
        return this.horario;
    }

    retrieveDataHorarioEmpleado(): HorarioEmpleado{
        return this.horarioEmpleado;
    }

    retrieveDataVacaciones(): AgendarVacacion{
        return this.vacacion;
    }
    retrieveDataHorasExtra(): HorasExtrasDto{
        return this.horasExtra;
    }

    buscarPermisoEmpleado(busquedaPermisos: BusquedaPermisos) {
        debugger;

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(busquedaPermisos),
            {headers: header}).map(res => <Permisos[]> res.json())
            .catch(this.handleError);
    }
    
    buscarMarcacionesEmpleado(busquedaMarcacion: BusquedaMarcacion) {
        debugger;

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaMarcacionesEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        /*return this.http.post(url, JSON.stringify(busquedaPermisos),
            {headers: header}).map(res => <Permisos[]> res.json())
            .catch(this.handleError);*/

        return this.http.post(url,JSON.stringify(busquedaMarcacion),
            {headers: header}).map(res => <Marcacion[]> res.json())
            .catch(this.handleError);
    }

    buscarHorarios(busquedaHorario: BusquedaHorario) {

        let url = 'http://'+this.localhost+':'+ this.port +'/horario/busquedaHorario';
        let header = new Headers({'Content-Type': 'application/json'});

        /*return this.http.post(url, JSON.stringify(busquedaPermisos),
         {headers: header}).map(res => <Permisos[]> res.json())
         .catch(this.handleError);*/

        return this.http.post(url,JSON.stringify(busquedaHorario),
            {headers: header}).map(res => <Horario[]> res.json())
            .catch(this.handleError);
    }

    obtenerMarcacionEmpleado(empleado: Empleado){
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/obtenerMarcacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});


        return this.http.post(url,JSON.stringify(empleado),
            {headers: header}).map(res => <Marcacion> res.json())
            .catch(this.handleError);
    }

    buscarVacacionesEmpleado(busquedaVacaciones: BusquedaVacaciones) {
        debugger;

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaVacacionesEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(busquedaVacaciones),
                {headers: header}).map(res => <AgendarVacacion[]> res.json())
            .catch(this.handleError);
    }
    buscarHorasExtrasEmpleado(busquedaHorasExtras: BusquedaHorasExtras) {
        debugger;

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/busquedaHorasExtrasEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(busquedaHorasExtras),
                {headers: header}).map(res => <HorasExtrasDto[]> res.json())
            .catch(this.handleError);
    }

    eliminarPermisoEmpleado(permisos: AgendarVacacion) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/eliminarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisos),
            {headers: header}).map(res => <String> res.json())
            .catch(this.handleError);

    }

    aprobarPermisoEmpleado(permisos: Permisos) {

        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/aprobarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisos), {headers: header}).map(res => <String> res.json());

    }

    rechazarPermisoEmpleado(permisos: Permisos) {

        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/rechazarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisos), {headers: header}).map(res => <String> res.json());

    }
    /* ADMINISTRAR VACACIONES */
    registrarVacaciones(agendarVacacion: AgendarVacacion): Promise<AgendarVacacion>{

        debugger;
        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/registrarVacaciones';
        let header = new Headers({ 'Content-Type': 'application/json' });
        
        let body = JSON.stringify(agendarVacacion);
        return this.http.post(url, body, {headers: header})
        .toPromise()
        .then(res => <Notificacion> res.json())
          .catch(this.handleError);
          
    
    }
    actualizarVacacionEmpleado(adminVacacion: AgendarVacacion) {

        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/actualizarVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(adminVacacion), {headers: header}).map(res => <Notificacion> res.json());
    }
    enviarVacacionEmpleado(adminVacacion: AgendarVacacion) {
        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/enviarVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(adminVacacion), {headers: header}).map(res => <Notificacion> res.json());
    }
    eliminarVacacionEmpleado(adminVacacion: AgendarVacacion) {

        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/eliminarVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(adminVacacion),
            {headers: header}).map(res => <String> res.json())
            .catch(this.handleError);

    }
    devolverVacacionEmpleado(adminVacacion: AgendarVacacion) {
        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/devolverVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(adminVacacion), {headers: header}).map(res => <Notificacion> res.json());
    }
    aprobarVacacionEmpleado(adminVacacion: AgendarVacacion) {
        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/aprobarVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(adminVacacion), {headers: header}).map(res => <Notificacion> res.json());
    }
    rechazarVacacionEmpleado(adminVacacion: AgendarVacacion) {
        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/rechazarVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(adminVacacion), {headers: header}).map(res => <Notificacion> res.json());
    }
    
    actualizarDatosPersonalesVacaciones(vacacion: Vacacion) {

        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/actualizarVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(vacacion), {headers: header}).map(res => <Notificacion> res.json());
    }
    enviarDatosPersonalesVacaciones(vacacion: Vacacion) {
        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/enviarVacacionEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(vacacion), {headers: header}).map(res => <Notificacion> res.json());
    }

    /** ADMINISTRAR HORAS EXTRAS */
    registrarHorasExtra(horasExtra: HorasExtrasDto): Promise<AgendarVacacion>{

        debugger;
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/registrarHorasExtra';
        let header = new Headers({ 'Content-Type': 'application/json' });
        
        let body = JSON.stringify(horasExtra);
        return this.http.post(url, body, {headers: header})
        .toPromise()
        .then(res => <Notificacion> res.json())
          .catch(this.handleError);
          
    
    }

    eliminarHorasExtraEmpleado(horasExtra: HorasExtrasDto) {

        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/eliminarHorasExtraEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horasExtra),
            {headers: header}).map(res => <String> res.json())
            .catch(this.handleError);

    }
    aprobarHorasExtraEmpleado(horasExtra: HorasExtrasDto) {
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/aprobarHorasExtraEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horasExtra), {headers: header}).map(res => <Notificacion> res.json());
    }
    rechazarHorasExtraEmpleado(horasExtra: HorasExtrasDto) {
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/rechazarHorasExtraEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(horasExtra), {headers: header}).map(res => <Notificacion> res.json());
    }
    /**DAR DE BAJA */
    
    obtenerEquiposPendientesDevolucion(idEmpleado: number){
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/obtenerEquiposPendientesDevolucion?idEmpleado=';
        return this.http.get(url+idEmpleado)
              .map(res => <EquipoEntregado[]> res.json())
              .catch(this.handleError);
    }
    countEquiposPendientes(empleado: Empleado) {
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/countEquiposPendientesDevolucion';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Notificacion> res.json())
            .catch(this.handleError);
    }
    registrarDarBajaEmpleado(empleado: Empleado) {
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/registrarDarBajaEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <Notificacion> res.json());
    }

    retrieveLocalStorage() {

        this.rolNames = JSON.parse(localStorage.getItem("rolName") || '{}');

        for(let i=0; i<this.rolNames.length; i++) {

            for(let rolVal of this.rolNames[i].rolNames){
                 switch(rolVal.rolName){
                    case 'EMPLE':
                        this.localStorageValue.idEmpleado = this.rolNames[i].idEmpleado;
                        this.localStorageValue.rolName = rolVal.rolName;
                        this.localStorageValue.mostrarBotonEmple = true;
                        this.storeDataLocalStorage(this.localStorageValue);
                        break;
                    case 'GEREN':
                        this.localStorageValue.idEmpleado = this.rolNames[i].idEmpleado;
                        this.localStorageValue.rolName = rolVal.rolName;
                        this.localStorageValue.mostrarBotonGeren = true;
                        //this.localStorageValue.typeWrite = true;
                        this.storeDataLocalStorage(this.localStorageValue);
                        break;
                    case 'ADMIN':
                        this.localStorageValue.idEmpleado = this.rolNames[i].idEmpleado;
                        this.localStorageValue.rolName = rolVal.rolName;
                        this.localStorageValue.mostrarBotonGeren = true;
                        this.localStorageValue.mostrarBotonRhna = true;
                        this.localStorageValue.mostrarBotonEmple = true;
                        this.localStorageValue.mostrarBotonAdmin = true;
                        //this.localStorageValue.typeWrite = true;
                        this.storeDataLocalStorage(this.localStorageValue);
                        break;
                    case 'RHANA':
                        this.localStorageValue.idEmpleado = this.rolNames[i].idEmpleado;
                        this.localStorageValue.rolName = rolVal.rolName;
                        this.localStorageValue.mostrarBotonRhna = true;
                        this.storeDataLocalStorage(this.localStorageValue);
                        break;
                    default:
                       break;
                }
                if(rolVal.rolName == 'GEREN' || rolVal.rolName == 'ADMIN' || rolVal.rolName == 'RHANA'){
                    break;
                }else{
                    continue;
                }

            }
        }
    }

    storeDataLocalStorage(localStorageValue: LocalStorageGlobal){
        this.localStorageValue = localStorageValue;
    }

    retrieveDataLocalStorage(){
        this.retrieveLocalStorage();
        return this.localStorageValue;
    }
    /**SESSION STORAGE*/
    storeSessionStorage(valueStore: string, dataVal: any){
        sessionStorage.setItem(valueStore,JSON.stringify(dataVal));
    }
    retrieveSessionStorage(valueRetrieve: string){
        return JSON.parse(sessionStorage.getItem(valueRetrieve) || '{}');
    }
}