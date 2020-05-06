import { Component, OnInit, AfterViewInit, ElementRef, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['../example1/example1.component.sass']
})
export class Example3Component implements OnInit, AfterViewInit {
  // TemplateRef
  // @ViewChild('template1', { read: TemplateRef, static: true }) template1: TemplateRef<HTMLButtonElement>;

  // ViewContainerRef
  // @ViewChild('viewcontainer1', { read: ViewContainerRef, static: true }) viewcontainer1: ViewContainerRef;

  constructor(public viewContainerRef: ViewContainerRef, public hostRef: ElementRef, public compRef: ComponentRef<Example3Component>) {
    console.log('host ElementRef', hostRef);
    console.log('host ViewContainerRef', viewContainerRef);
    console.log('host ComponentRef', compRef);
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    // console.log('TemplateRef', this.template1);
    // console.log('ViewContainerRef', this.viewcontainer1);
  }
}
