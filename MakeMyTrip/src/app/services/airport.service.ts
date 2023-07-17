import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AirportModel } from 'src/Model/Airport.model';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
 EndPoint = "Airport/"
  constructor(private http:HttpClient) {}

getAirports(){
 return this.http.get<AirportModel[]>(baseApi+this.EndPoint)
}

}
