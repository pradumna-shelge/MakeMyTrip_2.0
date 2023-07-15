import { Component, Input } from '@angular/core';
import { JourneyInterface } from 'src/Model/journey.model';

@Component({
  selector: 'app-fare-summary',
  templateUrl: './fare-summary.component.html',
  styleUrls: ['./fare-summary.component.css']
})
export class FareSummaryComponent {
  @Input() flightDetail!:JourneyInterface
}
