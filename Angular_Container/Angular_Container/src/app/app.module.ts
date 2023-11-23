import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentCountComponent } from './student-count/student-count.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    StudentCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
