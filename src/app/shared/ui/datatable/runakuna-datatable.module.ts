import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableGridComponent } from './datatable-grid.component';

// require('smartadmin-plugins/bower_components/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatatableGridComponent],
  exports: [DatatableGridComponent],
})
export class RunakunaDatatableModule { }
