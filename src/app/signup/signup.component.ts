import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  message:any;
  form:any;

 user:User=new User();
 constructor(private service:UserserviceService) {
  this.form=new FormGroup({
    first_name:new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    last_name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone_number:new FormControl(''),
    address:new FormControl('')})


  }
 ngOnInit() {
}
get first_name(){
  return this.form.get('first_name');
}

public registerNow(){
  let resp=this.service.doRegistration(this.form.value);
  resp.subscribe((data)=>this.message=data);
}
}
