import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { changepasswordValidator} from 'src/app/shared/password-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient, private a:ActivatedRoute) { }

  showid:number=0
  ngOnInit(): void {
    this.a.paramMap.subscribe(
      (data)=>{ this.showid= Number(data.get("id"))
  })
}

  changepassword=this.fb.group({
    prevpassword:["",[Validators.required]],
    newpassword:['',[Validators.required]],
    confirmnewpassword:['',[Validators.required]]
  },{validators:changepasswordValidator})


  onSubmit(formvalues:any){

    this.http.get<any>("http://localhost:3000/customer/"+this.showid)
    .subscribe(data=>{
      let user=() =>{
        if (data.password===formvalues.prevpassword){
          console.log(data)
          return true
        }else{
          // console.log(data.password)
          // console.log(formvalues.newpassword)
          // console.log(data)
          return false
        }
      };
      if (user()){
        let newobject={id:this.showid,first_name:data.first_name,last_name:data.last_name,email:data.email,username:data.username,password:formvalues.newpassword}
        // console.log(newobject)
        this.http.put('http://localhost:3000/customer/'+this.showid,newobject).subscribe()
        alert("Password Changed!")
        
      }else{
        


        alert("Wrong password for user entered!Enter again!")
        this.changepassword.reset()
      
        
      }
    })
    


  }

}
