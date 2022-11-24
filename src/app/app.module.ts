import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Counter1Component } from './mycomponents/counter1/counter1.component';
import { Counter2Component } from './mycomponents/counter2/counter2.component';

@NgModule({
  declarations: [
    AppComponent,
    Counter1Component,
    Counter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
