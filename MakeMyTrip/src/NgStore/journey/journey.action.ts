import { createAction, props } from "@ngrx/store";
import { JourneyData, searchData } from "src/Model/SearchData.model";
import { JourneyInterface, JourneyS } from "src/Model/journey.model";
import { JourneyStore } from "../Stores.interface";

export const LoadJourneyData = createAction("[Journey] LoadJourneyData ",props<{data:JourneyStore}>());