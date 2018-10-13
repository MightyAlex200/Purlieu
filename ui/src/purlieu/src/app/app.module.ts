import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

const appRoutes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true, enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }