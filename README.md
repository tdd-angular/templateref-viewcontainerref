# TemplateRef and ViewContainerRef

> Everything start with a story... Six Ws (*Who / What / Where / When / How / Why*)

![Angular template schema](./assets/angular_template.svg)

# Parser > @angular/compiler/template_parser

## \<template> *The Content Template element* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.

Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the <template> element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

## \<ng-template> *The Angular Template element*
Angular’s <ng-template> element is not a true Web Component (unlike <template>). It merely mirrors the concepts behind it to allow you to use <ng-template> as it’s intended in the spec. When we compile our code (JiT or AoT), we will see no <ng-template> elements outputted in the DOM. However, this doesn’t mean we can’t use things like Shadow DOM, as they are still completely possible.

This is a very common use of the ngIf/else functionality: we display an alternative loading template while waiting for the data to arrive from the backend.
```html
<div class="list-of-something" *ngIf="isLoaded else loading">
  ...
</div>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
```

## \<ng-container> *Group sibling elements and inject a template*
Angular’s **\<ng-container>** element provides us an element that we can attach a structural directive to a section of the page, without having to create an extra element just for that. So use **\<ng-container>** to group elements when there is no suitable host element for the directive.

There is another major use case for the ng-container directive: it can also provide a placeholder for injecting a template dynamically into the page (see: NgTemplateOutlet and NgComponentOutlet directive).

- [Angular's test for \<ng-container> element](https://github.com/angular/angular/commit/49c9f782ab20ca0da90927ee52a5bf0fe3225344#diff-6148157ee1f259b9c8461f23356f0b85R550)

## \<ng-content>​
Angular’s **\<ng-content>** tag is a placeholder for the external content. It tells Angular where to insert that content.

```html
<!-- Parent Def -->
<my-parent>
    <ng-content></ng-content>
</my-parent>

<!-- ---- -->

<my-parent>
    <span>My custom external content.</span>
</my-parent>
```
# [Render References](https://github.com/angular/angular/blob/master/packages/core/src/render3/STATUS.md#______refs)

## API > @angular/common

NgTemplateOutlet *DIRECTIVE* ([link](https://angular.io/api/common/NgTemplateOutlet))
> Inserts an embedded view from a prepared TemplateRef.

NgComponentOutlet *DIRECTIVE* ([link](https://angular.io/api/common/NgComponentOutlet))
> Instantiates a single Component type and inserts its Host View into current View. NgComponentOutlet provides a declarative approach for dynamic component creation.

Template Context (external parameters) 

```html
<ng-container 
   *ngTemplateOutlet="myTemplate;context:{a: true}">
</ng-container>
```

## API > @angular/core

ViewContainerRef (https://angular.io/api/core/ViewContainerRef)
> Represents a container where one or more views can be attached to a component.

- [view_container_ref](https://github.com/angular/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L35)

TemplateRef (https://angular.io/api/core/TemplateRef)
> Represents an embedded template that can be used to instantiate embedded views. To instantiate embedded views based on a template, use the ViewContainerRef method createEmbeddedView().

- [template_ref](https://github.com/angular/angular/blob/master/packages/core/src/linker/template_ref.ts)

ComponentFactoryResolver (https://angular.io/api/core/ComponentFactoryResolver)
> A simple registry that maps Components to generated ComponentFactory classes that can be used to create instances of components. Use to obtain the factory for a given component type, then use the factory's create() method to create a component of that type.

**And...​**

ElementRef (https://angular.io/api/core/ElementRef)
> A wrapper around a native element inside of a View.

- [element_ref](https://github.com/angular/angular/blob/master/packages/core/src/linker/element_ref.ts)

ChangeDetectionRef (https://angular.io/api/core/ChangeDetectorRef)
> Base class for Angular Views, provides change detection functionality. A change-detection tree collects all views that are to be checked for changes. Use the methods to add and remove views from the tree, initiate change-detection, and explicitly mark views as dirty, meaning that they have changed and need to be rerendered.

ViewRef​ (https://angular.io/api/core/ViewRef)
> Represents an Angular view, specifically the host view that is defined by a component. Also serves as the base class that adds destroy methods for embedded views.

EmbededViewRef​ (https://angular.io/api/core/EmbeddedViewRef)
> Represents an Angular view in a view container. An embedded view can be referenced from a component other than the hosting component whose template defines it, or it can be defined independently by a TemplateRef.

- [view_ref](https://github.com/angular/angular/blob/master/packages/core/src/linker/view_ref.ts)

```typescript
export abstract class ViewRef extends ChangeDetectorRef {
    ...
export abstract class EmbeddedViewRef<C> extends ViewRef {
    ...
```

## Interpolate template #variable

```html
    <!-- view1 will be interpolated by Angular render engine -->
    <button #view1>Simple Button {{checkView(view1, "Native HTML Element")}}</button>
```

- [Angular render3/instructions/storage.ts#L35](https://github.com/angular/angular/blob/d528dedd5007dd7272878bf7a933cb1f3e153ed0/packages/core/src/render3/instructions/storage.ts#L35)

```typescript
export function ɵɵreference<T>(index: number) {
  const contextLView = getContextLView();
  return load<T>(contextLView, index);
}
```

```javascript
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    ...
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Simple Button ", ctx.checkView(_r0, "Native HTML Element"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.checkView(_r1, "Component"));
```

## Sources
- [ng_template_outlet.ts](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_template_outlet.ts)
- [compiler/src/template_parser/template_parser](https://github.com/angular/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L369​)
- [core/src/render3/STATUS.md#______refs​](https://github.com/angular/angular/blob/master/packages/core/src/render3/STATUS.md#______refs​)
- [Properly insert views into ViewContainerRef injected](https://github.com/angular/angular/commit/49c9f782ab20ca0da90927ee52a5bf0fe3225344#diff-6148157ee1f259b9c8461f23356f0b85R549​)
- [exploring-angular-dom-manipulation-techniques-using-viewcontainerref](https://indepth.dev/exploring-angular-dom-manipulation-techniques-using-viewcontainerref/)
- [ElementRef, TemplateRef, ViewRef, ComponentRef and ViewContainerRef](https://gist.github.com/rajaramtt/f2bf4bb420ced6198334622d32695554)
- [dynamic-component-loader](https://angular.io/guide/dynamic-component-loader)
- [angular-ngfor-template-element](https://ultimatecourses.com/blog/angular-ngfor-template-element) Google
- [benefit-of-using-ng-container-vs-template](https://stackoverflow.com/questions/54029503/benefit-of-using-ng-container-vs-template)
- [ng-template or ng-container template](https://www.google.com/search?q=ng-template+or+ng-container+template&oq=ng-template+or+ng-container+template&aqs=chrome..69i57j0l3j69i60.7385j0j4&client=ms-android-xiaomi-rev2&sourceid=chrome-mobile&ie=UTF-8)
- [Angular ng-template, ng-container and ngTemplateOutlet](https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/)
