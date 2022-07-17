import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import { CuruserService } from 'src/app/curuser.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  curuser:string=""
  curid:number=-1
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private getcuruser:CuruserService) { }

  ngOnInit(): void {
  }

  customerlogin=this.fb.group({
    username:["",[Validators.required]],
    password:["",[Validators.required]],
  });

  isLoggedIn(){
    this.http.get<any>("http://localhost:3000/customer")
    .subscribe(data=>{
      const user = data.find((a:any)=>{
        if (a.username===this.customerlogin.value.username && a.password===this.customerlogin.value.password){
          this.curuser=a.username
          this.curid=a.id
          this.getcuruser.setcurrentuser(this.curuser,this.curid)
          return true
        }else{
          return false
        }
      });
      if (user){
        this.customerlogin.reset()
        this.router.navigate(['customerlogin/customerhome'])
      }else{
        alert("User not found")
        this.customerlogin.reset()
        
      }
    })
  
}

}
