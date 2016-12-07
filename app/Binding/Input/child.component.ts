import { Input, Component } from '@angular/core';

@Component({
    selector: 'binding-input-child-comp',
    template: `<div>
                <p>Имя пользователя {{userName}}</p>
                <p>Возраст пользователя {{userAge}}</p>
              </div>`,
    styles: [`div { background-color: WhiteSmoke }`]
})
export class ChildComponent{
    @Input() userName: string;
    @Input() userAge: number;
}