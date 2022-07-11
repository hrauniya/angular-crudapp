import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { forbiddenNameValidator } from 'src/app/shared/username-validator';
import { passwordValidator } from 'src/app/shared/password-validator';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  postId:any={};
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
  }

  addCustomers=this.fb.group({
    first_name:["",[Validators.required]],
    last_name:["",[Validators.required]],
    email:["",[Validators.required]],
    username:["",[Validators.required,Validators.minLength(4),forbiddenNameValidator]],
    password:["",[Validators.required,Validators.minLength(8)]],
    confirmpassword:["",[Validators.required,Validators.minLength(8)]],
  },{validators:passwordValidator});

  onSubmit(addCustomers:any){
    // console.log(addAdmins)
    let newcustomer={first_name:addCustomers.first_name,last_name:addCustomers.last_name,email:addCustomers.email,username:addCustomers.username,password:addCustomers.password}
    this.http.post('http://localhost:3000/customer',newcustomer).subscribe(data => {
      this.postId = data;
      alert("Registration Successful!")
    })
    // console.log(this.postId)
    
  }



}
