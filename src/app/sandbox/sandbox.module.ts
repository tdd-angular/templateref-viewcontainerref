import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';
import { Example1Module } from '../example1/example1.module';



@NgModule({
  declarations: [SandboxComponent],
  exports: [SandboxComponent],
  imports: [
    CommonModule,
    Example1Module
  ]
})
export class SandboxModule { }
