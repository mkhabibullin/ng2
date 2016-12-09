import { Component, Input, Output, EventEmitter ,
    OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit} from '@angular/core';

@Component({
    selector: 'binding-twoway-child-comp',
    template: `
        <div class="child-comp">
        <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
        </div>`
})
export class ChildComponent implements OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit {
    @Input() userName: string;
    @Output() userNameChange = new EventEmitter<string>();
    count:number=1;

    onNameChange(model: string){
        this.userName = model;
        this.userNameChange.emit(model);
    }

    ngOnInit() {
       
      this.log(`ngOnInit`);
    }
    ngOnChanges() {
       
      this.log(`OnChanges`);
    }
    ngDoCheck() {
       
      this.log(`ngDoCheck`);
    }
    ngAfterViewInit() {
       
      this.log(`ngAfterViewInit`);
    }
    ngAfterViewChecked() {
       
      this.log(`ngAfterViewChecked`);
    }
    ngAfterContentInit() {
       
      this.log(`ngAfterContentInit`);
    }
    ngAfterContentChecked() {
       
      this.log(`ngAfterContentChecked`);
    }
 
    private log(msg: string) {
        console.log(this.count + ". " + msg);
        this.count++;
    }
}