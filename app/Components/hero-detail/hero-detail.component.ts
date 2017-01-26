// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from 'Services/hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  //input decorator preferred
  @Input()
  hero: Hero;


  constructor(private heroService:HeroService,
              private route: ActivatedRoute,
              private location: Location){

              }


  //keep interface happy
  ngOnInit(): void{
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.update(this.hero)
                    .then(() => this.goBack());
  }

  //look inot the CanDeactivate guard to prevent us going back and OUOT of the applicaiton!
  goBack(): void {
    this.location.back();
  }
}
