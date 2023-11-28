import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConComponentComponent } from './con-component/con-component.component';
import { NestComponentComponent } from './nest-component/nest-component.component';

const routes: Routes = [
{ path: '', component:ConComponentComponent},
{ path: 'NestComponentComponent', component:NestComponentComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
