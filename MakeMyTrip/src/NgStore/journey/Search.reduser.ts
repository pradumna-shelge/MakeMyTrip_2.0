import { createReducer, on } from "@ngrx/store";

import { state } from "@angular/animations";

import { initialSearch } from "./Search.store";
import { LoadJourneyData } from "./journey.action";




export const journeyReducer = createReducer(
    initialSearch,
    on(LoadJourneyData,(state,{data})=>({...state,data})),
)