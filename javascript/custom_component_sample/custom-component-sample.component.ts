import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-custom-component-sample',
    template: `
  Name<input  [formControl]="name"/>
  `,
    styleUrls: ['./custom-component-sample.component.css']
})
export class CustomComponentSampleComponent implements OnInit {

    @Input() name: FormControl;
    constructor() { }

    ngOnInit() {
    }

    @HostListener('change') change() {
        this.name.setValue('★' + this.name.value + '★');
    }

}
