import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MyProfileComponent } from './common/my-profile/my-profile.component';
import { UserTripsComponent } from './flight/user-trips/user-trips.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  
  {path:'flight',loadChildren:()=>import('./flight/flight.module').then(m=>m.FlightModule)},

  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-trips', component: UserTripsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
