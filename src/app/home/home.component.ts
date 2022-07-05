import { Component, OnInit } from '@angular/core';
import {CustomerHomeComponent} from '../customer/customer-home/customer-home.component'
import {AdminhomeComponent} from '../admin/adminhome/adminhome.component'
import {AppModule} from '../app.module'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
