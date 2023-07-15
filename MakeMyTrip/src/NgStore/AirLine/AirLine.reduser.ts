import { createReducer, on } from "@ngrx/store";
import { initialAirline } from "./AirLine.store";
import { LoadAirLineDataSuccess, LoadAirLineDataError } from "./AirLine.action";







export const AirLineReducer = createReducer(
    initialAirline,
    on(LoadAirLineDataSuccess,(state,{data})=>({...state,airline:[...data]})),
    on(LoadAirLineDataError,(state,{err})=>({...state,error:err})),

)