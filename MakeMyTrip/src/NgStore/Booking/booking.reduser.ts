import { createReducer, on } from "@ngrx/store";
import { initialBooking } from "./booking.store";
import { LoadBooking, LoadBookingPassengers, LoadBookingSeats, LoadFirstJourneyId, LoadReturnJourneyId, LoadTotalPrice } from "./booking.action";
import { passenger } from "src/Model/booking.model";


export const bookingReducer = createReducer(
    initialBooking,
    on(LoadBooking,(state,{data})=>({...state,data})),
    on(LoadBookingPassengers,(state,{data,email})=>({...state,bookingData:{...state.bookingData,passengerList:data,billingEmail:email}})),
    on(LoadBookingSeats,(state,{data})=>{
        
       let pass:passenger[] =[]
       console.log(state.bookingData    );
       
       if(state.bookingData.passengerList && state.bookingData.passengerList.length > 0)  {

           state.bookingData.passengerList.forEach((d:passenger,i:number)=>{
            d ={...d,seatNo:data[i]} 
            pass.push(d)
           })
       }
       
        return {...state,bookingData:{...state.bookingData,passengerList:pass}}
    }),
    on(LoadFirstJourneyId,(state,{data})=>({...state,bookingData:{...state.bookingData,firstJourneyId:data}})),
    on(LoadReturnJourneyId,(state,{data})=>({...state,bookingData:{...state.bookingData,returnJourneyId:data}})),
    on(LoadTotalPrice,(state,{data})=>({...state,bookingData:{...state.bookingData,totalPrice:data}})),

)