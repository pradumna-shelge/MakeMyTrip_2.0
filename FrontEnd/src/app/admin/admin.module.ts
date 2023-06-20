import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JourneyComponent } from './journey/journey.component';
import { FlightsComponent } from './flights/flights.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    JourneyComponent,
    FlightsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
