import { Component, ViewEncapsulation, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { AComponent } from './a-component';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.sass']
})
export class Example1Component extends AComponent {

  // TemplateRef
  // @ViewChild('view1', { read: TemplateRef, static: true }) template1: TemplateRef<HTMLButtonElement>;
  // @ViewChild('view2', { read: TemplateRef, static: true }) template2: TemplateRef<SimpleButtonComponent>;
  // @ViewChild('view3', { read: TemplateRef, static: false }) template3: TemplateRef<SimpleButtonComponent>;

  // ViewContainerRef
  // @ViewChild('view1', { read: ViewContainerRef, static: true }) viewRef1: ViewContainerRef;
  // @ViewChild('view2', { read: ViewContainerRef, static: true }) viewRef2: ViewContainerRef;
  // @ViewChild('view3', { read: ViewContainerRef, static: false }) viewRef3: ViewContainerRef;

  constructor(public viewContainerRef: ViewContainerRef) {
    super();
    this.checkView(this.viewContainerRef, 'Host viewContainerRef');
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    // console.log('TemplateRef n°1', this.template1);
    // console.log('TemplateRef n°2', this.template2);
    // console.log('TemplateRef n°3', this.template3);


    // console.log('ViewContainerRef n°1', this.viewRef1);
    // console.log('ViewContainerRef n°2', this.viewRef2);
    // console.log('ViewContainerRef n°3', this.viewRef3);
  }
}
