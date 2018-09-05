import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

import { appRouting } from './app-route/app-route.module';
import { NavComponent } from './nav/nav.component';

// import { CollegeComponent } from './University/college/college.component';
// import { ServicesService } from './University/services.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    SharedModule
  ],
  providers: [ 
    //ServicesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
