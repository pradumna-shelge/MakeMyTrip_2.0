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

 


  getEmail() :string{
    const token = localStorage.getItem('token') ??"";
    const payload = token.split('.')[1];
    const decodedPayload = this.base64UrlDecode(payload);
    const tokenData:string = JSON.parse(decodedPayload).userEmail;

   return tokenData

  }

 private  base64UrlDecode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw new Error('Invalid base64url string.');
    }
    return decodeURIComponent(escape(atob(output)));
  }

}
