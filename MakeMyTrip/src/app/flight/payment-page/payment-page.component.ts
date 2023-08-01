import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { booking } from 'src/Model/booking.model';
import { getBookingBookings } from 'src/NgStore/Booking/booking.selector';
import { BookingStore } from 'src/NgStore/Booking/booking.store';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';
import { PaymentService } from '../Services/payment.service';
import { TripsService } from '../Services/trips.service';

declare var Razorpay:any
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
 bookingData!:booking;
 tripData!:TripStore;


 
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



payNow(){

  const options = {
    key: 'rzp_test_D4KAnFxqNqzQsE',
    amount: this.bookingData.totalPrice*100, 
    name: 'MakeMyTrip',
    description: 'Payment for Order #12345',
    order_id: '', 
    handler: (response: any) => {
      
      this.ser.verifyPayment(response).subscribe({
        next:(data:any)=>{
          this.bookser.bookTrip();
        
        },
        error:(err:any)=>{
          
          
        }
      })
    },
    prefill: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contact: '9876543210',
    },
  };

this.ser.getOrderId(options.amount).subscribe({
  next:(data:any)=>{
    options.order_id = data.orderId
    
    Razorpay.open(options);
  }
})


}



}
