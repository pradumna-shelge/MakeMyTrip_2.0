import { createFeatureSelector, createSelector } from "@ngrx/store";
import { state } from "@angular/animations";
import { AirlineStore } from "../Stores.interface";



export const airlineStore = createFeatureSelector<AirlineStore>('airline');

export const getAirLineData = createSelector(airlineStore,(state)=> state.airline)


export const getAirlineById = (id: number) => createSelector(
    airlineStore,
    (state) => state.airline.find((airline) => airline.id === id)
  );