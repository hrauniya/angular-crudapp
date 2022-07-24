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

  addtowishlist(productId:number,userId:number){

      
      this.productservice.getbyid(productId).subscribe(data=>{
        this.product_data=data
        //check if productId is already in product wishlist to ensure no duplicity
        if (this.count>0){
          this.http.get<any>(this.url+'/'+userId).subscribe(info=>{
            this.userobject1=info
            this.userwishlist=this.userobject1.productlist
            for (let productid of this.userwishlist){
              if (productid.id==productId){
                this.bool=true
                break
              }
  
            }
            if (this.bool===false){
              this.product_list.push(this.product_data)
              if (this.userset.has(userId)){
                this.http.patch<any>("http://localhost:3000/wishlist/"+userId,{userid:userId,productlist:this.product_list}).subscribe()
                alert("This product was added to wishlist!")
              }else{
                this.http.post<any>("http://localhost:3000/wishlist",{userid:userId,productlist:this.product_list}).subscribe()
                alert("This product was added to wishlist!")
                this.userset.add(userId)
              }
            }else{
              alert("Product already in wishlist!")
            }
          })

        }else{
          this.product_list.push(this.product_data)
              if (this.userset.has(userId)){
                this.http.patch<any>("http://localhost:3000/wishlist/"+userId,{userid:userId,productlist:this.product_list}).subscribe()
                alert("This product was added to wishlist!")
              }else{
                this.http.post<any>("http://localhost:3000/wishlist",{userid:userId,productlist:this.product_list}).subscribe()
                alert("This product was added to wishlist!")
                this.userset.add(userId)
              }
              this.count=this.count+1

        }
      


        


          
              
        })


        
        
        
        

     

     
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
