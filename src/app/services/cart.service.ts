import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Cartitem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(book:Book):void{
    let cartItem=this.cart.items.find(item=>item.book.title===book.title);
    if(cartItem)
      return;
    this.cart.items.push(new Cartitem(book));
  }

  removeFromCart(bookTitle:string):void{
    this.cart.items=this.cart.items.filter(item=>item.book.title!=bookTitle);
  }

  changeQuantity(bookTitle:string,quantity:number){
    let cartitem=this.cart.items.find(item=>item.book.title===bookTitle);
    if(!cartitem)
      return;
    cartitem.quantity=quantity;
    cartitem.price=quantity*cartitem.book.price;
  }

  clearCart(){
    this.cart=new Cart();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
}
