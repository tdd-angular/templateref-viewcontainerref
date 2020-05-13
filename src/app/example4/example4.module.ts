import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example4Component } from './example4.component';
import { SimpleContentComponent } from './simple-content/simple-content.component';



@NgModule({
  declarations: [Example4Component, SimpleContentComponent],
  exports: [Example4Component, SimpleContentComponent],
  imports: [
    CommonModule
  ]
})
export class Example4Module { }
