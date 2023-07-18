import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';


const routes: Routes = [
  
  { path: '', component: HomePageComponent,
},
{ path: 'review', component: ReviewDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
