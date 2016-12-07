import { Input, Component } from '@angular/core';

@Component({
    selector: 'binding-input-child-comp',
    template: `<div>
                <p>Имя пользователя {{userName}}</p>
                <p>Возраст пользователя {{userAge}}</p>
              </div>`,
    styles: [`div { background-color: WhiteSmoke }`]
})
export class ChildComponent {
    @Input() userName: string;
    
    _userAge: number;
      
    @Input()
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
  }
  get userAge() { return this._userAge; }
}