import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UploadModule } from '@progress/kendo-angular-upload';

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {JqueryUiModule} from "../../shared/ui/jquery-ui/jquery-ui.module";

import { cargoEditRouting } from './cargo-edit.routing';
import {EditCargoComponent} from "./cargo-edit.component";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    ButtonsModule,
    DropDownsModule,
    GridModule,
    DialogModule,
    HttpModule,
    JsonpModule,
    UploadModule,
    FormsModule,
    ReactiveFormsModule,
    SmartadminInputModule,
    JqueryUiModule

  ],
  declarations: [EditCargoComponent],
  bootstrap: [EditCargoComponent]

})

export class CargoEditModule {}