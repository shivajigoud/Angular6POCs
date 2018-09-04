import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule,Router,Routes}  from '@angular/router';

const routes:Routes = [
  { 
    path:'university',
    loadChildren:'../University/university.module#UniversityModule'
  },
  { 
      path:'ngrxpoc',
      loadChildren:'../ngrxpoc/ngrxpoc.module#NGRXPocModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class appRouting { }