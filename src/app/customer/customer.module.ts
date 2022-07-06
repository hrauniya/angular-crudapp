import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:'customerhome',component:CustomerHomeComponent},
      {path:'customercreate',component:CustomerCreateComponent},
      {path:'customeredit/:id',component:CustomerEditComponent},
      {path:'customerdetails/:id', component:CustomerDetailsComponent}

    ])
  ], 
})
export class CustomerModule { }
