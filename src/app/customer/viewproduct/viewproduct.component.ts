import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from 'src/app/admin/product';
import { GetproductsService } from '../getproducts.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  url:string="http://localhost:3000/products"
  productlist:product[]=[]
  constructor(private http:HttpClient,private getproduct:GetproductsService) { }
  
  ngOnInit(): void {
    this.getproduct.getProducts().subscribe(data => this.productlist= data)
    
  }



}
