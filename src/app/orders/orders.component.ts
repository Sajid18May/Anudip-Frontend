// import { Component, OnInit } from '@angular/core';
// import { Orders } from '../models/orders';
// import { CartService } from '../services/cart.service';

// @Component({
//   selector: 'app-orders',
//   templateUrl: './orders.component.html',
//   styleUrl: './orders.component.css'
// })
// export class OrdersComponent implements OnInit{
//   orders:Orders[]=[];
//   constructor(private cartservice:CartService){}
//   ngOnInit(): void {
//     this.cartservice.getOrder().subscribe((data:Orders[])=>
//     this.orders=data);
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Orders } from '../models/orders';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Orders[] = [];
  private subscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.getOrder().subscribe(
      (data: Orders[]) => {
        this.orders = data;
      },
      (error) => {
        // Handle error, if needed
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
