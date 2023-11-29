import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit  {
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
