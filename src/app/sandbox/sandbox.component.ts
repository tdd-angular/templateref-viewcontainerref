import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styles: ['']
})
export class SandboxComponent {
  constructor() { }

  cache = {};
  checkView(tag: any, title = 'null') {
      if (this.cache[title] === undefined) {
          console.log(`   **** ${title} ****`);
          console.log('   > ', tag);
          this.cache[title] = true;
      }
  }
}
