import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceCreateComponent } from '../pages/invoice-create/invoice-create';
import { InvoiceDetailComponent } from '../pages/invoice-detail/invoice-detail';
import { WelcomeInvoiceComponent } from '../pages/welcome-invoice/welcome-invoice';

const appRoutes: Routes = [
  { path: 'invoice-detail', component: InvoiceDetailComponent },
  { path: 'invoice-create', component: InvoiceCreateComponent },
  { path: '**', component: WelcomeInvoiceComponent }
 
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
