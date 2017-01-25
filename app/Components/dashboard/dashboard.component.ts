import { Component, OnInit } from '@angular/core';

import { Hero } from 'Entities/hero';
import { HeroService } from 'Services/hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  //properties
  heroes: Hero[] = [];

  constructor(private heroService:HeroService){

  }

  //fulfill contract or OnInit interface...
  ngOnInit(){
    //promise contract from our service (it will return it when its ready)
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
