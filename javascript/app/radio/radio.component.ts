import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
    selectBook;

    books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.getBooks();
    }

    getBooks() {
        this.bookService.getBooks().subscribe(books => this.books = books);
    }
    show(i: number) {
        console.log(this.selectBook);
        console.log(this.books[i].title);
    }
}
