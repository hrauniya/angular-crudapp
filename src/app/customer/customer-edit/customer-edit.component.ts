import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../customer.service'
import {HttpClient} from '@angular/common/http'
import {Customer} from '../customer'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  showid:number=0
  curadmin:Customer={id:0,first_name:"",last_name:"",gender:"",age:0};
  editAdmins:any

  constructor(private fb:FormBuilder,private adminservice:CustomerService,private http:HttpClient,private a:ActivatedRoute) {

      this.editAdmins=this.fb.group({
      id:[this.showid,[Validators.required]],
      first_name:[this.curadmin.first_name,[Validators.required]],
      last_name:[this.curadmin.last_name,[Validators.required]],
      gender:[this.curadmin.gender,[Validators.required]],
      age:[this.curadmin.age,[Validators.required]]
    });
   }

  ngOnInit(): void {
    this.a.paramMap.subscribe(
      (data)=>{this.showid= Number(data.get("id"))
      this.adminservice.getbyid(this.showid).subscribe(data=>{this.curadmin=data;
        this.editAdmins=this.fb.group({
          id:[this.showid,[Validators.required]],
          first_name:[this.curadmin.first_name,[Validators.required]],
          last_name:[this.curadmin.last_name,[Validators.required]],
          gender:[this.curadmin.gender,[Validators.required]],
          age:[this.curadmin.age,[Validators.required]]
        });})
    }
    )

  }


  

  onSubmit(editAdmins:any){
    this.http.put('http://localhost:3000/customer/'+editAdmins.id,editAdmins).subscribe()

  }

}
