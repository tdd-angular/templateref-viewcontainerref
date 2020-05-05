# TemplateRef and ViewContainerRef

## API > @angular/core
ViewContainerRef (https://angular.io/api/core/ViewContainerRef)
> Represents a container where one or more views can be attached to a component.

TemplateRef (https://angular.io/api/core/TemplateRef)
> Represents an embedded template that can be used to instantiate embedded views. To instantiate embedded views based on a template, use the ViewContainerRef method createEmbeddedView().

ComponentFactoryResolver (https://angular.io/api/core/ComponentFactoryResolver)
> A simple registry that maps Components to generated ComponentFactory classes that can be used to create instances of components. Use to obtain the factory for a given component type, then use the factory's create() method to create a component of that type.

## <template>: The Content Template element (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
> The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
>
> Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the <template> element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

## <ng-template>

> Angular’s <ng-template> element is not a true Web Component (unlike <template>). It merely mirrors the concepts behind it to allow you to use <ng-template> as it’s intended in the spec. When we compile our code (JiT or AoT), we will see no <ng-template> elements outputted in the DOM. However, this doesn’t mean we can’t use things like Shadow DOM, as they are still completely possible.

# Sources
- [dynamic-component-loader](https://angular.io/guide/dynamic-component-loader)
- [angular-ngfor-template-element](https://ultimatecourses.com/blog/angular-ngfor-template-element)
- [benefit-of-using-ng-container-vs-template](https://stackoverflow.com/questions/54029503/benefit-of-using-ng-container-vs-template)

- https://www.google.com/search?q=ng-template+or+ng-container+template&oq=ng-template+or+ng-container+template&aqs=chrome..69i57j0l3j69i60.7385j0j4&client=ms-android-xiaomi-rev2&sourceid=chrome-mobile&ie=UTF-8


## Angular ng-template, ng-container and ngTemplateOutlet - The Complete Guide To Angular Templates (Last Updated: 24 APRIL 2020 )
- https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/

## Sources

- [ng_template_outlet.ts](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_template_outlet.ts)
- Ng_template compiler : https://github.com/angular/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L369​
- https://angular.io/api/common/NgTemplateOutlet ​
- https://angular.io/api/common/NgComponentOutlet ​
- https://github.com/angular/angular/blob/master/packages/core/src/render3/STATUS.md#______refs​
- [Properly insert views into ViewContainerRef injected](https://github.com/angular/angular/commit/49c9f782ab20ca0da90927ee52a5bf0fe3225344#diff-6148157ee1f259b9c8461f23356f0b85R549​)
- [exploring-angular-dom-manipulation-techniques-using-viewcontainerref](https://indepth.dev/exploring-angular-dom-manipulation-techniques-using-viewcontainerref/)

## [Refs](https://github.com/angular/angular/blob/master/packages/core/src/render3/STATUS.md#______refs)
ViewContainerRef (https://angular.io/api/core/ViewContainerRef)
> Represents a container where one or more views can be attached to a component.

TemplateRef (https://angular.io/api/core/TemplateRef)
> Represents an embedded template that can be used to instantiate embedded views. To instantiate embedded views based on a template, use the ViewContainerRef method createEmbeddedView().

And...​

EmbededViewRef​ (https://angular.io/api/core/EmbeddedViewRef)
> Represents an Angular view in a view container. An embedded view can be referenced from a component other than the hosting component whose template defines it, or it can be defined independently by a TemplateRef.

ViewRef​ (https://angular.io/api/core/ViewRef)
> Represents an Angular view, specifically the host view that is defined by a component. Also serves as the base class that adds destroy methods for embedded views.

ElementRef (https://angular.io/api/core/ElementRef)
> A wrapper around a native element inside of a View.



// TODO​
<ng-template> TemplateRef​
<ng-container> NgTemplateOutlet & NgComponentOutlet + Context (ext param) & ViewContainerRef​

- Create a factory of something to show the purpose.​

Angular Sources:​
<ng-content>​