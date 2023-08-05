import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MyProfileComponent } from './common/my-profile/my-profile.component';
import { UserTripsComponent } from './flight/user-trips/user-trips.component';
import { FlightGuard } from './gards/flight.guard';
import { TripDetailsComponent } from './flight/user-trips/trip-details/trip-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  
  {path:'flight',loadChildren:()=>import('./flight/flight.module').then(m=>m.FlightModule),canActivate:[FlightGuard]},
  // {path:'flight/:tripType/:seatTypes/:from/:to/:departureTime/:returnTime/:adults/:child/:infants',loadChildren:()=>import('./flight/flight.module').then(m=>m.FlightModule),canActivate:[FlightGuard]},

  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-trips', component: UserTripsComponent },
  { path: 'my-trips/:id', component: TripDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
