import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,
children:[
  { path: '', component: SearchResultComponent },
] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
