import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../common/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class FlightGuard implements CanActivate {
  constructor(private ser:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.ser.islogin()){
        this.router.navigate(['/'])
        return false
      }
    return true;
  }
  
}
