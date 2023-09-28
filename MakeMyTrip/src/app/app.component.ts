import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AirportStore } from 'src/NgStore/AirPort/Airport.reduser';
import { getAirportData } from 'src/NgStore/AirPort/Airport.selector';
import { ToasterService } from './services/toaster.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(private ser:LoaderService){
  this.ser.getServer();
 }
}
