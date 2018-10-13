import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '../ui/ui.module';

import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';

import { routes } from './dashboard.routes';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardPageComponent
  ]
})
export class DashboardModule { }
