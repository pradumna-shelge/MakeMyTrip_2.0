import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewJourneyComponent } from './review-details/childs/review-journey/review-journey.component';
import { SeatSealationComponent } from './review-details/childs/seat-sealation/seat-sealation.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { UserTripsComponent } from './user-trips/user-trips.component';


const routes: Routes = [
  
  { path: '', component: HomePageComponent,
},
{ path: 'review', component: ReviewDetailsComponent,children:[
  { path: '', component: ReviewJourneyComponent },

 { path: 'seat', component: SeatSealationComponent },
] },

{ path: 'payment', component: PaymentPageComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
