import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  JourneyStore, SearchStore } from "../Stores.interface";
import { state } from "@angular/animations";

export const journeyStore = createFeatureSelector<JourneyStore>('journey');

export const getJourneyData = createSelector(journeyStore,(state)=> state)
