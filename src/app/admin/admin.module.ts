import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateproductComponent } from './createproduct/createproduct.component';
// import { AdminLoginAuthGuard } from '../admin-login-auth.guard';




@NgModule({
  declarations: [
    AdminhomeComponent,
    AdmincreateComponent,
    AdmineditComponent,
    AdmindetailsComponent,
    AdminloginComponent,
    ViewcustomersComponent,
    CreateproductComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
        
        {path:'adminlogin',component:AdminloginComponent},
        
        {path:'adminlogin/adminhome',component:AdminhomeComponent},
        {path:'adminlogin/adminhome/addproduct',component:CreateproductComponent},
        {path:'adminlogin/adminhome/admincreate', component:AdmincreateComponent},
        {path:'adminlogin/adminhome/viewcustomers',component:ViewcustomersComponent},
        {path:'adminlogin/adminhome/admindetails/:id',component:AdmindetailsComponent},
        {path:'adminlogin/adminhome/adminedit/:id',component:AdmineditComponent}
      
    ]),
    HttpClientModule,
    BrowserModule
  ],
  exports:[
    // AdminModule
  ]
})
export class AdminModule { }
