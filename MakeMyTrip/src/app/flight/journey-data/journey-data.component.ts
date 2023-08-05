import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AireLineService } from '../Services/aire-line.service';
import { JourneyData, searchData, searchPost } from 'src/Model/SearchData.model';
import { JourneysService } from '../Services/journeys.service';
import { AirlineInterface } from 'src/Model/Airline';
import { Store } from '@ngrx/store';
import { AirlineStore, SearchStore, TripStore } from 'src/NgStore/Stores.interface';
import { getSearchData } from 'src/NgStore/search/Search.selector';
import { filterInterface } from 'src/Model/filter.model';
import { JourneyInterface, JourneyS } from 'src/Model/journey.model';
import { getAirLineData } from 'src/NgStore/AirLine/AirLineselector';
import { LoadReturnData, LoadTripData } from 'src/NgStore/tripDetail/trip.ngStore';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/common/services/login.service';

@Component({
  selector: 'app-journey-data',
  templateUrl: './journey-data.component.html',
  styleUrls: ['./journey-data.component.css']
})
export class JourneyDataComponent  {
 
 
  @Input() modifiedData!:JourneyS;
  @Output() AddToBook =  new EventEmitter()
  FlightDetail!:JourneyInterface
  search!:searchData;
  loginFlag =false;
constructor(private logser:LoginService, private router:Router, private JourneysService:JourneysService ,private searchStore:Store<SearchStore>,private airlineStore:Store<AirlineStore>,private tripStore:Store<TripStore>){
  this.searchStore.select(getSearchData).subscribe(d=>{
    this.search= d
  })

  this.loginFlag = this.logser.islogin()
}
  
flightDetail(d:JourneyInterface){
  
this.FlightDetail= d;
}



isIterable(data:JourneyInterface){
  return Array.isArray(data)
}


addToBook(den:JourneyInterface|undefined,ren:JourneyInterface|undefined){
this.AddToBook.emit({den,ren})
}
}
