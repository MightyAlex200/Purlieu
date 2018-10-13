import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
