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
  url1:string="http://localhost:3000/wishlist"
  productlist1:ProductDetail[]=[]
  productlist:ProductDetail[]=[]
  id!:number
  bool=false
  object2!:Wishlist
  product_data!:ProductDetail
  count:number=0
  userset=new Set<number>()
  product_list:ProductDetail[]=[]
  userwishlist!:ProductDetail[]
  userobject1!:Wishlist
  userobject2!:any[]


  constructor(private http:HttpClient,private productservice:GetproductsService,private a:ActivatedRoute,private wishlist:WishlistService) { }
  
  ngOnInit(): void {
    this.productservice.getProducts().subscribe(data => this.productlist= data)
    

    this.a.paramMap.subscribe(
      (data)=>{ 
        this.id= Number(data.get("id"))
        this.http.get<any>("http://localhost:3000/wishlist/"+this.id).subscribe({
          next: data1 => {
            this.count = data1.productlist.length;
        },
        error: error => {
            this.count = 0;
            
        }
      
      
      })
  })
    this.wishlist.getwishlistlist().subscribe(data2=>{
    this.userobject2=data2
    for (let objects of this.userobject2){
      this.userset.add(objects.userid)
    }


    })  
}

  addToWishlist(productId:number){
    // let userset=new Set<number>();
    // this.wishlist.addtowishlist(productId,this.id,userset)
    this.productservice.getbyid(productId).subscribe(data=>{
      this.product_data=data
      console.log(this.count)
      //check if productId is already in product wishlist to ensure no duplicity
      if (this.count>0){
        this.http.get<any>(this.url1+'/'+this.id).subscribe(info=>{
          this.userobject1=info
          console.log(typeof this.userobject1.productlist)
          this.userwishlist=this.userobject1.productlist
          console.log(typeof this.userwishlist)
          for (var productid of this.userwishlist){
            console.log(this.userwishlist)
            console.log("Printing productID",productId)
            if (productid.id==productId){
              this.bool=true
              break
            }
          this.bool=false
          console.log(this.bool)

          }
          if (this.bool===false){
            this.product_list.push(this.product_data)
            if (this.userset.has(this.id)){
              this.http.patch<any>("http://localhost:3000/wishlist/"+this.id,{userid:this.id,productlist:this.product_list}).subscribe()
              alert("This product was added to wishlist!")
              // console.log(userset)
              console.log("Patching!",this.userset)
            }else{
              this.http.post<any>("http://localhost:3000/wishlist",{userid:this.id,productlist:this.product_list}).subscribe()
              alert("This product was added to wishlist!")
              this.userset.add(this.id)
              // console.log(userset)
            }
          }else{
            alert("Product already in wishlist! Add product not in wishlist!")
            console.log(this.userset)
            
          }
        })

      }else{
        this.product_list.push(this.product_data)
            if (this.userset.has(this.id)){
              this.http.patch<any>("http://localhost:3000/wishlist/"+this.userset,{userid:this.id,productlist:this.product_list}).subscribe()
              alert("This product was added to wishlist!")
              
              console.log("Printing userset:",this.userset)
            }else{
              this.http.post<any>("http://localhost:3000/wishlist",{userid:this.id,productlist:this.product_list}).subscribe()
              alert("This product was added to wishlist!")
              this.userset.add(this.id)
              console.log("Posting and Printing userset:",this.userset)

              // console.log(userset)
            }
            this.count=this.count+1

      }
    


      


        
            
      })


      
    
  }

  getProductlistforuserid(productId:number):boolean{
    // this.bool=false
    // this.wishlist.getwishlistforuserid(this.id).subscribe(
    //   data=> {
    //     this.object2= data
    //     this.userwishlist=this.object2.productlist
    //     for (let user_wishlist of this.userwishlist){
    //       if (user_wishlist.id==productId){
    //         this.bool=true
    //       }else{
    //         this.bool=false
    //       }
        
    //     console.log(this.userwishlist)
          
    //     }
       
      
    //   }
    // )
    return this.bool

    



  }
}
