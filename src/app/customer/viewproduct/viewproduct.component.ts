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
            this.userwishlist = data1.productlist;
            
        },
        error: error => {
            this.userwishlist=[];
            
        }
      
      
      })
  })
    this.wishlist.getwishlistlist().subscribe(data2=>{
    this.userobject2=data2
    for (let objects of this.userobject2){
      this.userset.add(objects.userid)
      
    }
    console.log(this.userset)

    })  
}

  addToWishlist(productId:number){
    this.wishlist.addtowishlist(this.userset,productId,this.id,this.userwishlist)

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
