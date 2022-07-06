import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'
import {HttpClient} from '@angular/common/http'

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
    id:["",[Validators.required]],
    first_name:["",[Validators.required]],
    last_name:["",[Validators.required]],
    gender:["",[Validators.required]],
    age:["",Validators.required]
  });

  onSubmit(addCustomers:any){
    // console.log(addAdmins)
    this.http.post('http://localhost:3000/customer',addCustomers).subscribe(data => {
      this.postId = data;
    })
    // console.log(this.postId)
    
  }



}
