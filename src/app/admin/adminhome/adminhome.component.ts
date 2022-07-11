import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Admin} from '../admin'
import { HttpClient } from '@angular/common/http';
import {AdminloginComponent} from '../adminlogin/adminlogin.component'
import { CuruserService } from 'src/app/curuser.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  username:string=''

  adminlist:Admin[]=[]
  constructor(private http:HttpClient,private adminservice:AdminService,private getcuruser:CuruserService) { }

  ngOnInit(): void {
    this.username=this.getcuruser.getcurrentuser()
    this.adminservice.getAdmins().subscribe(data => this.adminlist= data)
  }
  onDelete(adminid:number){
    this.http.delete('http://localhost:3000/admin/'+adminid).subscribe()
    location.reload()
    

  }
  
 
}
