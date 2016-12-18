import {NgModule} from '@angular/core';

import {SmartadminModule} from '../shared/smartadmin.module'

import {routing} from './tables.routing';
import {NormalTablesComponent} from "./+normal-tables/normal-tables.component";
import {DatatablesShowcaseComponent} from "./+datatables-showcase/datatables-showcase.component";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
  declarations: [
    NormalTablesComponent, DatatablesShowcaseComponent
  ],
  imports: [
    SmartadminModule,
    SmartadminDatatableModule,

    routing
  ],
})
export class TablesModule {}
