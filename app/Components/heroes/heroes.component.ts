import { OnInit, Component } from '@angular/core';
import { Hero } from 'Entities/hero';
import { HeroService } from 'Services/hero.service';
import { Router }   from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl:'heroes.component.html',
    styleUrls: ['heroes.component.css']
})


export class HeroesComponent implements OnInit{
  //properties
  heroes: Hero[];
  selectedHero:Hero;

  //constructor
  constructor(private heroService: HeroService,
              private router: Router) {

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

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


}
