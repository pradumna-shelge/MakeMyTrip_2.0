import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TicketClass } from 'src/Model/SearchData.model';
import { LoadBookingSeats } from 'src/NgStore/Booking/booking.action';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-seat-sealation',
  templateUrl: './seat-sealation.component.html',
  styleUrls: ['./seat-sealation.component.css']
})
export class SeatSealationComponent {
  tikitclass=TicketClass;
  passengerCount = 3;
  data:TripStore={
    "search": {
        "tripType": 1,
        "seatTypes": 1,
        "from": {
            "airportId": 1,
            "airportCode": "BOM",
            "city": "Mumbai",
            "airportName": "Chhatrapati Shivaji Maharaj International Airport",
            "country": "India"
        },
        "to": {
            "airportId": 2,
            "airportCode": "DEL",
            "city": "Delhi",
            "airportName": "Indira Gandhi International Airport",
            "country": "India"
        },
        "departureTime": new Date( "2023-07-31T18:30:00.000Z"),
        "returnTime": new Date( "2023-07-31T18:30:00.000Z"),
        "passengers": {
            "adults": 1,
            "child": 0,
            "infants": 0
        }
    },
    "journey": {
      journeyId:1,
        "airlineId": 2,
        "flightNumber": "SG101",
        "to": 2,
        "fromid": 1,
        "departureTime": new Date( "2023-07-31T18:30:00.000Z"),
        "arrivalTime": new Date( "2023-07-31T18:30:00.000Z"),
        "price": 2500,
        "duration": "01:30:00",
        "baggage": 17,
        "cabin": 7,
        "surcharges": 700,
        "seatStature": [
            {
                "seatClassId": 1,
                "rowsStart": 1,
                "rowsEnd": 7,
                "columnsStart": "A",
                "columnsEnd": "F"
            },
            {
                "seatClassId": 2,
                "rowsStart": 11,
                "rowsEnd": 15,
                "columnsStart": "A",
                "columnsEnd": "F"
            }
        ],
        "bookedSeats": [
            "11A",
            "13B",
            "6C"
            
        ],
        "airline": {
            "id": 2,
            "name": "Indigo",
            "logo": "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png",
            "code": "6E"
        },
        "From": {
            "airportId": 1,
            "airportCode": "BOM",
            "city": "Mumbai",
            "airportName": "Chhatrapati Shivaji Maharaj International Airport",
            "country": "India"
        },
        "To": {
            "airportId": 2,
            "airportCode": "DEL",
            "city": "Delhi",
            "airportName": "Indira Gandhi International Airport",
            "country": "India"
        }
    },
    "error": false
};


  constructor(private store:Store,private route:Router){
     
    this.store.select(geTrip).subscribe(d=>{
if(d.error){
}
else{
  this.data={...this.data,...d};
  if(!d.journey1?.From){
     this.data={...this.data,journey1:undefined}
  }

  this.passengerCount= this.data.search.passengers.adults??0+this.data.search.passengers.child??0
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
  selectedSeats: string[] = [];



  onSeatClick(row: number, column: string): void {
    
    const seatKey = `${row}${column}`;  
    let inx  = this.selectedSeats.indexOf(seatKey)
   if(inx==-1){
     
    this.selectedSeats.push(seatKey)

   }
   else{
    this.selectedSeats.splice(inx,1)
   }
    if(this.selectedSeats.length>this.passengerCount){
      this.selectedSeats.pop()
    }

    
  }

  isSeatSelected(row: number, column: string): boolean {
    const seatKey = `${row}${column}`;
    return this.selectedSeats.indexOf(seatKey)!=-1;
  }


  AlreadyBooked(name:string,seatclass:number){
    return (this.data.journey.bookedSeats.indexOf(name) != -1) || seatclass== this.data.search.seatTypes
  }

  sameclass(seatclass:number){
  return   seatclass==this.data.search.seatTypes
  }

  Continue (){
  
  

  this.store.dispatch(LoadBookingSeats({data:this.selectedSeats}))

  this.route.navigate(['flight/payment'])
  }


  getPrice(row: number    , column: string): string {
  
    const price = this.data.journey.price;
    

   

    return price ? `seat price ${price}` : 'Price is not avaliable'; 
  }
}
