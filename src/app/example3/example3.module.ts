import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example3Component } from './example3.component';



@NgModule({
  declarations: [Example3Component],
  exports: [Example3Component],
  imports: [
    CommonModule
  ]
})
export class Example3Module { }
