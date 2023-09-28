import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LoginService } from '../common/services/login.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  islog =false;

  constructor(private ser:LoginService,private loadSer:LoaderService){
    this.islog = this.ser.islogin()
   
    loadSer.getServer();
  }
}
