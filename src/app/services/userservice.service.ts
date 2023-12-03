
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private username:string='';
  private user:User=new User();
  private userSubject:BehaviorSubject<User>=new BehaviorSubject(this.user);

  constructor(private http:HttpClient) { }

  public doRegistration(user:User){
    return this.http.post("http://localhost:8080/addCustomers",user);
  }
  public login(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:8080/log_in",user);
  }
  addUserDetails(user:User){
    this.user=user;
  }
  removeUserDetails(){
    this.user=new User();
  }
  getUserDetails(){
    this.username=this.user.first_name;
    return this.username;
  }
  getUserObservable():Observable<User>{
      return this.userSubject.asObservable();
  }
}
