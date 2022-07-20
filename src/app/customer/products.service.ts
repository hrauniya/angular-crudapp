import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from '../admin/product';
import { Observable } from 'rxjs';
import { Product2 } from '../product2';

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {


  private url:string="http://localhost:3000/products"

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product2[]>{
    return this.http.get<Product2[]>(this.url)

  }
  getbyid(id:number){
    return this.http.get<Product2>(this.url+'/'+id)

  }
}
