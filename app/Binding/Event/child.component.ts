import { Output, Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'binding-event-child-comp',
    template: `
                <button>+</button>
                <button>-</button>
                `
})
export class ChildComponent {

    @Output() onChanged = new EventEmitter<boolean>();

    change(increased) {
        this.onChanged.emit(increased);
    }

}