import { Passengers, searchData } from "src/Model/SearchData.model";
import { TripStore } from "../Stores.interface";
import { JourneyInterface } from "src/Model/journey.model";
import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const initialTrip:TripStore={
    search:{} as searchData,
    journey:{} as JourneyInterface,
    error:true


}

export const LoadTripData = createAction("[Trip] LoadTripData ",props<{data:TripStore}>());

export const TripReducer = createReducer(
    initialTrip,
    on(LoadTripData,(state,{data})=>({...state,se:data.search,journey:data.journey,error:data.error})),
)



export const tripStore = createFeatureSelector<TripStore>('trip');
export const geTrip = createSelector(tripStore,(state)=> state)
