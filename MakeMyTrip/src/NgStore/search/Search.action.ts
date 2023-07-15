import { createAction, props } from "@ngrx/store";
import { searchData } from "src/Model/SearchData.model";

export const LoadSearchData = createAction("[Search] LoadSearchData ",props<{data:searchData}>());