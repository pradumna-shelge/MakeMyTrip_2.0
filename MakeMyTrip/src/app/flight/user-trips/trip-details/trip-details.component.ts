import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../Services/trips.service';
import { Trips, Trips1, flightPassenger } from 'src/Model/filter.model';
import { Store } from '@ngrx/store';
import { AirportModel } from 'src/Model/Airport.model';
import { getAirLineData } from 'src/NgStore/AirLine/AirLineselector';
import { getAirportData } from 'src/NgStore/AirPort/Airport.selector';
import { AirlineInterface } from 'src/Model/Airline';
import { LoadAirLineData } from 'src/NgStore/AirLine/AirLine.action';
import { LoadAirportData } from 'src/NgStore/AirPort/Airport.action';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {
data!:Trips;
data1!:Trips1;
airline!:AirlineInterface[];
airport! :AirportModel[];
  constructor(private par: ActivatedRoute,private ser:TripsService,private store:Store){
    this.store.dispatch(LoadAirLineData());
    this.store.dispatch(LoadAirportData());
    this.store.select(getAirLineData).subscribe(d=>{
this.airline= d
})
this.store.select(getAirportData).subscribe(d=>{
  this.airport= d
})
this.getData();
  }


  getData(){
    this.par.params.subscribe(params => {
      const id = parseInt(params['id'])

      if(id){
        this.ser.getById(id).subscribe({
          next:(data:Trips)=>{
        this.data = data
        this.data1 ={...this.data1,fromAirport: this.airport.find(d=>d.city==data.fromAirport)|| {} as AirportModel}
        this.data1 ={...this.data1,toAirport: this.airport.find(d=>d.city==data.toAirport)|| {} as AirportModel}
        this.data1 ={...this.data1,airline: this.airline.find(d=>d.id==data.airline)|| {} as AirlineInterface}
        this.data1.prnNo = data.prnNo
        this.data1.total = data.total
        this.data1.date = data.date
        this.data1.passengers =Array.isArray(data.passengers) ? data.passengers:[{} as flightPassenger]
        console.log(data,this.data1);
        
        
          },
          error:(err:any)=>{
            console.log(err);
            
          }

        })
      }
  })
}

}
