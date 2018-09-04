import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { appRouting } from './app-route/app-route.module';
import { NavComponent } from './nav/nav.component';

// import { CollegeComponent } from './University/college/college.component';
// import { ServicesService } from './University/services.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    //CollegeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [ 
    //ServicesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
