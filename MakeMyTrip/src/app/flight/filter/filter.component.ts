import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { AireLineService } from '../Services/aire-line.service';
import { AirlineInterface } from 'src/Model/Airline';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
airlines!:AirlineInterface[];
constructor(private airlineSer:AireLineService){}
  ngOnInit(): void {

   this.airlineSer.getAll().subscribe(airline =>{
    this.airlines = airline;
    
   })
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  

}
