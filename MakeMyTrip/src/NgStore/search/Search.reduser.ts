import { createReducer, on } from "@ngrx/store";

import { state } from "@angular/animations";
import { LoadSearchData } from "./Search.action";
import { initialSearch } from "./Search.store";




export const SearchReducer = createReducer(
    initialSearch,
    on(LoadSearchData,(state,{data})=>({...state,search:data,isEmpty:false})),
)