import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'binding-twoway-child-comp',
    template: `
        <div class="child-comp">
        <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
        </div>`
})
export class ChildComponent {
    @Input() userName: string;
    @Output() userNameChange = new EventEmitter<string>();

    onNameChange(model: string){
        this.userName = model;
        this.userNameChange.emit(model);
    }
}