import { Component } from '@angular/core';

@Component({
    selector: 'custom-counter-parent-comp',
    templateUrl: 'app/Binding/TwoWaySetters/parent.component.html'
})
export class ParentCounterComponent {
    counterValue = 5;
}