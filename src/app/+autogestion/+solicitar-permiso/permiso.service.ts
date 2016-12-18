import {Injectable} from "@angular/core";
import {Http, Response, Headers, Jsonp} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {TablaGeneralDto} from "../../+personal/+empleado/tablaGeneralDto";
import {HistoriaLaboralDto} from "../../+personal/+historiaLaboral/historiaLaboralDto";
import {Empleado} from "../../+personal/+empleado/empleado";
import {PeriodoEmpleado} from "../../+personal/+empleado/periodoEmpleado";
import {PermisoEmpleado} from "../../+personal/+empleado/permisoEmpleado";
import {Notificacion} from "../../+personal/+empleado/notificacion";

import {Permisos} from "../../+personal/+busqueda-empleado/Permisos";
import {AgendarVacacion} from "../+agendar-vacaciones/agendarVacacionDto";
import {HorasExtrasDto} from "../../+personal/+administrar-horas-extras/horasExtrasDto";

import {environment} from "../../../environments/environment";

@Injectable()
export class PermisoService {

    localhost:  String = environment.backend;
    port: String = environment.port;

    private tablaGeneralUrl: string = 'http://'+this.localhost+':'+ this.port +'/tablaGeneral/';

    //empleado: Empleado = new Empleado();

    constructor(private http: Http, private jsonp: Jsonp) {
    }

    completarComboBox(metodo: string) {

        return this.http.get(this.tablaGeneralUrl + metodo)
            .map(res => <TablaGeneralDto[]> res.json())
            .catch(this.handleError);
    }

    obtenerHistoriaLaboralActual(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/obtenerHistoriaLaboralActual';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <HistoriaLaboralDto> res.json())
            .catch(this.handleError);

    }

    obtenerInformacionAdicional(empleado: Empleado) {
        let url = 'http://'+this.localhost+':'+ this.port +'/empleado/informacionAdicionalHorasExtras';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <HorasExtrasDto> res.json())
            .catch(this.handleError);
        
    }

    obtenerPeriodoEmpleadoActual(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/obtenerPeriodoEmpleadoActual';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <PeriodoEmpleado> res.json())
            .catch(this.handleError);

    }
    obtenerDiasDisponiblesDeVacacion(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/obtenerDiasDisponibles';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <AgendarVacacion> res.json())
            .catch(this.handleError);

    }
    obtenerPeriodoActual(empleado: Empleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/vacacionEmpleado/obtenerPeriodo';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(empleado), {headers: header}).map(res => <AgendarVacacion> res.json())
            .catch(this.handleError);

    }
    
    /* ADMINISTRAR PERMISO */
    registrarPermisoEmpleado(permisoEmpleado: PermisoEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/registrarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisoEmpleado), {headers: header}).map(res => <Notificacion> res.json());
    }

    actualizarPermisoEmpleado(permisoEmpleado: Permisos) {

        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/actualizarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisoEmpleado), {headers: header}).map(res => <Notificacion> res.json());
    }
    
    enviarPermisoEmpleado(permisoEmpleado: Permisos) {
        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/enviarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisoEmpleado), {headers: header}).map(res => <Notificacion> res.json());
    }

    rechazarPermisoEmpleado(permisoEmpleado: Permisos) {
        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/rechazarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisoEmpleado), {headers: header}).map(res => <Notificacion> res.json());
    }

    devolverPermisoEmpleado(permisoEmpleado: Permisos) {
        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/devolverPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisoEmpleado), {headers: header}).map(res => <Notificacion> res.json());
    }
    
    actualizarPermisoEmpleadoDatosPersonales(permisoEmpleado: PermisoEmpleado) {

        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/actualizarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisoEmpleado), {headers: header}).map(res => <Notificacion> res.json());
    }

    enviarPermisoEmpleadoDatosPersonales(permisoEmpleado: PermisoEmpleado) {
        let url = 'http://'+this.localhost+':'+ this.port +'/permisoEmpleado/enviarPermisoEmpleado';
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(permisoEmpleado), {headers: header}).map(res => <Notificacion> res.json());
    }
    

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }



    /*storeData(empleado: Empleado){
        this.empleado = empleado;
    }

    retrieveData(): Empleado{
        return this.empleado;
    }
*/
}