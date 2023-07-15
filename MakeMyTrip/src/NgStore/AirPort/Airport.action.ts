import { createAction, props } from "@ngrx/store";
import { AirportModel } from "src/Model/Airport.model";

export const LoadAirportData = createAction("[Airport] LoadAirportData ")
export const LoadAirportDataSuccess = createAction("[Airport] LoadAirportDataSuccess ",props<{data:AirportModel[]}>())
export const LoadAirportDataError = createAction("[Airport] LoadAirportDataError ",props<{err:boolean}>())