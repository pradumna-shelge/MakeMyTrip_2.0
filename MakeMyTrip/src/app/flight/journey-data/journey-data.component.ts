import { Component } from '@angular/core';
import { AireLineService } from '../Services/aire-line.service';

@Component({
  selector: 'app-journey-data',
  templateUrl: './journey-data.component.html',
  styleUrls: ['./journey-data.component.css']
})
export class JourneyDataComponent {
  data:any;
constructor(private ser:AireLineService){
  this.ser.getAll().subscribe(data =>{
    console.log(data);
    this.data=data;
    
  })
}
}
