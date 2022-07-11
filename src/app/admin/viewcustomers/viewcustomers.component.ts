import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer';


@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent implements OnInit {

  customerlist:Customer[]=[]
  constructor(private http:HttpClient,private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.customerservice.getCustomers().subscribe(data => this.customerlist= data)
  }

}
