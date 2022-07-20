import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ViewwishlistComponent } from './viewwishlist/viewwishlist.component';



@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDetailsComponent,
    CustomerloginComponent,
    CustomerregistrationComponent,
    ViewproductComponent,
    ChangepasswordComponent,
    ViewwishlistComponent,
  
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:"customerlogin",component:CustomerloginComponent},
      {path:"customerlogin/customerhome",component:CustomerHomeComponent},
      {path:"customerlogin/customerhome/viewproducts/:id",component:ViewproductComponent},
      {path:"customerlogin/customerhome/viewwishlist/:id",component:ViewwishlistComponent},
      {path:"customerlogin/customercreate",component:CustomerCreateComponent},
      {path:"customerlogin/customerhome/customerdetails/:id",component:CustomerDetailsComponent},
      {path:"customerlogin/customerhome/customeredit/:id",component:CustomerEditComponent},
      {path:"customerlogin/customerhome/changepassword/:id",component:ChangepasswordComponent}

    ])
  ], 

})
export class CustomerModule { }
