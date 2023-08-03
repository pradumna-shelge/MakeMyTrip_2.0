
export interface filterInterface{
    Price:string|undefined,
    DepartureTime:string|undefined,
    ArrivalTime:string|undefined
    Airlines:string[]
}

export interface Trips {
    prnNo: number;
    airline: number;
    fromAirport: string;
    toAirport: string;
    passengers: number;
    date: string;
    total: number;
  
  
  }
  
  export interface flightPassenger {
    name: string;
    gender: string;
    seat: string;
  }
  