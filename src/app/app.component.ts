import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `
  <h2>HEROES</h2>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }