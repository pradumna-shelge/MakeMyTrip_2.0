import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JourneyData, searchPost } from 'src/Model/SearchData.model';

@Injectable({
  providedIn: 'root'
})
export class JourneysService {

  constructor(private http:HttpClient) { }


  getJourneys(data:searchPost){
    
    return this.http.post<JourneyData[]>('https://localhost:7007/api/searchData',data)
  }
}
