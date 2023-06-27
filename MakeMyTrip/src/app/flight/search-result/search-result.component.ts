import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AirportModel } from 'src/Model/Airport.model';
import { TicketClass, searchData } from 'src/Model/SearchData.model';
import { AirportService } from 'src/app/services/airport.service';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
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
  return: Date|null|undefined = this.departure;
  



  constructor( private airportService:AirportService,private searchService:SearchDataService,private router:Router){

    this.airportService.get().subscribe((airports:AirportModel[]) =>{
      this.airport = airports
     
    })

    this.searchService.get().subscribe({
     next:(data:searchData)=>{
      this.search=data
      this.tripType = this.search.tripType;
      this.form = this.search.from,
      this.to = this.search.to,
      this.departure = this.search.departureTime ,
      this.return = this.search.returnTime,
      this.seatTypes = this.search.seatTypes,
      this.adults = this.search.passengers.adults,
      this.child = this.search.passengers.child,
      this.infants = this.search.passengers.infants
      console.log("secound"+this.search);
      
     },
     error:(err)=>{
      alert('Search Data Error  ')
     }
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
  
 

  //   fromFlag=false;
  //   ToFlag=false;
  //   fromToggle(){
  //       this.fromFlag =! this.fromFlag
  //       this.ToFlag = false
  //   }
  //   toToggle(){
  //     this.ToFlag =! this.ToFlag
  //     this.fromFlag = false 
  // }
 
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
    returnTime:this.tripType==1?null:this.return,
    passengers:{
      adults:this.adults,
      child:this.child,
      infants:this.infants
    }

  }
  this.searchService.set(this.search)
  this.router.navigate(['/flight'])
}
}
