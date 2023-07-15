import { Component, Input } from '@angular/core';
import { JourneyInterface } from 'src/Model/journey.model';

@Component({
  selector: 'app-date-change',
  templateUrl: './date-change.component.html',
  styleUrls: ['./date-change.component.css']
})
export class DateChangeComponent {
  @Input() flightDetail!:JourneyInterface
}
