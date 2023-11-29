import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  Books: Book[]=[];
  constructor(private bookService: BooksService,private cartService:CartService,private activetedRoute:ActivatedRoute) {
    // this.activetedRoute.params.subscribe((param)=>{
    //   if(param['searchTerm'])
    //   this.Books=this.getBooksBySearchTerm(param['searchTerm']);
    // })

   }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data;
    });
  }
  getBooksBySearchTerm(searchTerm:string){
    return this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data.filter(book=>book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    })
  }

  addtoCart(){
  }
}
