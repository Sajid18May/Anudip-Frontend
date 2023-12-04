import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Cartitem } from '../models/cartitem';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=this.getValuesfromStorage();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);
  constructor(private http:HttpClient) { }

  addToCart(book:Book):void{
    let cartItem=this.cart.items.find(item=>item.book.title===book.title);
    if(cartItem)
      return;
    this.cart.items.push(new Cartitem(book));
    this.setTotalValues();
  }

  removeFromCart(bookTitle:string):void{
    this.cart.items=this.cart.items.filter(item=>item.book.title!=bookTitle);
    this.setTotalValues();
  }

  changeQuantity(bookTitle:string,quantity:number){
    let cartitem=this.cart.items.find(item=>item.book.title===bookTitle);
    if(!cartitem)
      return;
    cartitem.quantity=quantity;
    cartitem.price=quantity*cartitem.book.price;
    this.setTotalValues();
  }

  clearCart(){
    this.cart=new Cart();
    this.setTotalValues();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setTotalValues():void{
    this.cart.totalprice=this.cart.items.reduce((PrevSum,CurrentItem)=>PrevSum+CurrentItem.price,0);
    this.cart.totalcount=this.cart.items.reduce((PrevSum,CurrentItem)=>PrevSum+CurrentItem.quantity,0);
    const cartJSON=JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJSON);
    this.cartSubject.next(this.cart);
  }

  private getValuesfromStorage():Cart{
    const cartJSON=localStorage.getItem('Cart');
    return cartJSON? JSON.parse(cartJSON): new Cart();
  }

  public submitOrder(){
    return this.http.post("http://localhost:8080/addOrder",this.cart);
  }
  public getOrder():Observable<Orders>{
    return this.http.get<Orders>("http://localhost:8080/getOrders");
  }
}
