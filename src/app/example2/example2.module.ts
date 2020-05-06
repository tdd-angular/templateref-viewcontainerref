import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2Component } from './example2.component';



@NgModule({
  declarations: [Example2Component],
  exports: [Example2Component],
  imports: [
    CommonModule
  ]
})
export class Example2Module { }
