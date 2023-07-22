export interface booking{
    firstJourneyId: number;
    userId: number;
    returnJourneyId?: number;
    passengerList: passenger[];
    billingEmail: string;
    totalPrice:number
}

export interface passenger{
    fullname: string;
    gender: string;
    passengerType: number;
    seatNo: string;
}