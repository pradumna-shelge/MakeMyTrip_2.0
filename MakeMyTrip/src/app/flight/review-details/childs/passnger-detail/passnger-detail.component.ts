import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-passnger-detail',
  templateUrl: './passnger-detail.component.html',
  styleUrls: ['./passnger-detail.component.css']
})
export class PassngerDetailComponent implements OnInit {
  passengerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passengerForm = this.formBuilder.group({
      adults: this.formBuilder.array([this.formBuilder.group({fullName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]})]),   
      
    });
  }

  get adultsFormArray() {
    return this.passengerForm.get('adults') as FormArray;
  }

  

  addPassenger(passengerType: string) {
    const passenger = this.formBuilder.group({
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });

    // switch (passengerType) {
    //   case 'adults':
    //     this.adultsFormArray.push(passenger);
    //     break;
    //   case 'children':
    //     this.childrenFormArray.push(passenger);
    //     break;
    //   case 'infants':
    //     this.infantsFormArray.push(passenger);
    //     break;
    //   default:
    //     break;
    // }
  }

  onSubmit() {
    if (this.passengerForm.valid) {
      console.log(this.passengerForm.value);
     
    } else {
     
    }
  }

}
