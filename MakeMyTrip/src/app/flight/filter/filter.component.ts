import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { AireLineService } from '../Services/aire-line.service';
import { AirlineInterface } from 'src/Model/Airline';
import { Store } from '@ngrx/store';
import { AirlineStore } from 'src/NgStore/Stores.interface';
import { getAirLineData } from 'src/NgStore/AirLine/AirLineselector';
import { LoadAirLineData } from 'src/NgStore/AirLine/AirLine.action';
import { filterInterface } from 'src/Model/filter.model';
import { isFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JourneyS } from 'src/Model/journey.model';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@Output() filterEmitter =  new EventEmitter<filterInterface>();
@Input() returnFlag = false; 
airlines!:AirlineInterface[];
filterData:filterInterface= {}as filterInterface;
flag = false;
resets1:any;
resets2:any;
resets3:any;

constructor(private store:Store<AirlineStore>,private router:Router){
  this.store.dispatch(LoadAirLineData())
}
  ngOnInit(): void {

   this.store.select(getAirLineData).subscribe(airline =>{
    this.airlines = airline;

   })
  }

priceChange(max:string){
  this.filterData = {...this.filterData,Price:1000+"-"+Number(max)};
  if(Number(max)==0){
    this.filterData = {...this.filterData,Price:undefined};
  }
  this.emitValue();
}

airlineFilter(data:string){

  let flag:string|undefined=undefined; 
  let dataArray:string[]=[]
  if(this.filterData && this.filterData.Airlines){
   flag =  this.filterData.Airlines.find(d=>d===data)
   dataArray = this.filterData.Airlines;
  }
  if(flag){
   dataArray = this.filterData.Airlines.filter(a=>a!=data);
  }
  else{
  dataArray.push(data)
  }
  this.filterData = {...this.filterData,Airlines:dataArray}
  this.emitValue();
  
}
departureTime(val:string){
  this.filterData = {...this.filterData,DepartureTime:val}
  this.emitValue();
}

arrivalTime(val:string){
  this.filterData = {...this.filterData,ArrivalTime:val}
  this.emitValue();
}

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  reset(){
    this.filterData={} as filterInterface;
    
    this.filterData.Price=undefined;
    
    this.resets1=undefined;
    this.resets2=undefined;
    this.resets3=undefined;
    this.emitValue();
  }

resetspec(i:number){

  switch (i) {
    case 1:
      this.filterData.Price=undefined
      this.priceChange("0")
      break;
      case 2:
        this.filterData.DepartureTime=undefined
        this.resets2=undefined;

        break;
        case 3:
        this.filterData.ArrivalTime=undefined
        this.resets3=undefined;

        break;
        
    default:
      break;
  }


  this.emitValue();

}

  emitValue(){
    this.filterEmitter.emit(this.filterData)
  }
}
