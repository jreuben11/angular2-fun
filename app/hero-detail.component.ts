import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
  inputs: ['hero']

})
export class HeroDetailComponent implements OnInit{
  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  hero: Hero;

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }
}
