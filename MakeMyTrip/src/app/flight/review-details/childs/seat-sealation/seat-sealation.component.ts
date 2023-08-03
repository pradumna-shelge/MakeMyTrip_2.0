import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TicketClass } from 'src/Model/SearchData.model';
import { LoadBookingSeats, LoadBookingSeats2 } from 'src/NgStore/Booking/booking.action';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-seat-sealation',
  templateUrl: './seat-sealation.component.html',
  styleUrls: ['./seat-sealation.component.css']
})
export class SeatSealationComponent {
  tikitclass=TicketClass;
  data!:TripStore;
  passengerCount = this.data.search.passengers.adults+this.data.search.passengers.child;
  returnFlag=false;


  constructor(private store:Store,private route:Router){
     
    this.store.select(geTrip).subscribe(d=>{
if(d.error){
}
else{
  this.data={...this.data,...d};
  if(!d.journey1?.From){
    
     this.data={...this.data,journey1:undefined}
  }

  this.passengerCount= this.data.search.passengers.adults+this.data.search.passengers.child
}
    })
  }


  generateRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  generateAlphabetRange(start: string, end: string): string[] {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(start);
    const endIndex = alphabet.indexOf(end);
    return alphabet.slice(startIndex, endIndex + 1).split('');
  }
  selectedSeatsJourney: string[] = [];
  selectedSeatsJourney2: string[] = [];


  onSeatClick(row: number, column: string,type:number): void {
    const seatKey = `${row}${column}`;  
    if(type==1){

      let inx  = this.selectedSeatsJourney.indexOf(seatKey)
     if(inx==-1){
       
      this.selectedSeatsJourney.push(seatKey)
  
     }
     else{
      this.selectedSeatsJourney.splice(inx,1)
     }
      if(this.selectedSeatsJourney.length>this.passengerCount){
        this.selectedSeatsJourney.pop()
      }
    }
    else{

      let inx  = this.selectedSeatsJourney2.indexOf(seatKey)
      if(inx==-1){
        
       this.selectedSeatsJourney2.push(seatKey)
   
      }
      else{
       this.selectedSeatsJourney2.splice(inx,1)
      }
       if(this.selectedSeatsJourney2.length>this.passengerCount){
         this.selectedSeatsJourney2.pop()
       }
    }
    
  }

  isSeatSelected(row: number, column: string,type:number): boolean {
    const seatKey = `${row}${column}`;
    if(type==1){
      return this.selectedSeatsJourney.indexOf(seatKey)!=-1;
    }
    return this.selectedSeatsJourney2.indexOf(seatKey)!=-1;
  }


  AlreadyBooked(name:string,seatclass:number,type:number){
   if(type==1){
    
     return ((this.data.journey.bookedSeats.indexOf(name) != -1) || seatclass!= this.data.search.seatTypes)
   }
   return ((this.data.journey1?.bookedSeats.indexOf(name) != -1) || seatclass!= this.data.search.seatTypes)
  }

  sameclass(seatclass:number){
  return   seatclass==this.data.search.seatTypes
  }

  Continue (){
  
  

  this.store.dispatch(LoadBookingSeats({data:this.selectedSeatsJourney,seatType:this.data.search.seatTypes}))
if(this.data.journey1){
  this.store.dispatch(LoadBookingSeats2({data:this.selectedSeatsJourney2,seatType:this.data.search.seatTypes}))

}
  this.route.navigate(['flight/payment'])
  }


  getPrice(row: number    , column: string): string {
  
    const price = this.data.journey.price;
    return price ? `seat price ${price}` : 'Price is not avaliable'; 
  }


  changeLayout(){
    this.returnFlag = !this.returnFlag
  }
}
