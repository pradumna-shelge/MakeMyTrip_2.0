import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookingStore } from "./booking.store";


export const bookingStore = createFeatureSelector<BookingStore>('booking');

export const getBookingData = createSelector(bookingStore,(state)=> state);
export const getBookingBookings = createSelector(bookingStore,(state)=> state.bookingData)
