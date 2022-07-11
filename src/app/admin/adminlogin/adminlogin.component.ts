import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms'
// import { AdminLoginAuthGuard } from 'src/app/admin-login-auth.guard';
import { Customer } from 'src/app/customer/customer';
import {AdminLoginServiceService} from '/Users/harsharauniyar/angular-http/angular-http/src/app/admin-login-service.service'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import { CuruserService } from 'src/app/curuser.service';




@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  curuser:string=""

  constructor(private fb:FormBuilder,private adminloginservice:AdminLoginServiceService,private http:HttpClient,private router:Router,private getcuruser:CuruserService) {
    
  }

  ngOnInit(): void {
  }
  adminlogin=this.fb.group({
    username:["",[Validators.required]],
    password:["",[Validators.required]],
  });

  

  isLoggedIn(){
    this.http.get<any>("http://localhost:3000/admin")
    .subscribe(data=>{
      const user = data.find((a:any)=>{
        if (a.username===this.adminlogin.value.username && a.password===this.adminlogin.value.password){
          this.curuser=a.username
          this.getcuruser.setcurrentuser(this.curuser)
          return true
        }else{
          return false
        }
      });
      if (user){
        this.adminlogin.reset()
        this.router.navigate(['adminlogin/adminhome'])
      }else{
        alert("User not found")
        this.adminlogin.reset()
        
      }
    })
  
}

  // passcuruser(){
  //   return this.curuser
  // }
}
