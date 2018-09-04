import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Router,Routes}  from '@angular/router';
import { NgrdpocHomeComponent } from '../ngrdpoc-home/ngrdpoc-home.component';

const routes:Routes = [
  { 
    path:'',
    component:NgrdpocHomeComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [
  ]
})
export class NgrxRouteModule { }
