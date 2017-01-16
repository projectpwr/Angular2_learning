import { Component, Input } from '@angular/core';
import { Hero } from '@Entities/hero';

@Component({
  moduleId: module.Id,
  selector: 'my-hero-detail',
  template: 'hero-detail.html'
})
export class HeroDetailComponent {
  //input decorator preferred
  @Input()
  hero: Hero;
}
