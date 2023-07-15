import { createAction, props } from "@ngrx/store";
import { AirlineInterface } from "src/Model/Airline";


export const LoadAirLineData = createAction("[AirLine] LoadAirLineData ")
export const LoadAirLineDataSuccess = createAction("[AirLine] LoadAirLineDataSuccess ",props<{data:AirlineInterface[]}>())
export const LoadAirLineDataError = createAction("[AirLine] LoadAirLineDataError ",props<{err:boolean}>())