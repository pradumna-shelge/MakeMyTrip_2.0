import { AirlineInterface } from "src/Model/Airline";
import { AirportModel } from "src/Model/Airport.model";
import { Passengers, searchData } from "src/Model/SearchData.model";
import { JourneyInterface } from "src/Model/journey.model";




export interface SearchStore{
    search : searchData;
    isEmpty:boolean
}

export interface AirlineStore{
    airline:AirlineInterface[];
    error:boolean
}

export interface UserStore{
    user:any;
    error:boolean
}




export interface TripStore{
       journey:JourneyInterface,
       search:searchData,
       error:boolean
}