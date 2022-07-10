import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLoginServiceService } from './admin-login-service.service';
// import { AdminloginComponent} from './admin/adminlogin/adminlogin.component'

@Injectable({
  providedIn: 'root'
})
export class AdminLoginAuthGuard implements CanActivate {

  constructor(private adminloginservice:AdminLoginServiceService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log(this.router.url)
    return this.adminloginservice.booleanreturn()
    

    
    }
  }
  

