import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2Component } from './example2.component';
import { SimpleButtonModule } from '@app/example1/simple-button/simple-button.module';
// import { SimpleButtonComponent } from '@app/example1/simple-button/simple-button.component';

@NgModule({
  declarations: [Example2Component],
  exports: [Example2Component],
  imports: [
    CommonModule,
    SimpleButtonModule
  ],
  // entryComponents: [
  //   SimpleButtonComponent
  // ]
})
export class Example2Module { }
