import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userData!:FormGroup

  Area = 1;

constructor(private fb:FormBuilder,private router:Router){
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  const payload = jwt_decode(token);
  console.log(payload);
}
  ngOnInit(): void {
    
    this.userData = this.fb.group({
      Email:['',[ Validators.required, Validators.email]],
      Otp:['',[ Validators.required, Validators.maxLength(4),Validators.minLength(4)]]
    })
  }


get Email(){
  return this.userData.get('Email')
}
get Otp(){
  return this.userData.get('Otp')
}

  OtpSend(val:string) {

  }

  changeArea(area:number){
    if(area == 3){
      this.stopTimer();
       this.router.navigate(['/admin']);
       document.getElementById('')
    }
      this.Area = area;
      if(area = 2){
        this.resetTimer()
        this.OtpSend('');
        this.timer();
      }
  }




  minutes!: number;
  seconds!: number;
  interval: any;

 

  resetTimer() {
    this.minutes = 0;
    this.seconds = 7;
  }

  timer() {
    this.interval = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        
        clearInterval(this.interval);
      } else if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}
