import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TicketClass } from 'src/Model/SearchData.model';
import { LoadTotalPrice } from 'src/NgStore/Booking/booking.action';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip, tripStore } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent {
  data!:TripStore;
  TicketClass:string[] = TicketClass;
  priceData:{
    base:number,
    taxes:number,
    Surcharges:number,
    passengers:number,
    total:number,
    ExtraCharges:number,
  }={} as any

  constructor(private store:Store,private route:Router){
    
    this.getData()
  }
getData(){
  this.store.select(geTrip).subscribe(d=>{
    if(d.error){
    }
    else{
      this.data=d;
    
      this.calculate()
    }
        })
}


  calculate(){
    this.priceData.passengers =    this.data.search.passengers.adults??0+this.data.search.passengers.child??0+  this.data.search.passengers.infants??0;
    this.priceData.base =this.priceData.passengers  * (this.data.journey1? this.data.journey.price+this.data.journey1.price:this.data.journey.price) ;
    this.priceData.Surcharges= this.data.journey1? this.data.journey.surcharges+this.data.journey1.surcharges:this.data.journey.surcharges
    this.priceData.ExtraCharges = 0;
    this.priceData.total= this.priceData.base+this.priceData.Surcharges+this.priceData.ExtraCharges 

 

    this.store.dispatch(LoadTotalPrice({data: this.priceData.total}))
  }
}
