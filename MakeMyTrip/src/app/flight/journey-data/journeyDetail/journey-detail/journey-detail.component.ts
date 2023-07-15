import { Component, Input } from '@angular/core';
import { JourneyInterface } from 'src/Model/journey.model';

@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.css']
})
export class JourneyDetailComponent {
  @Input() flightDetail!:JourneyInterface



  displayComponent: string = 'flightDetail';


  
  toggleFlightDetail() {
    this.displayComponent = 'flightDetail';
  }

  toggleFareSummary() {
    this.displayComponent = 'fareSummary';
  }

  toggleCancellation() {
    this.displayComponent = 'cancellation';
  }

  toggleDateChange() {
    this.displayComponent = 'dateChange';
  }
}
