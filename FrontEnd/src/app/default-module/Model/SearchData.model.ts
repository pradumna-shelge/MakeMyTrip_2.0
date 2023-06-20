import { AirportModel } from "./Airport.model";

export interface searchData{
    from : AirportModel,
    to : AirportModel,
    departure : string|null,
    return : string|null,
    passengers:{
        adults: number,
        child : number,
        infants:number
    },
    type : number,
    seatTypes:string,
}
