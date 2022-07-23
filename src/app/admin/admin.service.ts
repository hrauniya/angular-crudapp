import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Admin} from './admin'
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CuruserService } from '../curuser.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url:string="http://localhost:3000/admin"

  constructor(private http:HttpClient,private router:Router) { }

  getAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.url)

  }
  getbyid(id:number){
    return this.http.get<Admin>(this.url+'/'+id)

  }

  createAdmin(addAdmins:any,addAdminsForm:FormGroup){
    this.http.get<any>("http://localhost:3000/admin")
    .subscribe(data=>{
      const user = data.find((a:any)=>{
        if (a.username===addAdmins.username){
         
          return true
        }else{
          return false
        }
      });
      if (user){
        alert("Username already exists! Please use another username")
        addAdminsForm.reset()
        
      }else{
        let newadmin={first_name:addAdmins.first_name,last_name:addAdmins.last_name,email:addAdmins.email,username:addAdmins.username,password:addAdmins.password}
        this.http.post('http://localhost:3000/admin',newadmin).subscribe(data => {
        // this.postId = data;
        alert("Adding admin successful!")
    })
        
      }
    })
  }


  editAdmins(editAdmins:any){
    this.http.put('http://localhost:3000/admin/'+editAdmins.id,editAdmins).subscribe()
    alert("Edit Complete!")

  }

  isLoggedIn(adminlogin:FormGroup,curuser:string,curid:number,getcuruser:CuruserService){
    this.http.get<any>("http://localhost:3000/admin")
    .subscribe(data=>{
      const user = data.find((a:any)=>{
        if (a.username===adminlogin.value.username && a.password===adminlogin.value.password){
          curuser=a.username
          curid=a.id
          getcuruser.setcurrentuser(curuser,curid)
          return true
        }else{
          return false
        }
      });
      if (user){
        adminlogin.reset()
        this.router.navigate(['adminlogin/adminhome'])
      }else{
        alert("User not found")
        adminlogin.reset()
        
      }
    })
  }







}
