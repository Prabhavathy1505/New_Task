import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentCountComponent } from './student-count/student-count.component';

const routes: Routes = [
  {path: 'StudentData', component:StudentDataComponent},
  {path:'StudentCount', component:StudentCountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
