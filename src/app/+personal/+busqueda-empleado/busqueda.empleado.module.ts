import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {RunakunaDatatableModule} from "../../shared/ui/datatable/runakuna-datatable.module";
import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {BusquedaEmpleadoComponent} from "./busqueda.empleado.component";
import {DialogModule} from "@progress/kendo-angular-dialog";
import {GridModule} from "@progress/kendo-angular-grid";
import {UploadModule} from "@progress/kendo-angular-upload";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {GridEditFormComponent} from "./grid.edit.empleados.component";
import {JsonpModule, HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JqueryUiModule} from "../../shared/ui/jquery-ui/jquery-ui.module";
import {VerEmpleadoModule} from "../+ver-empleado/ver.empleado.module";
import {EmpleadoModule} from "../+empleado/empleado.module";
import {Ng2CompleterModule} from "ng2-completer";
import {SimpleNotificationsModule} from "angular2-notifications";
import {BusyModule} from "angular2-busy";

@NgModule({
    imports: [
        CommonModule,
        SmartadminValidationModule,
        DropDownsModule,
        SmartadminInputModule,
        GridModule,
        DialogModule,
        RunakunaDatatableModule,
        SmartadminModule,
        HttpModule,
        JsonpModule,
        UploadModule,
        ReactiveFormsModule,
        FormsModule,
        JqueryUiModule,
        VerEmpleadoModule,
        EmpleadoModule,
        Ng2CompleterModule,
        SimpleNotificationsModule,
        BusyModule
    ],
    declarations: [BusquedaEmpleadoComponent, GridEditFormComponent],
    bootstrap: [BusquedaEmpleadoComponent],
    entryComponents: [BusquedaEmpleadoComponent],
})
export class BusquedaEmpleadoModule {

}
