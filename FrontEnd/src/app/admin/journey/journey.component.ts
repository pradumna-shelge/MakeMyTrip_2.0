import { Component } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {
  navigate = true;

  next(){
    this.navigate = false;
  
  }
  
  pre(){
    this.navigate = true;
  }
  
  
}
