import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Model/user';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private route:Router) { }


  get(email:string){
    return this.http.get<User>(baseApi+`User?email=${email}`)
  }

  post(data:User){
    return this.http.post(baseApi+"User",data)
  }

  getImageUrl(data:any){

   return this.http.post(baseApi+"User/upload",data)
  }
}
