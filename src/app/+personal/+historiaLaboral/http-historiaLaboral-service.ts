import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {HistoriaLaboralDto} from './historiaLaboralDto';
import {environment} from "../../../environments/environment";


@Injectable() 
export class HistoriaLaboralService {

  localhost:  String = environment.backend;
  port: String = environment.port;

  
  private historiaLaboralUrl = 'http://'+this.localhost+':'+ this.port +'/empleado/historiaLaboral?idEmpleado=';
  private idHistoriaLaboralUrl = 'http://'+this.localhost+':'+ this.port+'/empleado/editHistoriaLaboral?idHistorialLaboral=';
  private updateCargoUrl = 'http://'+this.localhost+':'+ this.port + '/empleado/updateCargo';
  private URL_UPDATE_CARGO = 'http://'+this.localhost+':'+ this.port + '/cargo/actualizarCargo';
  private URL_DELETE_HISTORIALLABORAL = 'http://'+this.localhost+':'+ this.port + '/cargo/eliminarCargo/';

  historiaLaboral: HistoriaLaboralDto = new HistoriaLaboralDto();

  constructor(private http: Http) { }
  
  completar_Grid_Historia_Laboral(idEmpleado: number){
    return this.http.get(this.historiaLaboralUrl+idEmpleado)
          .map(res => <HistoriaLaboralDto[]> res.json())
          .catch(this.handleError);
  }
  completar_Grid_Historia_Laboral2(idEmpleado: number): Promise<HistoriaLaboralDto[]>{
    debugger;
    return this.http.get(this.historiaLaboralUrl+idEmpleado)
          .toPromise()
          .then(res => res.json().data as HistoriaLaboralDto[])
          .catch(this.handleError);
  }

  eliminarHistorialLaboral(idHistorialLaboral: number){
    return this.http.get(this.URL_DELETE_HISTORIALLABORAL+idHistorialLaboral)
          .map(res => <HistoriaLaboralDto[]> res.json())
          .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getHistoriaLaboralId(idHistorialLaboral: number){
    return this.http.get(this.idHistoriaLaboralUrl+idHistorialLaboral)
          .map(res => <HistoriaLaboralDto[]> res.json())
          .catch(this.handleError);
  }

  storeData(historiaLaboral: HistoriaLaboralDto){
    this.historiaLaboral = historiaLaboral;
  }

  retrieveData(): HistoriaLaboralDto{
    return this.historiaLaboral;
  }

  
  public updateCargo(historiaLaboral: HistoriaLaboralDto) {
    
    debugger;
    let header = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(historiaLaboral);
    return this.http.post(this.URL_UPDATE_CARGO, body, {headers: header});//.map((res: Response) => res.json());

  }

   // Update existing Hero
  /*private put(historiaLaboral: HistoriaLaboralDto): Promise<HistoriaLaboralDto> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.updateCargoUrl}/${historiaLaboral.idHistorialLaboral}`;

    return this.http
      .put(url, JSON.stringify(historiaLaboral), { headers: headers })
      .toPromise()
      .then(() => historiaLaboral)
      .catch(this.handleError);
  }*/

}