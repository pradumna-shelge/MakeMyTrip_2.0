import { AirportModel } from "./Airport.model";

export interface searchData{
    from : AirportModel,
    to : AirportModel,
    departureTime : Date|null,
    returnTime? : Date|null,
    passengers:{
        adults: number,
        child : number,
        infants:number
    },
    tripType : number,
    seatTypes:number,
}
