import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  islog =false;

  constructor(private ser:LoginService){
    this.islog = this.ser.islogin()
   
    
  }
}
