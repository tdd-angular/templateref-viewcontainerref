import { Component, AfterViewInit, ElementRef, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ViewChild, Injector, TemplateRef } from '@angular/core';
import { SimpleButtonComponent } from '@app/example1/simple-button/simple-button.component';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['../example1/example1.component.sass']
})
export class Example3Component implements AfterViewInit {
  // TemplateRef
  @ViewChild('template1', { read: TemplateRef, static: true }) template1: TemplateRef<ElementRef>;

  // ViewContainerRef
  @ViewChild('viewcontainer1', { read: ViewContainerRef, static: true }) viewContainer1: ViewContainerRef;
  @ViewChild('viewcontainer2', { read: ViewContainerRef, static: true }) viewContainer2: ViewContainerRef;

  constructor(private injector: Injector, public viewContainerRef: ViewContainerRef, public hostRef: ElementRef, public compFactoryResolver: ComponentFactoryResolver) {
    console.log('#host ElementRef', hostRef);
    console.log('#host ViewContainerRef', viewContainerRef);
    console.log('#host compFactoryResolver', this.compFactoryResolver);
  }

  ngAfterViewInit() {
    console.log('  > TemplateRef', this.template1);
    console.log('  > ViewContainerRef', this.viewContainer1);
  }

  /**
   * Manual Template Creation
   */
  public CreateTemplate() {
    // Create and Get EmbeddedViewRef
    const view = this.template1.createEmbeddedView(null);
    this.viewContainer1.insert(view);
  }

  /**
   * Automated Template Creation
   */
  public CreateTemplate2() {
    this.viewContainer1.createEmbeddedView(this.template1);
  }

  /**
   * Manual Component Creation
   */
  public CreateComponent() {
    const componentFactory = this.compFactoryResolver.resolveComponentFactory(SimpleButtonComponent);

    // Create and Get ComponentRef
    const componentRef = componentFactory.create(this.injector);

    // Get ViewRef
    const view = componentRef.hostView;

    // ViewContainerRef Add View
    this.viewContainer1.insert(view);
  }

  /**
   *  Automated Component Creation
   */
  public CreateComponent2() {
    const componentFactory = this.compFactoryResolver.resolveComponentFactory(SimpleButtonComponent);
    this.viewContainer1.createComponent(componentFactory);
  }

  public Clear(vcRef: ViewContainerRef) {
    vcRef.clear();
    // this.viewContainer1.clear();
  }

  public Move() {
    while (this.viewContainer1.length > 0) {
      const view = this.viewContainer1.detach(0);
      this.viewContainer2.insert(view);
    }
  }
}
