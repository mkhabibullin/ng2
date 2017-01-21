import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { ChildComponent } from './child.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// Binding
import { ChildComponent as bindingImputChComp} from './Binding/input/child.component'; 
import { ParentComponent as bindingImputPComp} from './Binding/input/parent.component';
import { ChildComponent as bindingEventChComp} from './Binding/Event/child.component';
import { ParentComponent as bindingEventPComp} from './Binding/Event/parent.component';
import { ChildComponent as bindingTwowayChComp } from './Binding/TwoWay/child.component';
import { ParentComponent as bindingTwowayPComp } from './Binding/TwoWay/parent.component';
import { ChildComponent as localVarChComp } from './LocalVar/child.component';
import { ParentComponent as localVarPComp } from './LocalVar/parent.component';

// Определение маршрутов http://metanit.com/web/angular2/7.1.php
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'bindInput', component: bindingImputPComp },
    { path: 'bindEvent', component: bindingEventPComp },
    { path: 'bindTwoWay', component: bindingTwowayPComp },
    { path: 'localVar', component: localVarPComp },
    { path: '**', component: NotFoundComponent }
]; 

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, ChildComponent, HomeComponent, AboutComponent, NotFoundComponent, 
                    bindingImputChComp, bindingImputPComp, bindingEventChComp, bindingEventPComp,
                    bindingTwowayPComp, bindingTwowayChComp, localVarPComp, localVarChComp ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }