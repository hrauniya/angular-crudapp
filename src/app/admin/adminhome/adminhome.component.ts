import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Admin} from '../admin'

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  adminlist:Admin[]=[]
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getAdmins().subscribe(data => this.adminlist= data)
  }

}
