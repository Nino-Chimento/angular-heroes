import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../heroes/hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name | uppercase}} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="Hero name"/>
      </div>
      <button (click)="save()">save</button>
      <button (click)="goBack()">go back</button>
    </div>
  `,
  styles: [`
    label {
      color: #435960;
      font-weight: bold;
    }
    input {
      font-size: 1em;
      padding: .5rem;
    }
    button {
      margin-top: 20px;
      background-color: #eee;
      padding: 1rem;
      border-radius: 4px;
      font-size: 1rem;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    button:disabled {
      background-color: #eee;
      color: #ccc;
      cursor: auto;
    }
  `
  ]
})
export class HeroDetailComponent implements OnInit {
   hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // tslint:disable-next-line:radix
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
