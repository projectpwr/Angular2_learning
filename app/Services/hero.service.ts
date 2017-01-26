import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../Entities/hero';
import { HEROES } from '../MockData/mock-heros';

//injector decorator
//always remember open close curly braces on decorators!
@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes'; //url to web api
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http){ }



  update(theHero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${theHero.id}`;
    //put must take a url, payload and headers
    return this.http
      .put(url, JSON.stringify(theHero), {headers: this.headers})
      .toPromise()
      .then(() => theHero)
      .catch(this.handleError);
  }

  create(heroName: string): Promise<Hero> {

    //post must take a url, payload and headers
    return this.http
      .post(this.heroesUrl, JSON.stringify( { name: heroName } ), {headers: this.headers})
      .toPromise()
      .then(result => result.json().data)
      .catch(this.handleError);
  }

  delete(deadHeroId: number): Promise<void> {
    const url = `${this.heroesUrl}/${deadHeroId}`;

    //delete just takes url and headers
    return this.http.delete(url, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
  }


  //hero service gets our heros..
  // we dont care where from but having it in a service object abstracts that information !
  getStaticHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getStaticHero(heroId:number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(h => h.id === heroId);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
  }

  getHero(heroId:number): Promise<Hero> {
    //for URLS remember the ` character...dont use single quotes '
    const url = `${this.heroesUrl}/${heroId}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Hero)
                    .catch(this.handleError);
  }






  //func to simulate slow conection
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });



  /* private methods */

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error); //just for demo...implement diferent error handling in real cases
    return Promise.reject(error.message || error);
  }
}


}
