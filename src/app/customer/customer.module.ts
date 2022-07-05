import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'customerhome',component:CustomerHomeComponent}

    ])
  ], 
  exports:[
    
    CustomerModule
  ]
})
export class CustomerModule { }
