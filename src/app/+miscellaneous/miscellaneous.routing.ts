import {Routes, RouterModule} from "@angular/router";

import {PricingTablesComponent} from "./pricing-tables/pricing-tables.component";
import {InvoiceComponent} from "./invoice/invoice.component";
import {BlankComponent} from "./blank/blank.component";
import {CkeditorComponent} from "./ckeditor/ckeditor.component";
import {EmailTemplateComponent} from "./email-template/email-template.component";
import {Error404Component} from "./error404/error404.component";
import {Error500Component} from "./error500/error500.component";
import {SearchComponent} from "./search/search.component";

export const routes:Routes = [
  {
    path: '',
    redirectTo: 'blank'
  },

  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'ckeditor',
    component: CkeditorComponent
  },
  {
    path: 'email-template',
    component: EmailTemplateComponent
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: 'error500',
    component: Error500Component
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'pricing-tables',
    component: PricingTablesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
];

export const routing = RouterModule.forChild(routes);




