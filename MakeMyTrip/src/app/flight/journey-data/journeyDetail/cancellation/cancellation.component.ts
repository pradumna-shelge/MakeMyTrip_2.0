import { Component, Input } from '@angular/core';
import { JourneyInterface } from 'src/Model/journey.model';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent {
  @Input() flightDetail!:JourneyInterface
}
