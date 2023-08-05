import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { Location } from '@angular/common';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { User } from 'src/Model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit  {
user !:User
userForm!: FormGroup;
token!:string;
submitted=false;
newImage=""
  constructor(private formBuilder: FormBuilder,private ser:LoginService,private userSer:UserService) { 
    this.getuserData()
  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      gender: [''],
      address: ['']
    });
  }
get fullName(){
return this.userForm.get('fullName')
}
get gender(){
  return this.userForm.get('gender')
  }
  get address(){
    return this.userForm.get('address')
    }
  getuserData(){
    let email:string = this.ser.getEmail();

    this.userSer.get(email).subscribe({
      next:(d:User)=>{
       
        this.user = d;
        this.newImage = d.imageUrl
        this.userForm.patchValue(d)
      },
      error(err) {
          console.log(err);
          
      },
    })
  }

  post(){

    this.submitted=true;
   

     const data:User={
       fullName: this.fullName?.value??"",
       gender:this.gender?.value??"",
       address:this.address?.value??"",
       imageUrl:this.newImage??"",
       userEmail:this.user.userEmail??"",
       phoneNumber:"1111111111"
     }
 console.log(data);
 
 
     this.userSer.post(data).subscribe({
       next:(d:any)=>{
         console.log(d.mes);
         this.getuserData();
       },
       error(err) {
           console.log(err);
       },
     })
   
  }
  

  logout(){
this.ser.logout();
  }



 
  imgUpdate(event: any){
   let myfile = event.target.files[0];

   let formdata = new FormData();

    formdata.append('file', myfile)

this.userSer.getImageUrl(formdata).subscribe({
  next:(d:any)=>{
    this.newImage=d.imageUrl;
    
  },
  error(err) {
      console.log(err);
  },
})

  }

cancelUpdate(){
  this.newImage = this.user.imageUrl
}

}
