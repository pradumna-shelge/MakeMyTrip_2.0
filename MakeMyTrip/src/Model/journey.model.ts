import { AirlineInterface } from "./Airline"
import { AirportModel } from "./Airport.model"


export interface JourneyInterface {
    journeyId: number;
    airline?: AirlineInterface|undefined;
    airlineId:number
    flightNumber: string;
    to : number,
    fromid : number,
    departureTime: Date;
    arrivalTime: Date;
    price: number;
    duration: string;
    baggage: number;
    cabin: number;
    surcharges: number;
    From? :AirportModel,
    To? :AirportModel ,
    seatStature:SeatConfiguration[],
    bookedSeats:string[]
  }
  interface SeatConfiguration {
    seatClassId: number;
    rowsStart: number;
    rowsEnd: number;
    columnsStart: string;
    columnsEnd: string;
  }
  

export interface JourneyS{
    dep:JourneyInterface[],
    ren?:JourneyInterface[]
}


export interface tripInterface{
    journey:JourneyInterface,
}