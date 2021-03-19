import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  template: `
    <div class="wrap">
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
    </div>
    <div *ngIf="selectedHero">
      <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    </div>
  `,
  styles: [
    `.heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li:hover {
        color: #2c3a41;
        background-color: #e6e6e6;
        left: .1em;
      }
      .heroes li.selected {
        background-color: black;
        color: white;
      }
      .heroes li.selected:hover {
        background-color: #505050;
        color: white;
      }
      .heroes li.selected:active {
        background-color: black;
        color: white;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color:#405061;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }

      input {
        padding: .5rem;
      }
    `
  ]
})
export class HeroesComponent  implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  selectedHero: Hero;
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getHeroes();
  }
  // tslint:disable-next-line:typedef
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }
}
