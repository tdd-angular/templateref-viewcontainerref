import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  template: '<button>Simple Button</button> <ng-content></ng-content>',
  styles: []
})
export class SimpleButtonComponent {
  constructor() { }
}
