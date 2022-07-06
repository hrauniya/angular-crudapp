import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Customer} from './customer'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url:string="http://localhost:3000/customer"

  constructor(private http:HttpClient) { }

  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url)

  }
  getbyid(id:number){
    return this.http.get<Customer>(this.url+'/'+id)

  }
}