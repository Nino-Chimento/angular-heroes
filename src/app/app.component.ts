import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
      </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      margin-bottom: 0;
    }
    nav a {
      padding: 1rem;
      text-decoration: none;
      margin-top: 10px;
      margin-right: 10px;
      display: inline-block;
      background-color: #e8e8e8;
      color: #3d3d3d;
      border-radius: 4px;
    }

    nav a:hover {
      color: white;
      background-color: #42545C;
    }
    nav a.active {
      background-color: black;
    }`
  ],
})
export class AppComponent {
  title = 'angular-tour-of-heros';
}
