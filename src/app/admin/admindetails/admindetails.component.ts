import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Admin} from '../admin'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {
  
  curadmin:Admin= {id:0,first_name:"",last_name:"",email:"",username:"",password:""};
  showid:number=0

  constructor(private adminservice:AdminService,private a:ActivatedRoute) {
   
    
   }

  ngOnInit(): void {
    // this.adminservice.getAdmins().subscribe(data => this.adminlist= data)
    this.a.paramMap.subscribe(
      (data)=>{ this.showid= Number(data.get("id"))
      this.adminservice.getbyid(this.showid).subscribe(data=>this.curadmin=data)
    }
    )
    
    
  }

}
