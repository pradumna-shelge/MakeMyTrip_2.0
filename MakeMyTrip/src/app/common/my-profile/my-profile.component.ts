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
    
  }

  

  

  logout(){
this.ser.logout();
  }
}
