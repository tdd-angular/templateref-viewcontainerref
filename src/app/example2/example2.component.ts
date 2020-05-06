import { Component } from '@angular/core';
import { SimpleButtonComponent } from '@app/example1/simple-button/simple-button.component';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['../example1/example1.component.sass']
})
export class Example2Component {
  // This field is necessary to expose SimpleButtonComponent to the template.
  SimpleButtonComponent = SimpleButtonComponent;

  constructor() { }
}
