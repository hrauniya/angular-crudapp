import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuruserService {

  curuser:string= ""
  curid:number=-1
  constructor() { }

   setcurrentuser(curuser:string,curid:number){
    this.curuser=curuser
    this.curid=curid
  
  }

  getcurrentuser():string{
    return this.curuser
  }

  getcurrentuserid():number{
    return this.curid
  }

}
