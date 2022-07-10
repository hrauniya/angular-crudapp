import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {
  
  loggedIn:boolean=false

  constructor(private http:HttpClient) { }

  isLoggedIn(username:string, password:string){
    this.http.get<any>('http://localhost:3000/admin/?username='+username).subscribe(data => {
        // console.log(data)
        if (data[0].username===username && data[0].password===password && data[0].username != null){
          this.loggedIn=true
          return this.booleanreturn
        }else{
          this.loggedIn=false
          return this.booleanreturn
        }
  })
  }

  booleanreturn(){
    return this.loggedIn
  }

}