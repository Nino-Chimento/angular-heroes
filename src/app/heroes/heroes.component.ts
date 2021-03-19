import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-heroes',
  template: `
    <div class="wrap">
      <div>
        <label id="new-hero">Hero name: </label>
        <input for="new-hero" #heroName />
        <button class="add-button" (click)="add(heroName.value); heroName.value=''">
          Add hero
        </button>
      </div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
          <a routerLink="/detail/{{hero.id}}}">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </a>
          <button class="delete" title="delete hero"
                  (click)="delete(hero)">x</button>
        </li>
      </ul>
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
      position: relative;
      cursor: pointer;
    }

    .heroes li:hover {
      left: .1em;
    }

    .heroes a {
      color: #333;
      text-decoration: none;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
      display: block;
      width: 100%;
    }

    .heroes a:hover {
      color: #2c3a41;
      background-color: #e6e6e6;
    }

    .heroes a:active {
      background-color: #525252;
      color: #fafafa;
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
      min-width: 16px;
      text-align: right;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    `
  ]
})
export class HeroesComponent  implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  heroes: Hero[] = [];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero name=${hero.name}`);
  }
  getHeroes(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
