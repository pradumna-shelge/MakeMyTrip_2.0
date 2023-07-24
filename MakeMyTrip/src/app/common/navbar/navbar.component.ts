import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  islog =false;

  constructor(private ser:LoginService){
    this.islog = this.ser.islogin()
    console.log(this.islog);
    
  }
}
