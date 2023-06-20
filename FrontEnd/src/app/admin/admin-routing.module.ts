import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JourneyComponent } from './journey/journey.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  { path: '', component: HomepageComponent,
children: [
  { path: '', component: JourneyComponent },
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
