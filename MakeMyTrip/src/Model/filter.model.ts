
export interface filterInterface{
    Price:string,
    DepartureTime:string,
    ArrivalTime:string,
    Airlines:string[]
}

export interface Trips {
    prnNo: string;
    fromId: number|string;
    toId: number|string;
    passengers: flightPassenger[];
    date: Date;
  }
  
  export interface flightPassenger {
    name: string;
    gender: string;
    seat: string;
  }
  