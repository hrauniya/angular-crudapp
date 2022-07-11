import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {
  
  // loggedIn:boolean=false

  constructor(private http:HttpClient) { }

  // isLoggedIn(username:string, password:string):any{
  //   this.http.get<Customer>('http://localhost:3000/admin/?username='+username).subscribe(data => {
  //       console.log(data)
  //       if (data.username===username && data.password===password){
  //         // this.loggedIn=true
  //         return true
          
  //       }else{
  //         // this.loggedIn=false
  //         return false
  //       }
  // })
  // }

}