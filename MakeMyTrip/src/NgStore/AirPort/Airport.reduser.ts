import { createReducer, on } from "@ngrx/store";

import { LoadAirportDataError, LoadAirportDataSuccess } from "./Airport.action";
import { state } from "@angular/animations";
import { AirportModel } from "src/Model/Airport.model";



export interface AirportStore{
    airports:AirportModel[];
    error:boolean,
}

export const initialAirports:AirportStore={
    airports:[{} as AirportModel ] ,
    error:true,
   
}


export const AirportReducer = createReducer(
    initialAirports,
    on(LoadAirportDataSuccess,(state,{data})=>({...state,airports:[...data]})),
    on(LoadAirportDataError,(state,{err})=>({...state,error:err})),

)