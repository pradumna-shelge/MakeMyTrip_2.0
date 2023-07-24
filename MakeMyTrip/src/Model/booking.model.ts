export interface booking{
    firstJourneyId: number;
    userEmail: string;
    returnJourneyId?: number;
    passengerList: passenger[];
    billingEmail: string;
    totalPrice:number,
    seatClass:number
}

export interface passenger{
    fullname: string;
    gender: string;
    passengerType: number;
    seatNo: string;
}