import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router,Routes}  from '@angular/router';
import { CollegeComponent } from '../college/college.component';
import { CountryComponent } from '../country/country.component';
import { StateComponent } from '../state/state.component';
import { CityComponent } from '../city/city.component';
import { UniversityComponent } from '../university/university.component';
import { CollegeLandingComponent } from '../college-landing/college-landing.component';
import { HostelsComponent } from '../hostels/hostels.component';
import { StudentsComponent } from '../students/students.component';

const routes:Routes = [
  { 
    path:'',
    component:UniversityComponent,
    children:[
      {
        path:'country',
        component:CountryComponent
      },
      {
        path:'state',
        component:StateComponent
      },
      {
        path:'city',
        component:CityComponent
      },
      {
        path:'colleges',
         component:CollegeComponent,
         children:[
          
          ]
       },
       {
        path:'college/:id/show',
        component:CollegeLandingComponent
       },
       {
        path:'college/:id/hostels',
        component:HostelsComponent
       },
       {
        path:'college/:id/students',
        component:StudentsComponent
       }
       
    ]
  }
  
]
//export const UniversityRouteModule: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRouteModule { }