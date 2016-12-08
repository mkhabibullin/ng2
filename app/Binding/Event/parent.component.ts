import { Component } from '@angular/core';

@Component({
    selector: 'binding-event-parent-comp',
    template: `<div>
                <h2>Количество кликов: {{clicks}}</h2>
                <binding-event-child-comp (onChanged)="onChanged($event)"></binding-event-child-comp>
                </div>`,
    styles: [`div { background-color: Azure  }`]
})
export class ParentComponent {

    clicks: number = 0;

    onChanged(increased) {
        increased == true ? this.clicks++ : this.clicks--;
    }
}