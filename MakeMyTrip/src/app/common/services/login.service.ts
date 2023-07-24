import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rootApi } from '../api.links';
import { baseApi } from 'src/env';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private route:Router) { }

  otpSend(email:string){
    console.log(email);
    
return this.http.post(baseApi+"login/emailValidate",{email:email,otp:0})
  }

  otpVerify(email:string,otp:number){
    return this.http.post(baseApi+"login/loginUser",{email:email,otp:otp})
  }



  islogin():boolean{

    return !! localStorage.getItem('token')
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/'])
  }
}
