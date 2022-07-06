import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Admin} from './admin'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url:string="http://localhost:3000/admin"

  constructor(private http:HttpClient) { }

  getAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.url)

  }
  getbyid(id:number){
    return this.http.get<Admin>(this.url+'/'+id)

  }
}
