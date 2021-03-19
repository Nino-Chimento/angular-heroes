import { Injectable } from '@angular/core';
import {HEROES} from './mock-heros';
import {Hero} from './heroes/hero';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}
  getHeros(): Observable<Hero[]> {
   const heroes = of(HEROES);
   return heroes;
  }
}
