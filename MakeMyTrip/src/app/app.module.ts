import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatButtonToggle,MatButtonToggleModule} from '@angular/material/button-toggle'

import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModules } from './common/common.module';
import { MyProfileComponent } from './common/my-profile/my-profile.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AirportReducer } from 'src/NgStore/AirPort/Airport.reduser';
import { AirportEffects } from 'src/NgStore/AirPort/Airport.effect';
import { SearchReducer } from 'src/NgStore/search/Search.reduser';
import { AirLienEffects } from 'src/NgStore/AirLine/AirLine.effect';
import { AirLineReducer } from 'src/NgStore/AirLine/AirLine.reduser';
import { TripReducer } from 'src/NgStore/tripDetail/trip.ngStore';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent,
    
  
    
  ],
  imports: [
    CommonModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleModule,
    StoreModule.forRoot({Airport:AirportReducer,search:SearchReducer,airline:AirLineReducer,trip:TripReducer}),
    EffectsModule.forRoot(AirportEffects,AirLienEffects)
    
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
