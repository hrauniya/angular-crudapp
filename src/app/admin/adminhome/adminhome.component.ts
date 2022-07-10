import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Admin} from '../admin'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  adminlist:Admin[]=[]
  constructor(private adminservice:AdminService,private http:HttpClient) { }

  ngOnInit(): void {
    this.adminservice.getAdmins().subscribe(data => this.adminlist= data)
  }
  onDelete(adminid:number){
    this.http.delete('http://localhost:3000/admin/'+adminid).subscribe()
    location.reload()
    

  }
 
}
