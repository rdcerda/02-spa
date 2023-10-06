import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/interfaces';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  template: `
    <h1>Heroes</h1>
    <p>Estos son los super heroes</p>
    <hr />

    <app-heroes-list [heroesList]="heroesList"></app-heroes-list>
  `
})
export class HeroesComponent implements OnInit {
  heroesList!: Heroe[]

  constructor(private _heroesServices: HeroesService) {

  }
  ngOnInit(): void {
    this.heroesList = this._heroesServices.getSuperHeroes()
  }

}

