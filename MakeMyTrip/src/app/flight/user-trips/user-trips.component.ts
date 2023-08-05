import { Component } from '@angular/core';
import { TripsService } from '../Services/trips.service';
import { Trips } from 'src/Model/filter.model';
import { Store } from '@ngrx/store';
import { getAirportData } from 'src/NgStore/AirPort/Airport.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent {
  trips!:Trips[];
constructor(private ser:TripsService,private store:Store,private route :Router){
  this.getAllTrips()  
}


getAllTrips(){
this.ser.getTrips().subscribe({
next:(data:any)=>{
this.trips = data


},
error:(err)=>{

  
}
})
}


tripDetail(id:number){
  this.route.navigate(['/my-trips/', id])
}
}
