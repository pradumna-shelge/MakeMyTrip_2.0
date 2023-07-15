import { createFeatureSelector, createSelector } from "@ngrx/store";
import { state } from "@angular/animations";
import { AirportStore } from "./Airport.reduser";


export const airportStore = createFeatureSelector<AirportStore>('Airport');

export const getAirportData = createSelector(airportStore,(state)=> state.airports)
