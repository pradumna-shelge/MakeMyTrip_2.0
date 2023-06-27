import { AirportModel } from "./Airport.model";

export interface searchData{
    from : AirportModel,
    to : AirportModel,
    departureTime : Date,
    returnTime? : Date|null,
    passengers:{
        adults: number,
        child : number,
        infants:number
    },
    tripType : number,
    seatTypes:number,
}
export const   TicketClass= [
    "",
    "Economy" ,
    "FirstClass" ,
    "BusinessClass" ,
  ]

  export interface JourneyData{
    journayId:number,
    arrival:Date
    depature:Date,
    airlineId:number
  }

  export interface searchPost{
    fromID:number,
    toID:number,
    depatureDate:string,
    returnDate:string
  }

  export interface JourneyModified{
    journayId:number,
    arrival:Date
    depature:Date,
    airlineId:number,
    logo:string,
    time:string
    airline:string
  }