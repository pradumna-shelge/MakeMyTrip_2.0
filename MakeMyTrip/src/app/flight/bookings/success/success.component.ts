import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { booking } from 'src/Model/booking.model';
import { TripStore } from 'src/NgStore/Stores.interface';
import { PaymentService } from '../../Services/payment.service';
import { TripsService } from '../../Services/trips.service';
import { getBookingBookings } from 'src/NgStore/Booking/booking.selector';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  bookingData!:booking;
  tripData!:TripStore;
 
 flag=true;
  
   constructor(private store: Store,private ser:PaymentService,private bookser:TripsService ) { 
     this.getBookingData()
   }


   getBookingData(){
    this.store.select(getBookingBookings).subscribe((d)=>{
      this.bookingData=d
    })
    this.store.select(geTrip).subscribe((d)=>{
      this.tripData=d
    })
    }
}
