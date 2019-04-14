import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-radio-button-test',
    templateUrl: './radio-button-test.component.html',
    styles: [`.example {
        word-wrap: break-word;
        white-space: normal;
           }`]
})
export class RadioButtonTestComponent implements OnInit {

    sbook = '978-4-7741-9130-0';
    books = [
        { isbn: '978-4-8222-9894-4', title: '基礎からしっかり学ぶC#の教科書' },
        { isbn: '978-4-8222-5355-4', title: 'アプリを作ろう！ Visual C#入門' },
        { isbn: '978-4-7741-9130-0', title: 'Angularアプリケーションプログラミング' },
        { isbn: '978-4-7741-9030-3', title: 'C#ポケットリファレンス' },
        { isbn: '978-4-7741-8994-9', title: 'HTML&CSS 超入門' }
    ];
    constructor() { }

    ngOnInit() {
    }

}
