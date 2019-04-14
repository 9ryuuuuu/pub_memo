import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-radio-button',
    template: `
  <p>hogehoge</p>
    <ng-container *ngFor="let b of books; index as i">
      <label  [class]="className">
        <input type="radio" name="book"
          id="book{{i}}"
          [(ngModel)]="sbook"
          [value]="b.isbn" [checked]="sbook == b.isbn"
          (change)="show(i)">{{b.title}}
      </label>
    </ng-container>
  `,
    styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

    @Input() className: string;
    @Input() sbook: string;

    @Input() books: book[];

    show(i: number) {
        console.log('className:' + this.className);
        console.log('ISBN：' + this.sbook);
        console.log('書名：' + this.books[i].title);
    }
    constructor() { }

    ngOnInit() {
    }

}

class book {
    title: string;
    isbn: string;
}