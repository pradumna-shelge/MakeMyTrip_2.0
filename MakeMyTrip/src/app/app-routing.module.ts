import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path:'flight',loadChildren:()=>import('./flight/flight.module').then(m=>m.FlightModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
