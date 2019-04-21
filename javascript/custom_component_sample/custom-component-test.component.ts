import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-custom-component-test',
    template: `
   <app-custom-component-sample [name]="hoge"></app-custom-component-sample>
   <p>{{hoge.value}}</p>
  `,
    styleUrls: ['./custom-component-test.component.css']
})
export class CustomComponentTestComponent implements OnInit {

    hoge = new FormControl('');

    constructor() { }

    ngOnInit() {
        this.hoge.valueChanges.subscribe(v => console.log(v));
    }

}
