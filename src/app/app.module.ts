import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    BaseComponent,
    ChildComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }