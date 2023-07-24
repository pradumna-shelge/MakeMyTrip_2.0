import { Component, ElementRef, Renderer2 } from '@angular/core';

import { Location } from '@angular/common';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  token!:string;
  constructor(private ser:LoginService) { 
    this.decodeToken()
  }

  

  decodeToken() {
    const token = localStorage.getItem('token') ??"";
    const payload = token.split('.')[1];
    const decodedPayload = this.base64UrlDecode(payload);
    const tokenData = JSON.parse(decodedPayload).userEmail;

    console.log('Decoded Token:', tokenData);

  }

  base64UrlDecode(str: string): string {
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


  logout(){
this.ser.logout();
  }
}
