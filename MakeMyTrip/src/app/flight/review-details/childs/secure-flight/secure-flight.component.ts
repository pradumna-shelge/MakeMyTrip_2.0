import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSecureTrip } from 'src/NgStore/Payment/payment';

@Component({
  selector: 'app-secure-flight',
  templateUrl: './secure-flight.component.html',
  styleUrls: ['./secure-flight.component.css']
})
export class SecureFlightComponent {
flag = true;

constructor(private store:Store){}

secureTrip(value:string){

this.flag=value=="true"?true:false

this.store.dispatch(loadSecureTrip({secureTrip:this.flag}))
}
}
