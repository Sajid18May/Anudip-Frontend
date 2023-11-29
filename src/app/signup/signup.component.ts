import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  message:any;

 user:User=new User();
 constructor(private service:UserserviceService) { }
 ngOnInit() {
}
public registerNow(){
  let resp=this.service.doRegistration(this.user);
  resp.subscribe((data)=>this.message=data);
}
}
