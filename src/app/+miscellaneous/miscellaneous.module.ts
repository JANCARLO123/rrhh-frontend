import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import {routing} from "./miscellaneous.routing";
import { InvoiceComponent } from './invoice/invoice.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { BlankComponent } from './blank/blank.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { SearchComponent } from './search/search.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import {SmartadminWidgetsModule} from "../shared/widgets/smartadmin-widgets.module";
import {SmartadminLayoutModule} from "../shared/layout/layout.module";
import {StatsModule} from "../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminWidgetsModule,
    SmartadminLayoutModule,
    StatsModule,
  ],
  declarations: [PricingTablesComponent, InvoiceComponent, Error404Component,
    Error500Component, BlankComponent, EmailTemplateComponent, SearchComponent,
    CkeditorComponent, ]
})
export class MiscellaneousModule { }
