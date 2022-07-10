import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { passwordValidator } from 'src/app/shared/password-validator';
import { forbiddenNameValidator } from 'src/app/shared/username-validator';


@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  customerregister=this.fb.group({
    name:["",[Validators.required]],
    email:["",[Validators.required]],
    username:["",[Validators.required,Validators.minLength(4),forbiddenNameValidator]],
    password:["",[Validators.required,Validators.minLength(8)]],
    confirmpassword:["",[Validators.required,Validators.minLength(8)]],
    
  },{validators:passwordValidator});

  onSubmit(){

  }

}
