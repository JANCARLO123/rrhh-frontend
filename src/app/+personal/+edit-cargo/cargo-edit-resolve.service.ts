import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { HistoriaLaboralDto } from '../+historiaLaboral/historiaLaboralDto';
import { HistoriaLaboralService } from '../+historiaLaboral/http-historiaLaboral-service';

@Injectable()
export class EditCargoResolve implements Resolve<HistoriaLaboralDto> {

  constructor(private historiaLaboralService: HistoriaLaboralService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    let idHistorialLaboral = route.params['idHistorialLaboral'];


    return this.historiaLaboralService.getHistoriaLaboralId(idHistorialLaboral);
  }

}