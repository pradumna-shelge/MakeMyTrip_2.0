import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }


  bookFlight(){
    const data:any = {}
    return this.http.post(baseApi+"",data)
  }
}
