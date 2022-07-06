import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AdminhomeComponent,
    AdmincreateComponent,
    AdmineditComponent,
    AdmindetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:'adminhome',component:AdminhomeComponent},
      {path:'adminhome/admincreate', component:AdmincreateComponent},
      {path:'admindetails/:id',component:AdmindetailsComponent},
      {path:'adminedit/:id',component:AdmineditComponent}
      
    ]),
    HttpClientModule
  ],
  exports:[
    // AdminModule
  ]
})
export class AdminModule { }
