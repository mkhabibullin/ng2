import { Component } from '@angular/core';

@Component({
    selector: 'parent-comp',
    template: `<div class="parent-comp">
        <local-var-child-comp #counter></local-var-child-comp>
        <button (click)="counter.increment()">+</button>
        <button (click)="counter.decrement()">-</button>
    </div>`
})
export class ParentComponent{

}