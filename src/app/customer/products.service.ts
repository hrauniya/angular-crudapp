import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ProductCreateRequest } from '../admin/productcreaterequest';
import { Observable } from 'rxjs';
import { ProductDetail } from '../productdetail';

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {


  private url:string="http://localhost:3000/products"

  constructor(private http:HttpClient) { }

  getProducts():Observable<ProductDetail[]>{
    return this.http.get<ProductDetail[]>(this.url)

  }
  getbyid(id:number){
    return this.http.get<ProductDetail>(this.url+'/'+id)

  }
}
