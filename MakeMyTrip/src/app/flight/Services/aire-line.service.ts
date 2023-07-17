import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AirlineInterface } from 'src/Model/Airline';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AireLineService {
   airline='Aireline'
  constructor(private http:HttpClient) {}
  
  getAll(){
    return this.http.get<AirlineInterface[]>(baseApi+this.airline)
  }
  
}
