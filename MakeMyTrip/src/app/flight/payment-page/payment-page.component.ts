import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { booking } from 'src/Model/booking.model';
import { getBookingBookings } from 'src/NgStore/Booking/booking.selector';
import { BookingStore } from 'src/NgStore/Booking/booking.store';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
 bookingData!:booking;
 tripData!:TripStore;
  constructor(private store: Store ) { 
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
