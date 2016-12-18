import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generalElementsRouting } from './general-elements.routing';
import {GeneralElementsComponent} from "./general-elements.component";
import {SmartadminModule} from "../../shared/smartadmin.module";

@NgModule({
  imports: [
    CommonModule,
    generalElementsRouting,
    SmartadminModule
  ],
  declarations: [GeneralElementsComponent]
})
export class GeneralElementsModule { }
