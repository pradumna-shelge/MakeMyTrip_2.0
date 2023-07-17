import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TicketClass } from 'src/Model/SearchData.model';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent {
  data!:TripStore;
  TicketClass:string[] = TicketClass;

  constructor(private store:Store,private route:Router){
     
    this.store.select(geTrip).subscribe(d=>{
if(d.error){
}
else{
  this.data=d;
}
    })
  }
}
