import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms'
import { AdminLoginAuthGuard } from 'src/app/admin-login-auth.guard';
import {AdminLoginServiceService} from '/Users/harsharauniyar/angular-http/angular-http/src/app/admin-login-service.service'




@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private fb:FormBuilder,private adminloginservice:AdminLoginServiceService) {
    
  }

  ngOnInit(): void {
  }
  adminlogin=this.fb.group({
    username:["",[Validators.required]],
    password:["",[Validators.required]],
  });

  check(username:any, password:any){
    this.adminloginservice.isLoggedIn(username,password)
  }

}
