import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from '../admin/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {


  private url:string="http://localhost:3000/products"

  constructor(private http:HttpClient) { }

  getProducts():Observable<product[]>{
    return this.http.get<product[]>(this.url)

  }
  getbyid(id:number){
    return this.http.get<product>(this.url+'/'+id)

  }
}
