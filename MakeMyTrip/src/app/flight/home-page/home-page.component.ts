import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AirlineInterface } from 'src/Model/Airline';
import { searchData, JourneyData, searchPost } from 'src/Model/SearchData.model';
import { filterInterface } from 'src/Model/filter.model';
import { JourneyInterface } from 'src/Model/journey.model';
import { getAirLineData } from 'src/NgStore/AirLine/AirLineselector';
import { SearchStore, AirlineStore, TripStore } from 'src/NgStore/Stores.interface';
import { getSearchData } from 'src/NgStore/search/Search.selector';
import { JourneysService } from '../Services/journeys.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  FilterData!:filterInterface 
 
  
  search:searchData={} as searchData;
  data!:JourneyData[];
  modifiedData!:JourneyInterface[];
  filteredData!:JourneyInterface[];
  JourneyDatapost!:searchPost;
  airlines!:AirlineInterface[];
  FlightDetail!:JourneyInterface
constructor(private router:Router, private JourneysService:JourneysService ,private searchStore:Store<SearchStore>,private airlineStore:Store<AirlineStore>,private tripStore:Store<TripStore>){
 

}
filterData(data:filterInterface){
  this.filteredData  = this.modifiedData;
   if(data.Price){
    const PriceData =  data.Price.split('-')
       let low= Number( PriceData[0]);
       let high =Number( PriceData[1]);
       console.log(data);
       
     this.filteredData  = this.filteredData.filter(m=> m.price>=low && m.price<= high )
   }

   if(data.DepartureTime){
    const PriceData =  data.DepartureTime.split('-')
    const timeValue = '12AM'; 
const [hours, minutes] = timeValue.split(/(?<=\d)(?=[A-Z])/)[0].split(':').map(Number);
const date = new Date();
date.setHours(hours % 12);
date.setMinutes(minutes);
       let low= Number( PriceData[0]);
       let high =Number( PriceData[1]);
    this.FilterData = this.filteredData.filter(m=> m.price>=low && m.price<= high )
   }


}
  ngOnInit(): void {
    this.getAirline();
  this.getAirports();
  }

  getAirline(){
this.airlineStore.select(getAirLineData).subscribe(data=>{
  this.airlines = data;
})
  }


  

  getAirports(){
    this.searchStore.select(getSearchData).subscribe({
      next:(data:searchData)=>{
       this.search=data
      
       console.log("secound"+this.search);
       if(this.search){

         this.JourneyDatapost= {
          fromID: this.search.from?.airportId,
          toID: this.search.to.airportId ,
          depatureDate: this.search.departureTime.toDateString(),
          returnDate: this.search.returnTime?.toDateString()??''
       }
        }

        this.getJourneys()
      },
      error:(err)=>{
       alert('Search Data Error  ')
      }
     })
  }

  getJourneys(){
     console.log(this.JourneyDatapost);
     
     this.JourneysService.getJourneys(this.JourneyDatapost).subscribe({
     next:(apiData:JourneyData[])=>{
         this.data = apiData;
         console.log(this.data);
         this.modifyData()
     },
     error:(err)=>{
       alert(' Could not retrieve Journey data')
       
     }
    })
  }


modifyData(){
  const tempData:any=[]
  this.data.forEach((ob:JourneyData)=>{
    var d:JourneyInterface = {
       id:ob.journayId,
       airline: this.airlines.find(a=>ob.airlineId==a.id)??{}as AirlineInterface,
       from:this.search.from,
       to:this.search.to,
       departureTime:ob.depature,
       arrivalTime:ob.arrival,
       duration: this.getDuration(ob.depature,ob.arrival),
       baggage:34,
       price:5025,
       cabin:7,
       Surcharges:300
       
    }
    tempData.push(d);
  }) 

  this.modifiedData = tempData;
  this.filteredData = this.modifiedData
}


getDuration(date1:Date,date2:Date){
  date1 = new Date(date1)
  date2 = new Date(date2)
  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
  return `${hours}h ${minutes}min`;
}


}
