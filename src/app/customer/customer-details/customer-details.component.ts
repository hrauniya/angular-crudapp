import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../customer.service'
//individual customer can view their own profile
//change password option for individual customer
//admin creates product
//customer views product details

//customer wishlist from products
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  curadmin!:Customer;
  // curadmin:Customer= {id:0,first_name:"",last_name:"",email:"",username:'', password:''};
  showid:number=0

  constructor(private adminservice:CustomerService,private a:ActivatedRoute) {
   
    
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
