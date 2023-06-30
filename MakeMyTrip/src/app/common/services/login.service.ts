import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rootApi } from '../api.links';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  otpSend(email:string){
    console.log(email);
    
return this.http.post("https://localhost:7007/api/login/emailValidate",{email:email,otp:0})
  }

  otpVerify(email:string,otp:number){
    return this.http.post("https://localhost:7007/api/login/loginUser",{email:email,otp:otp})
  }
}
