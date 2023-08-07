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
import { Router } from '@angular/router';
import { gettripPrice } from 'src/NgStore/Payment/payment';
import { LoadTotalPrice } from 'src/NgStore/Booking/booking.action';
import { ToasterService } from 'src/app/services/toaster.service';
import { ToastrService } from 'ngx-toastr';

declare var Razorpay:any
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
 bookingData!:booking;
 tripData!:TripStore;
 priceDetail = this.store.select(gettripPrice)
flag=true;
 
  constructor(private tostSer:ToasterService,private store: Store,private ser:PaymentService,private bookser:TripsService,private router:Router ) { 
    this.flag=true
    this.getBookingData()
  }


  getBookingData(){
    this.store.select(gettripPrice).subscribe(d=>{

      let total = d.total;
this.store.dispatch(LoadTotalPrice({data:total}))

    })
this.store.select(getBookingBookings).subscribe((d)=>{
  this.bookingData=d
})
this.store.select(geTrip).subscribe((d)=>{
  this.tripData=d

  if(!d.journey.From){
    this.router.navigate(['/flight'])
  }
})
}



payNow(){
  this.flag=false
  const options = {
    key: 'rzp_test_D4KAnFxqNqzQsE',
    amount: this.bookingData.totalPrice*100, 
    name: 'MakeMyTrip',
    description: 'Payment for Order #12345',
    order_id: '', 
    handler: (response: any) => {
      
      this.ser.verifyPayment(response).subscribe({
        next:(data:any)=>{
          
          
            
            this.bookser.bookTrip(this.bookingData).subscribe({
              next:(mes:any)=>{
              console.log(mes);
             
              this.tostSer.showSuccess("booking is Successful go to trips for details","Trip Booking")
              this.router.navigate(['/flight'])
              },
              error:(err:any)=>{
                
                this.tostSer.showError("Something Wrong try again later ","Trip Booking")
                this.router.navigate(['/flight'])
              }
              
            });
        
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
