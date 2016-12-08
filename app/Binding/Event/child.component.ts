import { Output, Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'binding-event-child-comp',
    template: `<div>
                <button (click)="change(true)">+</button>
                <button (click)="change(false)">-</button>
                </div>`,
    styles: [`div { background-color: WhiteSmoke }`]
})
export class ChildComponent {

    @Output() onChanged = new EventEmitter<boolean>();

    change(increased) {
        this.onChanged.emit(increased);
    }
}