import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AirportModel } from 'src/Model/Airport.model';
import { TicketClass, searchData } from 'src/Model/SearchData.model';
import { LoadAirportData } from 'src/NgStore/AirPort/Airport.action';
import { AirportStore } from 'src/NgStore/AirPort/Airport.reduser';
import { getAirportData } from 'src/NgStore/AirPort/Airport.selector';
import { AirlineStore, SearchStore } from 'src/NgStore/Stores.interface';
import { LoadSearchData } from 'src/NgStore/search/Search.action';
import { getSearchData } from 'src/NgStore/search/Search.selector';
import { AirportService } from 'src/app/services/airport.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  TicketClass = TicketClass;
  airport:AirportModel[]=[];
  filterAirport:AirportModel[]=[];
  searchData!:searchData
  tripType:number=1
  
  constructor(private router:Router,private airportStore:Store<AirportStore>,private searchStore:Store<SearchStore>){

    this.airportStore.dispatch(LoadAirportData())
    this.airportStore.select(getAirportData).subscribe((airports:AirportModel[]) =>{
      this.airport = airports
      });
      this.searchStore.select(getSearchData).subscribe((search:searchData) =>{
          this.searchData = search;
          this.tripType = this.searchData.tripType
    })
  }



  checkAirport(val:string){
  this.filterAirport = this.airport.filter((airport:AirportModel) => airport.city.toLowerCase().match(val.toLowerCase()))
  }

ChangeAirport(val:AirportModel, fromFlag:boolean){
  this.searchData =fromFlag? { ...this.searchData, from: val }:{ ...this.searchData, to: val };
}

ChangeDate(val1:string, fromFlag:boolean){
 var val = new Date(val1);
 console.log(val);
 
  this.searchData =fromFlag? { ...this.searchData, departureTime:  val }:{ ...this.searchData, returnTime: val };
}

changePass(val:number,pos:number){
if(pos==1){
  this.searchData = {...this.searchData,passengers:{...this.searchData.passengers,adults:val}}
}
else if(pos==2){
  this.searchData = {...this.searchData,passengers:{...this.searchData.passengers,child:val}}
}

else if(pos==3){
  this.searchData = {...this.searchData,passengers:{...this.searchData.passengers,infants:val}}
}

else{
  this.searchData = {...this.searchData,seatTypes:val}
}
}
PatchSearch(){
  this.searchStore.dispatch(LoadSearchData({data:this.searchData}))
  this.router.navigate(['/flight'])
}
}
