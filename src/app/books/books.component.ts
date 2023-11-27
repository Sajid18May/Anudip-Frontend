import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  Books!: Book[];
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data;
    });
  }
}
