import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getBookingBookings } from 'src/NgStore/Booking/booking.selector';
import { LoginService } from 'src/app/common/services/login.service';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http:HttpClient,private ser:LoginService,private store:Store,private route :Router) {
    
   }



getTrips(){
  let UserEmail = this.ser.getEmail();

return  this.http.get(baseApi+"Trip"+`?email=pradumnashelge%40gmail.com`);
}


bookTrip(){
let flag = false;
const email = this.ser.getEmail()
  this.store.select(getBookingBookings).subscribe(d=>{
    d= {...d,userEmail:email} ;
    console.log(d);
    
    this.http.post(baseApi+"Booking",d).subscribe({
      next:(mes:any)=>{
        console.log(mes);
        alert("trip is booked")
       this.route.navigate(['/my-trips'])
      },
      error:(err:any)=>{
        console.log(err);
        this.route.navigate(['/flight'])
      }
      
    })
  })

 
}

  
}
