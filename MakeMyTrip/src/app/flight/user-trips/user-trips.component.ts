import { Component } from '@angular/core';
import { TripsService } from '../Services/trips.service';
import { Trips } from 'src/Model/filter.model';

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent {
  trips!:Trips[];
constructor(private ser:TripsService){
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
}
