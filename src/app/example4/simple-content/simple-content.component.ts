import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-content',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class SimpleContentComponent {
  constructor() { }
}
