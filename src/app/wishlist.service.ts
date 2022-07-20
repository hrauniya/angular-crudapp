import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from './admin/product';
import { GetproductsService } from './customer/products.service';
import { Product2 } from './product2';
import { Observable } from 'rxjs';
import { Wishlist } from './wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  product_data!:Product2
  product_list:Product2[]=[]
  userset= new Set<number>()
  productset=new Set<number>()
  userobject1!:Wishlist
  url:string="http://localhost:3000/wishlist/"


  constructor(private http:HttpClient,private productservice:GetproductsService) { }

  addtowishlist(productId:number,userId:number){

      
      this.productservice.getbyid(productId).subscribe(data=>{
        this.product_data=data
        //check if productId is already in product wishlist to ensure no duplicity
        


          this.product_list.push(this.product_data)
              if (this.userset.has(userId)){
                this.http.patch<any>("http://localhost:3000/wishlist/"+userId,{userid:userId,productlist:this.product_list}).subscribe()
                alert("This product was added to wishlist!")
              }else{
                this.http.post<any>("http://localhost:3000/wishlist",{userid:userId,productlist:this.product_list}).subscribe()
                alert("This product was added to wishlist!")
                this.userset.add(userId)
              }
        })


        
        
        
        

     

     
  }

  removefromwishlist(){

  }

  getwishlistlist():Observable<any[]>{
    return this.http.get<any[]>(this.url)

  }
  getwishlistforuserid(id:number){
    return this.http.get<any>(this.url+'/'+id)

  }



}
