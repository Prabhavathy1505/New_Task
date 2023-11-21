

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template1Component } from './template1/template1.component';

const routes: Routes = [
  { path: 'my-route', component:Template1Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

