import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';

const routes: Routes = [
  { path: '', component: StudentRegisterComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'update/:id' , component: StudentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
