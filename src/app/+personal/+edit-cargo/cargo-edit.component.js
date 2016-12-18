"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
var http_empleados_service_1 = require('../+cargo/http-empleados-service');
var cargo_1 = require('../+cargo/cargo');
var historiaLaboralDto_1 = require('../+historiaLaboral/historiaLaboralDto');
var http_historiaLaboral_service_1 = require('../+historiaLaboral/http-historiaLaboral-service');
var EditCargoComponent = (function () {
    function EditCargoComponent(historiaLaboralService, cargoService, route, router, location) {
        this.historiaLaboralService = historiaLaboralService;
        this.cargoService = cargoService;
        this.route = route;
        this.router = router;
        this.location = location;
        //dataItemHistorial: HistoriaLaboralDto;
        this.historiaLaboral = new historiaLaboralDto_1.HistoriaLaboralDto();
        this.close = new core_1.EventEmitter();
        this.view = [];
        this.navigated = false; // true if navigated here
        this.historiaLaboral = this.historiaLaboralService.retrieveData();
    }
    EditCargoComponent.prototype.ngOnInit = function () {
        /*this.route.params.forEach((params: Params) => {
          let idHistorialLaboral = +params['idHistorialLaboral'];
          this.getEdit_Cargo(idHistorialLaboral);
        });*/
        /*this.route.params
        .map(params => params['idHistorialLaboral'])
        .switchMap(idHistorialLaboral => this.historiaLaboralService.getHistoriaLaboralId(idHistorialLaboral))
        .subscribe(historiaLaboral => this.historiaLaboralDto = historiaLaboral);*/
        /*this.route.data.forEach((data: { historiaLaboralDto: HistoriaLaboralDto }) =>
        { this.dataItemHistorial = data.historiaLaboralDto; console.log('Entro aqui0' + data); });*/
        this.getMonedas();
    };
    EditCargoComponent.prototype.getMonedas = function () {
        var _this = this;
        this.cargoService.completarComboMoneda().subscribe(function (monedaDto) { return _this.monedas = monedaDto; }, function (error) { return _this.errorMessage = error; });
    };
    /*getEdit_Cargo(idHistorialLaboral: number) {
      this.historiaLaboralService.getHistoriaLaboralId(idHistorialLaboral).subscribe(
        historiaLaboralDto => this.historiaLaboral = historiaLaboralDto,
        error => this.errorMessage = <any>error
      );
    }*/
    EditCargoComponent.prototype.onChangeIniDate = function (e) {
        this.historiaLaboral.desdeFecha = e;
        console.log('date1 ' + e);
    };
    EditCargoComponent.prototype.onChangeFinDate = function (e) {
        this.historiaLaboral.hastaFecha = e;
    };
    /*
    onChangeFinDate(event:Event){
          
          var fecha =  (<HTMLInputElement>event.srcElement).value;
          this.dataItemHistorial[0].hastaFecha = fecha;
           console.log('date2 ' + fecha)
          console.log('date3 ' + this.dataItemHistorial[0].hastaFecha)
    }
    */
    /*onGuardarCargo() {
      debugger;
      this.historiaLaboralService
        .updateCargo(this.historiaLaboral)
        .then(dataItemHistorial => {
          this.historiaLaboral = dataItemHistorial; // saved hero, w/ id if new
          this.goBack(dataItemHistorial);
        })
        .catch(error => this.error = error); // TODO: Display error message
    }*/
    EditCargoComponent.prototype.onGuardarCargo = function (historiaLaboral) {
        var _this = this;
        debugger;
        this.historiaLaboralService.updateCargo(this.historiaLaboral).subscribe(function (data) {
            debugger;
            _this.historiaLaboral = new historiaLaboralDto_1.HistoriaLaboralDto();
        }, function (error) { return console.log(error); });
        this.goBack();
    };
    EditCargoComponent.prototype.crearCargo = function (data) {
        //data.idHistorialLaboral = this.generarIdHistorialTemporal();
        return this.fetch("create", data);
    };
    EditCargoComponent.prototype.editarCargo = function (data) {
        return this.fetch("update", data);
    };
    EditCargoComponent.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ""; }
        debugger;
        if (action == "create") {
            var documento = (JSON.parse(JSON.stringify(data)));
            this.view.push(documento);
        }
        else if (action == "update") {
            var indice = this.view.indexOf(data);
            if (indice >= 0)
                this.view[indice] = (JSON.parse(JSON.stringify(data)));
        }
        return Rx_1.Observable.of(this.view);
    };
    EditCargoComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cargo_1.Cargo)
    ], EditCargoComponent.prototype, "cargoEditForm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditCargoComponent.prototype, "close", void 0);
    EditCargoComponent = __decorate([
        core_1.Component({
            selector: 'sa-empleado-cargo-detail',
            templateUrl: 'cargo-edit.component.html',
            providers: [http_1.HttpModule, http_empleados_service_1.CargoService] /*,
            inputs: ['historiaLaboralDto']*/
        }), 
        __metadata('design:paramtypes', [http_historiaLaboral_service_1.HistoriaLaboralService, http_empleados_service_1.CargoService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], EditCargoComponent);
    return EditCargoComponent;
}());
exports.EditCargoComponent = EditCargoComponent;
//# sourceMappingURL=cargo-edit.component.js.map