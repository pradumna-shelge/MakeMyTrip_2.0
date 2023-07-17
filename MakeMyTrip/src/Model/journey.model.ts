import { AirlineInterface } from "./Airline"
import { AirportModel } from "./Airport.model"

export interface JourneyInterface{
    id:number,
    airline:AirlineInterface,
    flightNumber:string
    from:AirportModel,
    to:AirportModel,
    departureTime:Date,
    arrivalTime:Date,
    price:number,
    duration:string,
    baggage :number,
    cabin:number,
    Surcharges:number  
}


export interface tripInterface{
    journey:JourneyInterface,
    
}