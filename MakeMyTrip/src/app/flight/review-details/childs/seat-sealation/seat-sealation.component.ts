import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TicketClass } from 'src/Model/SearchData.model';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-seat-sealation',
  templateUrl: './seat-sealation.component.html',
  styleUrls: ['./seat-sealation.component.css']
})
export class SeatSealationComponent {
  data!:TripStore;
  TicketClass:string[] = TicketClass;

  constructor(private store:Store,private route:Router){
     
    this.store.select(geTrip).subscribe(d=>{
if(d.error){
}
else{
  this.data={...this.data,...d};
  if(!d.journey1?.From){
     this.data={...this.data,journey1:undefined}
  }
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
  selectedSeats: { [key: string]: boolean } = {};



  onSeatClick(row: number, column: string): void {
    
    const seatKey = `${row}${column}`;
    this.selectedSeats[seatKey] = !this.selectedSeats[seatKey];
  }

  isSeatSelected(row: number, column: string): boolean {
    const seatKey = `${row}${column}`;
    return this.selectedSeats[seatKey];
  }


  AlreadyBooked(name:string){


    return this.data.journey.bookedSeats.indexOf(name) == -1
  }
}
