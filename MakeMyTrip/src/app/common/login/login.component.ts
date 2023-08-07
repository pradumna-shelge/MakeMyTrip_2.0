
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData!:FormGroup
otpFlag= false;
  Area = 1;

constructor(private fb:FormBuilder,private router:Router,private ser:LoginService,private tostSer:ToasterService){

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
        
          
        },
        error:(err) => {
         
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
        this.tostSer.showError("OTP is Invalid","User Login")
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
    this.minutes = 2;
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
