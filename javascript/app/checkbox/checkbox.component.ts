import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
    constructor(private bookService: BookService) { }
    ngOnInit() {
        this.getBooks();
    }
    books: Book[] = [];

    getBooks() {
        this.bookService.getBooks().subscribe(books => this.books = books);
    }

    show() {
        console.log(this.books);
    }
}
