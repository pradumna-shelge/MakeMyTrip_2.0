import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;

  constructor(private http:HttpClient,private router:Router) { 
    
  }

  setLoading(loading: boolean) {
  
    this.loading = loading;
  }

  getLoading(): boolean {
  
    return this.loading;
  }

  getServer(){
    this.http.get(baseApi+"testing").subscribe({
      next:()=>{

      },
      error:()=>{
this.router.navigate(['/server-down'])
      }
    })
  }
}
