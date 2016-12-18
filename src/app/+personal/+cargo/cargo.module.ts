import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cargoRouting } from './cargo.routing';
import {CargoComponent} from "./cargo.component";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HorarioDialogFormComponent } from "./horario.dialog.component";
import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';

import { CargoService } from './http-empleados-service';
import {HttpModule, JsonpModule} from "@angular/http";
import {ButtonsModule} from "@progress/kendo-angular-buttons";
import {UploadModule} from "@progress/kendo-angular-upload";
import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";
import {JqueryUiModule} from "../../shared/ui/jquery-ui/jquery-ui.module";
import {SimpleNotificationsModule} from "angular2-notifications";

@NgModule({
  imports: [

    CommonModule,
    SmartadminModule,
    ButtonsModule,
    HttpModule,
    JsonpModule,
    GridModule,
    DropDownsModule,
    DialogModule,
    UploadModule,
    FormsModule,
    ReactiveFormsModule,
    SmartadminInputModule,
    SmartadminValidationModule,
    JqueryUiModule,
    SimpleNotificationsModule
  ],
  declarations: [CargoComponent,HorarioDialogFormComponent],
  providers: [
        CargoService
    ],
  bootstrap: [CargoComponent]
})

export class CargoModule {}