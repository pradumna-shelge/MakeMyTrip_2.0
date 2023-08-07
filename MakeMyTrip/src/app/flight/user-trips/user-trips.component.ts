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
  newTrips!:Trips[];
  flag=3;
constructor(private ser:TripsService,private store:Store,private route :Router){
  this.getAllTrips()  
}


getAllTrips(){
this.ser.getTrips().subscribe({
next:(data:any)=>{
this.trips = data
this.newTrips = data

},
error:(err)=>{

  
}
})
}


tripDetail(id:number){
  this.route.navigate(['/my-trips/', id])
}

filter(no:number){
this.flag=no
let nowDate = new Date()
if(no==1){

  this.newTrips = this.trips.filter(d=> new Date(d.date) > nowDate)
}
else if(no==2){
  this.newTrips = this.trips.filter(d=> new Date(d.date) < nowDate)

}

else{
  this.newTrips = this.trips
}

}

}
