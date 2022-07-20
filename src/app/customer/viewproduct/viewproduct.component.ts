import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from 'src/app/admin/product';
// import { ProductService } from '../products.service';
import {GetproductsService} from '../products.service'
import { Product2 } from 'src/app/product2';
import {ActivatedRoute} from '@angular/router'
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  url:string="http://localhost:3000/products"
  productlist:Product2[]=[]
  id!:number



  constructor(private http:HttpClient,private getproduct:GetproductsService,private a:ActivatedRoute,private wishlist:WishlistService) { }
  
  ngOnInit(): void {
    this.getproduct.getProducts().subscribe(data => this.productlist= data)

    this.a.paramMap.subscribe(
      (data)=>{ this.id= Number(data.get("id"))
  })
}

  addToWishlist(productId:number){
    this.wishlist.addtowishlist(productId,this.id)
    
    
  }



}
