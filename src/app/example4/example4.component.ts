import { Component, ViewChild, ElementRef, ViewContainerRef, ComponentRef, ViewRef } from '@angular/core';
import { AComponent } from '@app/example1/a-component';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['../example1/example1.component.sass']
})
export class Example4Component extends AComponent {
  // Static Attribute Use Case
  @ViewChild('uc1', { static: true }) uc1: ElementRef;
  @ViewChild('uc2', { static: false }) uc2: ElementRef; // Default value is False

  // Read Attribute Use Case
  @ViewChild('uc3', { static: true }) uc3: any;
  @ViewChild('uc4', { static: true }) uc4: any;
  @ViewChild('uc5', { read: ElementRef, static: true }) uc5: any;
  @ViewChild('uc6', { read: ViewContainerRef, static: true }) uc6: any;
  @ViewChild('uc7', { read: ViewRef, static: true }) uc7: any; // <--  ViewRef cannot be returned from the DOM and have to be constructed manually.

  constructor() {
    super();

    // Static Attribute Use Case
    this.printRef.push(() => this.uc1);
    this.printRef.push(() => this.uc2);
  }

  // Read Attribute Use Case
  ngOnInit() {
    console.log('   > UC3 ', this.uc3);
    console.log('   > UC4 ', this.uc4);
    console.log('   > UC5 ', this.uc5);
    console.log('   > UC6 ', this.uc6);
    console.log('   > UC7 ', this.uc7);
  }
}
