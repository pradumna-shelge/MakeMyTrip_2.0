import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AirportModel } from 'src/Model/Airport.model';
import { searchData,TicketClass } from 'src/Model/SearchData.model';
import { AireLineService } from '../flight/Services/aire-line.service';
import { AirportService } from '../services/airport.service';
import { SearchDataService } from '../services/search-data.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  num=[0,1,2,3,4,5,6,7,8];
  TicketClass = TicketClass;
  airport:AirportModel[]=[];
  filterAirport:AirportModel[]=[];
  search!:searchData
form :AirportModel={}as AirportModel
  to: AirportModel={}as AirportModel;
  tripType: number=1;
  seatTypes=1;
  adults: number=1;
  child: number=0;
  infants: number=0;
  departure =new Date();
  return: Date|null = this.departure;
  



  constructor( private airportService:AirportService,private searchService:SearchDataService,private router:Router){

    this.airportService.get().subscribe((airports:AirportModel[]) =>{
      this.airport = airports
      
      this.form = this.airport[0],
      this.to = this.airport[1]

      this.search={
        from:this.airport[0],
        to:this.airport[1],
        departureTime:new Date(),
        returnTime:null,
        passengers:{
          adults:1,
          child:0,
          infants:0
        },
        tripType:1,
        seatTypes:1
      }
      this.searchService.set(this.search)
    
     
    })
  }

  checkAirport(val:string){
  this.filterAirport = this.airport.filter((airport:AirportModel) => airport.city.toLowerCase().match(val.toLowerCase()))
  }

  from(ob:AirportModel,n:number){
    
    if(n==1){
      this.form = ob;
    }
    else{
      this.to =ob
    }
       
  }
  
 


 
ChageAirport(val:AirportModel, fromFlag:boolean){

if(fromFlag ){
  this.search.from = val;
  this.form = val;
}
else{
  this.search.to = val;
  this.to = val
}
console.log(this.search);

}


PatchSearch(){
  this.search = {
    tripType:this.tripType,
    seatTypes:this.seatTypes,
    from:this.form,
    to:this.to,
    departureTime:this.departure,
    returnTime:this.return,
    passengers:{
      adults:this.adults,
      child:this.child,
      infants:this.infants
    }

  }
  this.searchService.set(this.search)
  console.log("first");
  
  console.log(this.search);
  
  this.router.navigate(['/flight'])
}
}
