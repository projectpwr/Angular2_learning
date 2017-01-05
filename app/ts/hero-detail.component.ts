import { Component, Input } from '@angular/core';
import { Hero } from './Entities/hero';

@Component({
  selector: 'my-hero-detail',
  template: `<div style="border: solid 1px red; padding:10px;" *ngIf="hero">
    <h2>Hero: <b>{{hero.name}}</b> details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>`
})
export class HeroDetailComponent {
  //input decorator preferred
  @Input()
  hero: Hero;
}
