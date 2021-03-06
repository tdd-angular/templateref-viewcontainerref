
import { OnInit, AfterViewInit, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
export abstract class AComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    protected printRef = [] as (() => any)[];

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.
        console.log('ngOnChanges', changes);
        this.print();
    }

    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        console.log('ngOnInit');
        this.print();
    }

    ngDoCheck(): void {
        // Called every time that the input properties of a component or a directive are checked. 
        // Use it to extend change detection by performing a custom check.
        // Add 'implements DoCheck' to the class.
        console.log('ngDoCheck');
        this.print();
    }

    ngAfterContentInit(): void {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        console.log('ngAfterContentInit');
        this.print();
    }

    ngAfterContentChecked(): void {
        // Called after every check of the component's or directive's content.
        // Add 'implements AfterContentChecked' to the class.
        console.log('ngAfterContentChecked');
        this.print();
    }

    ngAfterViewInit(): void {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        console.log('ngAfterViewInit');
        this.print();
    }

    ngAfterViewChecked(): void {
        // Called after every check of the component's view. Applies to components only.
        // Add 'implements AfterViewChecked' to the class.
        console.log('ngAfterViewChecked');
        this.print();
    }

    ngOnDestroy(): void {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        console.log('ngOnDestroy');
        this.print();
    }

    cache = {};
    checkView(tag: any, title = 'null') {
        if (this.cache[title] === undefined) {
            console.log(`   **** ${title} ****`);
            console.log('   > ', tag);
            this.cache[title] = true;
        }
    }

    private print() {
        for (const ref of this.printRef) {
            console.log('   > ', ref());
        }
    }
}
