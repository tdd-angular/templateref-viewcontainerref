import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1.component';
import { SimpleButtonModule } from './simple-button/simple-button.module';



@NgModule({
  declarations: [Example1Component],
  exports: [Example1Component],
  imports: [
    CommonModule,
    SimpleButtonModule
  ]
})
export class Example1Module { }
