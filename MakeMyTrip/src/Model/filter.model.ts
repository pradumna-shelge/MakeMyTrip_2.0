import { AirlineInterface } from "./Airline";
import { AirportModel } from "./Airport.model";

export interface filterInterface{
    Price:string|undefined,
    DepartureTime:string|undefined,
    ArrivalTime:string|undefined
    Airlines:string[]
}

export interface Trips {
    prnNo: number;
    airline: number;
    fromAirport: string;
    toAirport: string;
    passengers: number|flightPassenger[];
    date: string;
    total: number;
  
  
  }
  export interface Trips1 {
    prnNo: number;
    airline: AirlineInterface;
    fromAirport: AirportModel;
    toAirport: AirportModel;
    passengers:flightPassenger[];
    date: string;
    total: number;
  
  
  }
  
  export interface flightPassenger {
    name: string;
    gender: string;
    seat: string;
  }
  