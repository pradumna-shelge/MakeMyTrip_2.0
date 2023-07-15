import { searchData } from "src/Model/SearchData.model";
import {  SearchStore } from "../Stores.interface";


export const initialSearch:SearchStore={
    search:{
        "tripType": 2,
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
        "departureTime": new Date( "2023-07-13T09:32:53.963Z"),
        "returnTime": new Date("2023-07-14T09:32:53.963Z"),
        "passengers": {
            "adults": 1,
            "child": 0,
            "infants": 0
        }
    },
    isEmpty:true
}

