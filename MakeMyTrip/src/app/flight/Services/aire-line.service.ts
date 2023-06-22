import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AirlineInterface } from 'src/Model/Airline';

@Injectable({
  providedIn: 'root'
})
export class AireLineService {
  private airline:BehaviorSubject<AirlineInterface[]>;
  constructor(private http:HttpClient) {
    const data : AirlineInterface[] =[]
    this.airline = new BehaviorSubject<AirlineInterface[]>(data)
   console.log("services");
   this.setData();
   }
  
  
  getAll(){
    return this.airline.asObservable();
  }
  setData(){
    const url = 'https://localhost:7007/api/Aireline'
      this.http.get<AirlineInterface[]>(url).subscribe({
        next:(data:AirlineInterface[])=>{
          this.airline.next(data)
        },
        error:(err)=>{
          alert('Error in Airline data request')
        }
      })
    
  }

}
