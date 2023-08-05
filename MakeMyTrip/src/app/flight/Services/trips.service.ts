import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { booking } from 'src/Model/booking.model';
import { Trips } from 'src/Model/filter.model';
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
return  this.http.get<Trips[]>(baseApi+"Trip"+`?email=${UserEmail}`);
}


bookTrip(data:booking){
  const email = this.ser.getEmail()
  data= {...data,userEmail:email} ;

   return this.http.post(baseApi+"Booking",data)
  
}


getById(id:number){
const data={
  id:id,
  email : this.ser.getEmail()
}
  return this.http.post<Trips>(baseApi+"Trip",data)

}

  
}
