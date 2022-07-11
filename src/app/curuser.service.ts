import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuruserService {

  curuser:string= ""
  constructor() { }

   setcurrentuser(curuser:string){
    this.curuser=curuser
  
  }

  getcurrentuser():string{
    return this.curuser
  }

}
