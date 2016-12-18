import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {DepartamentoArea} from "./departamento";
import {UndNegocio} from "./undnegocio";
import {Proyecto} from "./proyecto";
import {Cargo} from "./cargo";

import {Dias} from "./dias";
import {Horario} from "./horario";
import {TablaGeneralDto} from "../+empleado/tablaGeneralDto";
import {HistoriaLaboralDto} from "../+historiaLaboral/historiaLaboralDto";
import {environment} from "../../../environments/environment";
import 'rxjs/add/operator/toPromise';

import {Notificacion} from "../../+personal/+empleado/notificacion";

@Injectable() 
export class CargoService {


  localhost:  String = environment.backend;
  port: String = environment.port;


  private departamentosUrl = 'http://'+this.localhost+':'+this.port+'/undNegocio/obtenerDepaArea?idUnidadDeNegocio=';
  private monedaUrl = 'http://'+this.localhost+':'+this.port+'/moneda/obtenerMoneda';
  private undNegocioUrl = 'http://'+this.localhost+':'+this.port+'/undNegocio/obtenerUndNegocio';
  private listCargosUrl = 'http://'+this.localhost+':'+this.port+'/undNegocio/obtenerListCargos';
  private proyectoUrl = 'http://'+this.localhost+':'+this.port+'/undNegocio/obtenerProyecto?idDepartamentoArea=';
  private todosProyectosUrl = 'http://'+this.localhost+':'+this.port+'/undNegocio/obtenerProyectos';
  private cargoUrl = 'http://'+this.localhost+':'+this.port+'/undNegocio/obtenerCargo?idProyecto=';
  private tipoHorarioUrl = 'http://'+this.localhost+':'+this.port+'/tablaGeneral/obtenerTipoHorario';
  private diasUrl = 'http://'+this.localhost+':'+this.port+'/tablaGeneral/obtenerDias';
  private URL_CREATED_CARGO = 'http://'+this.localhost+':'+this.port+'/cargo/crearCargo';
  private HORARIO_SEL_URL = 'http://'+this.localhost+':'+this.port+'/cargo/nombreHorario';

  constructor(private http: Http) { }

  cargoDto: Cargo = new Cargo();

  registrarCargo(historiaLaboralDto: HistoriaLaboralDto){

    debugger;
    let header = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(historiaLaboralDto);
    return this.http.post(this.URL_CREATED_CARGO, body, {headers: header});//.map((res: Response) => res.json());

  }

  registrarCargo2(historiaLaboralDto: HistoriaLaboralDto): Promise<HistoriaLaboralDto>{

    debugger;
    let header = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(historiaLaboralDto);
    return this.http.post(this.URL_CREATED_CARGO, body, {headers: header})
    .toPromise()
    .then(res => <Notificacion> res.json())
      .catch(this.handleError);

  }

  cargarComboHorario() {
    return this.http.get(this.HORARIO_SEL_URL)
          .map(res => <Horario[]> res.json())
          .catch(this.handleError);
  }

  completarComboDepa(idUndNegocio:number) {
    return this.http.get(this.departamentosUrl+idUndNegocio)
          .map(res => <DepartamentoArea[]> res.json())
          .catch(this.handleError);
  }
  completarComboMoneda(){
    return this.http.get(this.monedaUrl)
          .map(res => <UndNegocio[]> res.json())
          .catch(this.handleError);
  }
  completarComboTipoHorario(){
    return this.http.get(this.tipoHorarioUrl)
          .map(res => <TablaGeneralDto[]> res.json())
          .catch(this.handleError);
  }
  
  completarFilaDia(){
    return this.http.get(this.diasUrl)
          .map(res => <Dias[]> res.json())
          .catch(this.handleError);
  }

  completarComboUndNegocio(){
    return this.http.get(this.undNegocioUrl)
          .map(res => <UndNegocio[]> res.json())
          .catch(this.handleError);
  }
  
  completarComboCargos(){
    return this.http.get(this.listCargosUrl)
          .map(res => <UndNegocio[]> res.json())
          .catch(this.handleError);
  }

  completarComboProyecto(idDepartamentoArea:number){
    return this.http.get(this.proyectoUrl+idDepartamentoArea)
          .map(res => <Proyecto[]> res.json())
          .catch(this.handleError);
  }

  completarComboTodosProyectos(){
    return this.http.get(this.todosProyectosUrl)
        .map(res => <Proyecto[]> res.json())
        .catch(this.handleError);
  }

  completarComboCargo(idProyecto:number){
    return this.http.get(this.cargoUrl+idProyecto)
          .map(res => <Cargo[]> res.json())
          .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error || 'Server error');
  }

}