import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';
import { Cartitem } from '../models/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart=cart;
    })
  }
  ngOnInit():void{ }

  removeFromCart(cartItem:Cartitem){
    this.cartService.removeFromCart(cartItem.book.title);
  }

  changeQuantity(cartItem:Cartitem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.title,quantity);
  }

  orderfinal(){
    this.cartService.submitOrder();
    this.cartService.clearCart();
  }
}
