import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Passengers } from 'src/Model/SearchData.model';
import { TripStore } from 'src/NgStore/Stores.interface';
import { geTrip } from 'src/NgStore/tripDetail/trip.ngStore';

@Component({
  selector: 'app-passnger-detail',
  templateUrl: './passnger-detail.component.html',
  styleUrls: ['./passnger-detail.component.css']
})
export class PassngerDetailComponent implements OnInit {
  passengerForm!: FormGroup;
  data!:Passengers;
  

  constructor(private formBuilder: FormBuilder,private store:Store, private router:Router) {

    this.store.select(geTrip).subscribe(d=>{
      if(d.error){
      }
      else{
       this.data = d.search.passengers;
      }
          })
        }
   

  ngOnInit() {
    this.passengerForm = this.formBuilder.group({
      adults: this.formBuilder.array([], Validators.required),
      child: this.formBuilder.array([]),
      infants: this.formBuilder.array([]),
      billingEmail: new FormControl('', [Validators.required, Validators.email]),
      Terms_policy: new FormControl(false, Validators.requiredTrue) 

    });
   
  
  }

  get adults() {
    return this.passengerForm.get('adults') as FormArray;
  }
  get child() {
    return this.passengerForm.get('child') as FormArray;
  }
  get infants() {
    return this.passengerForm.get('infants') as FormArray;
  }
  get billingEmail(){
    return this.passengerForm.get('billingEmail')
  }
  get Terms_policy(){
    return this.passengerForm.get('Terms_policy')
  }
  addAdult(): void {
    const adultFormGroup = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });

    this.adults.push(adultFormGroup);
  }
  addCHILD(): void {
        
    const CHILDFormGroup = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });

    this.child.push(CHILDFormGroup);
  }

  addinfants(){
    const infantsGroup = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });

    this.infants.push(infantsGroup);
  }

  goToSeat(){
    console.log(this.passengerForm.value);
    
this.router.navigate(['/flight/review/seat'])
  }
}
