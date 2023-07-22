import { booking } from "src/Model/booking.model";


export interface BookingStore{
    bookingData:booking,

}

export const initialBooking:BookingStore = {
    bookingData:{} as booking

}

