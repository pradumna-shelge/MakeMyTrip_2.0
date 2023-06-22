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

@NgModule({
  declarations: [
    HomePageComponent,
    
    
    SearchResultComponent,
    JourneyDataComponent,
    FilterComponent,
    
    
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
    MatMenuModule
    
  ]
})
export class FlightModule { }
