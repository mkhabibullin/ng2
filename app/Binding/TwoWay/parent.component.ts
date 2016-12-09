import { Component } from '@angular/core';

@Component({
    selector: 'binding-twoway-parent-component',
    template: `<div class="parent-comp">
        <binding-twoway-child-comp [(userName)]="name"></binding-twoway-child-comp>
        <div>Выбранное имя: {{name}}</div>
    </div>`
})
export class ParentComponent {
    name: string = "Tom";
}