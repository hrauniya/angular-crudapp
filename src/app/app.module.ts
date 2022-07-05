import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { HomeComponent} from './home/home.component'
// import {AdminhomeComponent} from './admin/adminhome/adminhome.component'
// import {CustomerHomeComponent} from './customer/customer-home/customer-home.component'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CustomerModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      
    ])
  ],
  exports:[],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
