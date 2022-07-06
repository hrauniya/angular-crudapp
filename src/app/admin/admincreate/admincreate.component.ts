import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    id:["",[Validators.required]],
    first_name:["",[Validators.required]],
    last_name:["",[Validators.required]],
    email:["",[Validators.required]]
  });

  onSubmit(addAdmins:any){
    // console.log(addAdmins)
    this.http.post('http://localhost:3000/admin',addAdmins).subscribe(data => {
      this.postId = data;
    })
    // console.log(this.postId)
    
  }

}
