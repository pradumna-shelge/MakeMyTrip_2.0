import { Component } from '@angular/core';
import { TripsService } from '../Services/trips.service';

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.css']
})
export class UserTripsComponent {
  trips:any;
constructor(private ser:TripsService){
  this.getAllTrips()  
}


getAllTrips(){
this.ser.getTrips().subscribe({
next:(data:any)=>{
this.trips = data
},
error:(err)=>{
  console.log(err);
  
}
})
}
}
