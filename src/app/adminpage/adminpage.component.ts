import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent implements OnInit {
  bookupdate:any;
  addbook:any;
  messageadd:any;
  messageupdate:any;
  messagedelete:any;
  Books: Book[]=[];
  constructor(private bookService: BooksService) {
    this.bookupdate=new FormGroup({
      title:new FormControl('',[
        Validators.required,
      ]),
      author_name:new FormControl('',[
        Validators.required,
      ]),
      genre:new FormControl('',[
        Validators.required,
      ]),
      price:new FormControl('',[
        Validators.required,
      ]),
    })
    this.addbook=new FormGroup({
      title:new FormControl('',[
        Validators.required,
      ]),
      author_name:new FormControl('',[
        Validators.required,
      ]),
      genre:new FormControl('',[
        Validators.required,
      ]),
      price:new FormControl('',[
        Validators.required,
      ]),
    })
   }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data;
    });
  }

  hiddenform=true;
  hideall(){
  this.hiddenform=!this.hiddenform;
  }
  hideadd=true;
  hide(){
    this.hideadd=!this.hideadd;
    }
  print(){
    console.log(this.bookupdate.value)
  }
  print1(){
    console.log(this.addbook.value)
  }
  addBook(){
    this.bookService.AddBook(this.addbook.value).subscribe((data)=>this.messageadd=data);
  }
  updateBook(id:number){
    this.bookService.updateBook(this.bookupdate.value,id).subscribe((data)=>this.messageupdate=data);
  }
  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe((data)=>this.messagedelete=data);
  }
}
