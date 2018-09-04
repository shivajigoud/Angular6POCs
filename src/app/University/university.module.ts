import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UniversityRouteModule } from './university-route/university-route.module';
import { CollegeComponent } from './college/college.component';
import { ServicesService } from './services.service';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { UniversityNavComponent } from './university-nav/university-nav.component';
import { UniversityComponent } from './university/university.component';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { ModalServiceService } from './modal-service.service';
import { CollegeLandingComponent } from './college-landing/college-landing.component';
import { HostelsComponent } from './hostels/hostels.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UniversityRouteModule
  ],
  declarations: [ 
    CollegeComponent, 
    CountryComponent, 
    StateComponent, 
    CityComponent, 
    UniversityNavComponent, 
    UniversityComponent, 
    ModalpopupComponent, 
    CollegeLandingComponent, 
    HostelsComponent, 
    StudentsComponent 
  ],
  providers:[ ServicesService, ModalServiceService ]
})
export class UniversityModule { 
}
