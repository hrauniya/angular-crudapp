import { Component, OnInit } from '@angular/core';
import { CuruserService } from 'src/app/curuser.service';
import {Customer} from '../customer'
import {CustomerService} from '../customer.service'
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  curuser:string=""
  curid!:number
  // customerlist:Customer[]=[]
  customer!:Customer
  constructor(private customerservice:CustomerService,private getcuruser:CuruserService) { }

  ngOnInit(): void {
    this.curuser=this.getcuruser.getcurrentuser()
    this.curid=this.getcuruser.getcurrentuserid()
    this.customerservice.getbyid(this.curid).subscribe(data => this.customer= data)
  }

}
