import { UserserviceService } from './../services/userservice.service';
import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  user: User=new User();
  username: string = '';
  constructor(private loginservice: UserserviceService) {
    this.loginservice.getUserObservable().subscribe((user)=>{
      this.user=user;
    })
  }
  ngOnInit(): void {
    this.username=this.loginservice.getUserDetails();
    console.log(this.username);
  }

  signOut(): void {
    this.loginservice.removeUserDetails();
  }
}
