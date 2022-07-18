import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import {Admin} from '../admin'
import { forbiddenNameValidator } from 'src/app/shared/username-validator';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent implements OnInit {

  showid:number=0
  curadmin:Admin={id:0,first_name:"",last_name:"",email:"",username:"",password:""};
  editAdmins:any

  constructor(private fb:FormBuilder,private adminservice:AdminService,private http:HttpClient,private a:ActivatedRoute) {

      this.editAdmins=this.fb.group({
      id:[this.showid,[Validators.required]],
      first_name:[this.curadmin.first_name,[Validators.required]],
      last_name:[this.curadmin.last_name,[Validators.required]],
      email:[this.curadmin.email,[Validators.required]],
      username:[this.curadmin.username,[Validators.required,Validators.minLength(4),forbiddenNameValidator]],
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
          email:[this.curadmin.email,[Validators.required]],
          username:[this.curadmin.username,[Validators.required]]
        });})
    }
    )

  }


  

  onSubmit(editAdmins:any){
    this.http.put('http://localhost:3000/admin/'+editAdmins.id,editAdmins).subscribe()
    alert("Edit Complete!")

  }

}
