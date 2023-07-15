import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tripInterface } from 'src/Model/journey.model';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent {

  journey!:TripStore;
  

  constructor(private store:Store,private route:Router){
     
    this.store.select(geTrip).subscribe(d=>{
if(d.error){
}
else{
  this.journey=d;
}
    })
  }
}
