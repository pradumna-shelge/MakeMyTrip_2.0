
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData!:FormGroup
otpFlag= false;
  Area = 1;

constructor(private fb:FormBuilder,private router:Router,private ser:LoginService){
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
//   const payload = jwt_decode(token);
//   console.log(payload);
}
  ngOnInit(): void {
    
    this.userData = this.fb.group({
      Email:['',[ Validators.required, Validators.email]],
      Otp:['',[ Validators.required, Validators.maxLength(6),Validators.minLength(6)]]
    })
  }


get Email(){
  return this.userData.get('Email')
}
get Otp(){
  return this.userData.get('Otp')
}

  OtpSend() {
    
      this.ser.otpSend(this.Email?.value).subscribe({
        next:(data: any) => {
           console.log(data);
          
        },
        error:(err) => {
          console.log(err);
          this.Area=1;
          this.stopTimer();
        }
      })
      
  }

  changeArea(area:number){
    this.Area = area;
    if(area == 3){
      
       this.ser.otpVerify(this.Email?.value,Number( this.Otp?.value)).subscribe({
        next:(data: any) => {
          localStorage.setItem("token",data.token);
          this.stopTimer();
          
          // this.router.navigate(['/my-profile'])
          window.location.reload();
         
       },
       error:(err:any) => {
         console.log(err.error.mes);
         this.Area = 2
         this.otpFlag = true
       }
       })

      
    }
      
      if(area == 2){
        
        this.resetTimer()
        this.OtpSend();
        this.timer();
      }
  }




  minutes!: number;
  seconds!: number;
  interval: any;

 

  resetTimer() {
    this.minutes = 1;
    this.seconds = 0;
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
mobileFlag = false;
  ChangeLogin(){

  }


  
}
