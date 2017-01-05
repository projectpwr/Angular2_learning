import { OnInit, Component } from '@angular/core';
import { Hero } from './Entities/hero';
import { HeroService } from './Services/hero.service';

@Component({
    selector: 'my-app',
    providers: [HeroService],
    template:`
    <h1>{{title}}</h1>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    <h2>My Heroes</h2>
    <ul class="heroes">
    <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)" >
    <span class="badge" >{{hero.id}}</span> {{hero.name}}
    </li>

    </ul>

  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
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
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]



})


export class AppComponent implements OnInit{
  //properties
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero:Hero;

  //constructor
  constructor(private heroService: HeroService) {

  };

  //methods
  //we must implement ngOnInit to satisfy our OnInit interface
  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    //act on the promise, call the eroService, then when it calls bac assign its result (h in this cae) to this.heroes
    this.heroService.getHeroes().then(h =>
      this.heroes = h);
  }
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  };
}
