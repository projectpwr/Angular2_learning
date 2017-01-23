import { Component, Input } from '@angular/core';
import { Hero } from 'Entities/hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent {
  //input decorator preferred
  @Input()
  hero: Hero;
}
