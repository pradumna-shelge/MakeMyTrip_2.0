import { state } from "@angular/animations";
import { State, createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export interface tripPrice{
    basePrice:number,
    Surcharges:number
    passengers:number,
    secureTrip:boolean,
    secureTripPrice:number,
    total:number
    
}

export interface  tripPriceStore{
data:tripPrice
}

export const initialTripPrice:tripPriceStore={
    data:{}as tripPrice
}

export const loadBasePrice = createAction("[tripPrice] loadBasePrice ",props<{base:number,Surcharges:number,pass:number,total:number}>());

export const loadSecureTrip = createAction("[tripPrice] loadSecureTrip ",props<{secureTrip:boolean}>());



export const tripPriceReducer = createReducer(
    initialTripPrice,
    on(loadBasePrice,(state,{base,Surcharges,pass,total})=>({...state,data:{...state.data,basePrice:base,Surcharges:Surcharges,passengers:pass,total:total,secureTripPrice:247}})),
    on(loadSecureTrip,(state,{secureTrip})=>{

        let total = secureTrip? state.data.total +state.data.secureTripPrice:state.data.total-state.data.secureTripPrice

       return {...state,data:{...state.data,secureTrip:secureTrip,total:total}}
    }),

)


export const trippriceStore = createFeatureSelector<tripPriceStore>('tripPrice');
export const gettripPrice = createSelector(trippriceStore,(state)=> state.data)


