import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { FlightRoutingModule } from './flight-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider'
import {MatButtonToggle,MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JourneyDataComponent } from './journey-data/journey-data.component';
import { FilterComponent } from './filter/filter.component';

import { CommonModules } from '../common/common.module';
import { TestingComponent1 } from './testing/testing.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AirportEffects } from 'src/NgStore/AirPort/Airport.effect';
import { AirportReducer } from 'src/NgStore/AirPort/Airport.reduser';
import { SearchReducer } from 'src/NgStore/search/Search.reduser';
import { FlightDetailComponent } from './journey-data/journeyDetail/flight-detail/flight-detail.component';
import { FareSummaryComponent } from './journey-data/journeyDetail/fare-summary/fare-summary.component';
import { CancellationComponent } from './journey-data/journeyDetail/cancellation/cancellation.component';
import { DateChangeComponent } from './journey-data/journeyDetail/date-change/date-change.component';
import { JourneyDetailComponent } from './journey-data/journeyDetail/journey-detail/journey-detail.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { PaymentDetailComponent } from './review-details/childs/payment-detail/payment-detail.component';
import { PassngerDetailComponent } from './review-details/childs/passnger-detail/passnger-detail.component';
import { ReviewJourneyComponent } from './review-details/childs/review-journey/review-journey.component';
import { SeatSealationComponent } from './review-details/childs/seat-sealation/seat-sealation.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentLayoutComponent } from './payment-page/payment-layout/payment-layout.component';
import { UserTripsComponent } from './user-trips/user-trips.component';

@NgModule({
  declarations: [
    HomePageComponent,
    
    
    SearchResultComponent,
    JourneyDataComponent,
    FilterComponent,
    TestingComponent1,
    FlightDetailComponent,
    FareSummaryComponent,
    CancellationComponent,
    DateChangeComponent,
    JourneyDetailComponent,
    ReviewDetailsComponent,
    PaymentDetailComponent,
    PassngerDetailComponent,
    ReviewJourneyComponent,
    SeatSealationComponent,
    PaymentPageComponent,
    PaymentLayoutComponent,
    UserTripsComponent,
    
    
  ],
  imports: [
    CommonModule,
    CommonModules,
    FlightRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,

  ]
})
export class FlightModule { }
