import { Component } from '@angular/core';

@Component({
    selector: 'binding-input-parent-comp',
    template: `
        <div>
            <binding-input-child-comp [userName]="name" [userAge]="age"></binding-input-child-comp>
            <input type="text" [(ngModel)]="name"/>
        </div>`,
    styles: [`div { background-color: Azure  }`]
})
export class ParentComponent {
    name: string = "Tom";
    age: number = 24;
}