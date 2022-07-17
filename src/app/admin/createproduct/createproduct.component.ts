import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { product } from '../product';


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  product!:product
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
  }

  productForm=this.fb.group({
    productname:["",[Validators.required]],
    price:["",[Validators.required]],
    quantity:["",Validators.required]

  })

  
  onSubmit(values:any){
    this.product={productname:values.productname,price:values.price,quantity:values.quantity}
    this.http.post<product>('http://localhost:3000/products',this.product).subscribe()
    alert("Product Added!")
  }

}
