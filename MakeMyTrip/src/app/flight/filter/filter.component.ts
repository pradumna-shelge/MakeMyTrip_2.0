import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
