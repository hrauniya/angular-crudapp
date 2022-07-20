import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product2 } from 'src/app/product2';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-viewwishlist',
  templateUrl: './viewwishlist.component.html',
  styleUrls: ['./viewwishlist.component.css']
})
export class ViewwishlistComponent implements OnInit {

  id!:number
  object1={userid:null,productlist:[],id:null}
  productlist:Product2[]=[]
  constructor(private wishlist:WishlistService, private a:ActivatedRoute) { }

  ngOnInit(): void {
    this.a.paramMap.subscribe(
      (data)=>{ this.id= Number(data.get("id"))
      this.wishlist.getwishlistforuserid(this.id).subscribe(data=>{
        this.object1=data
        this.productlist=this.object1.productlist
      })
  })





}
}
