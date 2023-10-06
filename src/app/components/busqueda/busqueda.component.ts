import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/interfaces';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-busqueda',
  template: `
    <h1>Busqueda</h1>
    <p>
      Resultados para <strong>{{ search }}</strong>
    </p>
    <hr />
    <app-heroes-list [heroesList]="heroesList"></app-heroes-list>
  `
})
export class BusquedaComponent {

  heroesList: Heroe[] = []
  search!: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.search = params['search']
      this.heroesList = this.heroesService.buscarHeroes(params['search'])
    })
  }

}
