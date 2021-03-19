import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <app-heroes></app-heroes>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
        h1 {
        color: #369;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;
      }
      h2, h3 {
        color: #444;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
      }
      body {
        margin: 2em;
      }
      body, input[type="text"], button {
        color: #333;
        font-family: Cambria, Georgia, serif;
      }
      * {
        font-family: Arial, Helvetica, sans-serif;
      }`
  ],
})
export class AppComponent {
  title = 'angular-tour-of-heros';
}
