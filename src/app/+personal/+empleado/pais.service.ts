import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {PaisDto} from './paisDto';
import {DepartamentoDto} from './departamentoDto';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {environment} from "../../../environments/environment";

declare var $: any;

@Injectable()
export class PaisService{
    localhost:  String = environment.backend;
    port: String = environment.port;
    
    constructor(private http: Http) {
    }
    
    completarComboPais() {
        
        return this.http.get('http://'+this.localhost+':'+ this.port +'/pais/obtenerPaises')
            .map(res => <PaisDto[]> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    completarComboDepartamento(codigoPais:string) {
        
        return this.http.get('http://'+this.localhost+':'+ this.port +'/pais/obtenerDepartamentos?codigoPais='+codigoPais)
            .map(res => <DepartamentoDto[]> res.json())
            .catch(this.handleError);
    }
    
    completarComboProvincia(codigoDpto:string) {
        
        return this.http.get('http://'+this.localhost+':'+ this.port +'/pais/obtenerProvincias?codigoDpto='+codigoDpto)
            .map(res => <DepartamentoDto[]> res.json())
            .catch(this.handleError);
    }
    
    completarComboDistrito(codigoProvincia:string) {
        
        return this.http.get('http://'+this.localhost+':'+ this.port +'/pais/obtenerDistritos?codigoProvincia='+codigoProvincia)
            .map(res => <DepartamentoDto[]> res.json())
            .catch(this.handleError);
    }

}
