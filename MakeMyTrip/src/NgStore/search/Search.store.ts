import { searchData } from "src/Model/SearchData.model";
import {  SearchStore } from "../Stores.interface";


export const initialSearch:SearchStore={
    search:{
        "tripType": 1,
        "seatTypes": 3,
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
        "departureTime": new Date( "2023-08-1"),
        "returnTime": new Date("2023-08-1"),
        "passengers": {
            "adults": 1,
            "child": 0,
            "infants": 0
        }
    },
    isEmpty:true
}

