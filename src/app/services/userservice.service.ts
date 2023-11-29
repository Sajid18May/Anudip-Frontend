
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  public doRegistration(user:User){
    return this.http.post("http://localhost:8080/addCustomers",user);
  }

}
