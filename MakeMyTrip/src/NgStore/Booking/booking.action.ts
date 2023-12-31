import { createAction, props } from "@ngrx/store";
import { booking, passenger } from "src/Model/booking.model";

export const LoadBooking = createAction("[booking] LoadBooking ",props<{data:booking}>());

export const LoadBookingPassengers = createAction("[booking] LoadBookingPassengers ",props<{data:passenger[],email:string}>());
export const LoadBookingSeats = createAction("[booking] LoadBookingSeats ",props<{data:string[],seatType:number}>());
export const LoadBookingSeats2 = createAction("[booking] LoadBookingSeats2 ",props<{data:string[],seatType:number}>());
export const LoadFirstJourneyId = createAction("[booking] LoadFirstJourneyId ",props<{data:number}>());
export const LoadReturnJourneyId = createAction("[booking] LoadReturnJourneyId ",props<{data:number|undefined}>());

export const LoadTotalPrice= createAction("[booking] LoadTotalPrice ",props<{data:number}>());