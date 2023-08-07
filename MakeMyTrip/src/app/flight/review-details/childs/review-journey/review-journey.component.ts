import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TicketClass } from 'src/Model/SearchData.model';
import { JourneyInterface } from 'src/Model/journey.model';
import { LoadBooking, LoadFirstJourneyId, LoadReturnJourneyId } from 'src/NgStore/Booking/booking.action';

import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-review-journey',
  templateUrl: './review-journey.component.html',
  styleUrls: ['./review-journey.component.css']
})
export class ReviewJourneyComponent {
  data!:TripStore;
  TicketClass:string[] = TicketClass;
  flightDetail!:JourneyInterface
  constructor(private store:Store,private route:Router){
   
    this.store.select(geTrip).subscribe(d=>{
if(!d.journey.journeyId){
this.route.navigate(['/flight'])
}
else {

  this.data={...this.data,...d};

  if(!d.journey1?.From){
     this.data={...this.data,journey1:undefined}
  }


  this.store.dispatch(LoadFirstJourneyId({data:d.journey.journeyId}))
  if(d.journey1){
    this.store.dispatch(LoadReturnJourneyId({data:d.journey1.journeyId}))

  }
 
}
    })
  }


 

dataChange(d:JourneyInterface){
this.flightDetail = d
}

}
