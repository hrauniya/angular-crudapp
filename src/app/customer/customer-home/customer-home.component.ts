import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer'
import {CustomerService} from '../customer.service'
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  customerlist:Customer[]=[]
  constructor(private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.customerservice.getCustomers().subscribe(data => this.customerlist= data)
  }

}
