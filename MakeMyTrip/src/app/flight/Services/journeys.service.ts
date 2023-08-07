import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JourneyData, searchPost } from 'src/Model/SearchData.model';
import { JourneyS } from 'src/Model/journey.model';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class JourneysService {
  searchData='searchData/'
  constructor(private http:HttpClient) { }


  getJourneys(data:searchPost){
  console.log(data);
  
    return this.http.post<JourneyS>(baseApi+this.searchData,data)
  }
}
