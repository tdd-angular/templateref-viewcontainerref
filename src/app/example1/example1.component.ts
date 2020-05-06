import { Component, ViewContainerRef } from '@angular/core';
import { AComponent } from './a-component';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.sass']
})
export class Example1Component extends AComponent {
  constructor(public viewContainerRef: ViewContainerRef) {
    super();
    this.checkView(this.viewContainerRef, 'Host viewContainerRef');
  }
}
