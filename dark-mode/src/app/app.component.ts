import { Component } from '@angular/core';

@Component({
  selector: 'rng-root',
  template: `
    <rng-header> </rng-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
