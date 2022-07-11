import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/shared/password-validator';
import { forbiddenNameValidator } from 'src/app/shared/username-validator';

@Component({
  selector: 'app-admincreate',
  templateUrl: './admincreate.component.html',
  styleUrls: ['./admincreate.component.css']
})
export class AdmincreateComponent implements OnInit {

  postId:any={};
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
  }

  addAdmins=this.fb.group({
    first_name:["",[Validators.required]],
    last_name:["",[Validators.required]],
    email:["",[Validators.required]],
    username:["",[Validators.required,Validators.minLength(4),forbiddenNameValidator]],
    password:["",[Validators.required,Validators.minLength(8)]],
    confirmpassword:["",Validators.required,Validators.minLength(8)]

  },{validators:passwordValidator});

  onSubmit(addAdmins:any){
    // console.log(addAdmins)
    let newadmin={first_name:addAdmins.first_name,last_name:addAdmins.last_name,email:addAdmins.email,username:addAdmins.username,password:addAdmins.password}
    this.http.post('http://localhost:3000/admin',newadmin).subscribe(data => {
      this.postId = data;
    })
    // console.log(this.postId)
    
  }

}
