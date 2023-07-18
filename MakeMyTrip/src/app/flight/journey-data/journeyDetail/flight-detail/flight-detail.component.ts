import { Component, Input } from '@angular/core';
import { JourneyInterface } from 'src/Model/journey.model';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent {
  @Input() flightDetail!:JourneyInterface


  constructor(){
    
  }
  
}
