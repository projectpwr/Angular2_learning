import { Injectable } from '@angular/core';
import { Hero } from '../Entities/hero';
import { HEROES } from '../MockData/mock-heros';

//injector decorator
//always remember open close curly braces on decorators!
@Injectable()
export class HeroService {
  //hero service gets our heros..
  // we dont care where from but having it in a service object abstracts that information !
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }


  getHero(heroId:number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(h => h.id === heroId);
  }

  //func to simulate slow conection
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}


}
