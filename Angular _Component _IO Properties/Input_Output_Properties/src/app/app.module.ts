import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConComponentComponent } from './con-component/con-component.component';
import { NestComponentComponent } from './nest-component/nest-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ConComponentComponent,
    NestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
