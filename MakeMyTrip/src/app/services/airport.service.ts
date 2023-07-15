import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AirportModel } from 'src/Model/Airport.model';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private data:BehaviorSubject<AirportModel[]>;
  constructor(private http:HttpClient) { 
    const data :AirportModel[]=[];

    this.data = new BehaviorSubject<AirportModel[]>(data);
    this.set()
  }

get(){
return this.data.asObservable();
}
set(){
  this.http.get<AirportModel[]>('https://localhost:7007/api/Airport ').subscribe({
    next:(airports:AirportModel[]) =>{
    this.data.next(airports);
 
  },
  error:(error) =>{
    alert('problem in Airport API')
  }
})
}


getAirports(){
  console.log("hii");
  
 return this.http.get<AirportModel[]>('https://localhost:7007/api/Airport ')
}
}
