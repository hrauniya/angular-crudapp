import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import {RouterModule} from '@angular/router'



@NgModule({
  declarations: [
    AdminhomeComponent,
    AdmincreateComponent,
    AdmineditComponent,
    AdmindetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'adminhome',component:AdminhomeComponent}
    ])
  ],
  exports:[
    AdminModule
  ]
})
export class AdminModule { }
