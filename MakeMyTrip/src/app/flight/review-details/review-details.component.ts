import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tripInterface } from 'src/Model/journey.model';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';
import { TicketClass, searchData } from 'src/Model/SearchData.model';
import { BookingStore } from 'src/NgStore/Booking/booking.store';
import { getBookingData } from 'src/NgStore/Booking/booking.selector';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent {
data = this.store.select(getBookingData);
  constructor(private store:Store,private route:Router){

  }
}
