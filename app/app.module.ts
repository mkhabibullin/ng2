import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { ChildComponent } from './child.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// Определение маршрутов http://metanit.com/web/angular2/7.1.php
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
]; 

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, ChildComponent, HomeComponent, AboutComponent, NotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }