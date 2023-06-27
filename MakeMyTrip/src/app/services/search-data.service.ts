import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { searchData } from 'src/Model/SearchData.model';
import { AirportService } from './airport.service';
import { AirportModel } from 'src/Model/Airport.model';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  private data:BehaviorSubject<searchData>;
  constructor(private http:HttpClient,private airportService:AirportService) { 
    const data :searchData= {} as searchData;

    this.data = new BehaviorSubject<searchData>(data);
this.setDefault();
  }

get(){
return this.data.asObservable();
}

set(val:searchData){
this.data.next(val);
}
setDefault(){
  this.airportService.get().subscribe((airports:AirportModel[]) =>{
    const airport = airports
    


   const search={
      from:airport[0],
      to:airport[1],
      departureTime:new Date(),
      returnTime:new Date(),
      passengers:{
        adults:1,
        child:0,
        infants:0
      },
      tripType:1,
      seatTypes:1
    }
    this.set(search)
  
   
  })
}

}
