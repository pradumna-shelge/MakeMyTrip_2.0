import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  SearchStore } from "../Stores.interface";
import { state } from "@angular/animations";

export const searchStore = createFeatureSelector<SearchStore>('search');

export const getSearchData = createSelector(searchStore,(state)=> state.search)
