import { Component } from '@angular/core';

@Component({
    selector: 'local-var-child-comp',
    template: `<div class="child-comp">
                <p>{{counter}}</p>
                </div>`
})
export class ChildComponent {
    counter: number = 0;

    increment() {this.counter ++;}
    decrement() {this.counter --;}
}