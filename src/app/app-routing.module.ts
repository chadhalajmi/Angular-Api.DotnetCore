import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';

const routes: Routes = [
  {path:'ProjectList',component:ProjectListComponent},
  {path:'ProjectUpdate/:id',component:ProjectUpdateComponent},
  {path:'ProjectAdd',component:ProjectAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
