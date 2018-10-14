import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from './ui/ui.module';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }