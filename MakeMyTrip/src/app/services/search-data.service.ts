import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { searchData } from 'src/Model/SearchData.model';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  private data:BehaviorSubject<searchData>;
  constructor(private http:HttpClient) { 
    const data :searchData= {} as searchData;

    this.data = new BehaviorSubject<searchData>(data);

  }

get(){
return this.data.asObservable();
}

set(val:searchData){
this.data.next(val);
}


}
