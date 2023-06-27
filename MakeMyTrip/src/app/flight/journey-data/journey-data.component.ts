import { Component, OnInit } from '@angular/core';
import { AireLineService } from '../Services/aire-line.service';
import { JourneyData, JourneyModified, searchData, searchPost } from 'src/Model/SearchData.model';
import { SearchDataService } from 'src/app/services/search-data.service';
import { JourneysService } from '../Services/journeys.service';
import { AirlineInterface } from 'src/Model/Airline';

@Component({
  selector: 'app-journey-data',
  templateUrl: './journey-data.component.html',
  styleUrls: ['./journey-data.component.css']
})
export class JourneyDataComponent implements OnInit {
  search:searchData={} as searchData;
  data!:JourneyData[];
  modifiedData!:JourneyModified[];
  JourneyDatapost!:searchPost;
  airlines!:AirlineInterface[]
constructor(private JourneysService:JourneysService ,private searchService:SearchDataService,private AireLineService:AireLineService){
 

}
  ngOnInit(): void {
    this.getAirline();
  this.getAirports();
  
  }

  getAirline(){
this.AireLineService.getAll().subscribe(data=>{
  this.airlines = data;
})
  }


  getAirports(){
    this.searchService.get().subscribe({
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
  const newdata:JourneyModified[]=[]
  this.data.forEach((ob:JourneyData)=>{
    // var timeDiff = ob.depature.getTime() - ob.arrival.getTime();
    // console.log(timeDiff+"hello");
    // var hours = Math.floor(timeDiff / (1000 * 60 * 60));
    
// var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var d :JourneyModified= {
       airlineId :ob.airlineId,
       logo: this.airlines.find(o=>o.id == ob.airlineId)?.logo?? '',
       journayId:ob.journayId,
       arrival:ob.arrival,
       depature:ob.depature,
       airline:this.airlines.find(o=>o.id == ob.airlineId)?.name?? '',
       time:`${2}h ${12}m`
    }
    console.log(d);
    
    newdata.push(d);
  }) 

  this.modifiedData = newdata;
}

}
