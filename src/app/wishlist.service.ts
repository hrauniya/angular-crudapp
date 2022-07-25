import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductCreateRequest} from './admin/productcreaterequest';
import { GetproductsService } from './customer/products.service';
import { ProductDetail } from './productdetail';
import { Observable } from 'rxjs';
import { Wishlist } from './wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  product_data!:ProductDetail
  product_list:ProductDetail[]=[]
  userset= new Set<number>()
  productset=new Set<number>()
  userobject1!:Wishlist
  url:string="http://localhost:3000/wishlist"
  userwishlist!:ProductDetail[]
  bool:boolean=false
  count:number=0


  constructor(private http:HttpClient,private productservice:GetproductsService) { }

  addtowishlist(userset:Set<number>,productId:number,userId:number,wishlist:ProductDetail[]){
    let bool=false
    if (userset.has(userId)){
      for (let product of wishlist){
        if (product.id==productId){
          bool=true
        }
      
      }
      if (!bool){
        this.productservice.getbyid(productId).subscribe(
          productdata=>{
            this.product_data=productdata
            console.log(this.product_data)
            wishlist.push(this.product_data)
            this.http.patch<any>("http://localhost:3000/wishlist/"+userId,{userid:userId,productlist:wishlist}).subscribe()
            alert("Product added to wishlist!")
          }
        )
      }else{
        alert("Product already added to Wishlist!")
      }

    }else{
      this.productservice.getbyid(productId).subscribe(
        productdata=>{
          this.product_data=productdata
          wishlist.push(this.product_data)
          this.http.post<any>("http://localhost:3000/wishlist",{userid:userId,productlist:wishlist}).subscribe()
          userset.add(userId)
          alert("Product added to wishlist!")
        }
      )
      
    }


      
        

     

     
  }

  removefromwishlist(userId:number,productlist:ProductDetail[]){
    this.http.patch<any>("http://localhost:3000/wishlist/"+userId,{userid:userId,productlist:productlist}).subscribe()
    alert("This product removed from wishlist!")
      

  }

  getwishlistlist():Observable<any[]>{
    return this.http.get<any[]>(this.url)

  }
  getwishlistforuserid(id:number){
    return this.http.get<any>(this.url+'/'+id)

  }



}
