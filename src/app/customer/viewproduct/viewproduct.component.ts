import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductCreateRequest } from '/Users/harsharauniyar/angular-http/angular-http/src/app/admin/productcreaterequest';
// import { ProductService } from '../products.service';
import {GetproductsService} from '../products.service'
import { ProductDetail } from 'src/app/productdetail';
import {ActivatedRoute} from '@angular/router'
import { WishlistService } from 'src/app/wishlist.service';
import { Wishlist } from 'src/app/wishlist';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  url:string="http://localhost:3000/products"
  productlist:ProductDetail[]=[]
  userwishlist: Wishlist[]=[]
  id!:number
  bool=false
  object2={userid:null,productlist:[],id:null}



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

  getProductlistforuserid(productId:number):boolean{
    this.bool=false
    this.wishlist.getwishlistforuserid(this.id).subscribe(
      data=> {
        this.object2= data
        this.userwishlist=this.object2.productlist
        for (let user_wishlist of this.userwishlist){
          if (user_wishlist.id==productId){
            this.bool=true
          }else{
            this.bool=false
          }
        
        console.log(this.userwishlist)
          
        }
       
      
      }
    )
    return this.bool

    



  }
}
