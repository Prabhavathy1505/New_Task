import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Template1Component } from './template1/template1.component';
@NgModule({
  declarations: [
    AppComponent,
    Template1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @Component({
//   selector:'app-root',
   
//   template:`<h3>Hello World</h3>`
  
// })
export class AppModule { }
