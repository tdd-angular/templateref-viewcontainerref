import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxComponent } from './sandbox.component';
import { Example1Module } from '@app/example1/example1.module';
import { Example2Module } from '@app/example2/example2.module';
import { Example3Module } from '@app/example3/example3.module';
import { Example4Module } from '@app/example4/example4.module';

@NgModule({
  declarations: [SandboxComponent],
  exports: [SandboxComponent],
  imports: [
    CommonModule,
    Example1Module,
    Example2Module,
    Example3Module,
    Example4Module
  ]
})
export class SandboxModule { }
