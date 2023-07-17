import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JourneyData, searchPost } from 'src/Model/SearchData.model';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class JourneysService {
  searchData='searchData/'
  constructor(private http:HttpClient) { }


  getJourneys(data:searchPost){
    
    return this.http.post<JourneyData[]>(baseApi+this.searchData,data)
  }
}
