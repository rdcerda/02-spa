import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/interfaces';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html'
})


export class HeroesListComponent {
  @Input() heroesList!: Heroe[];

  constructor(private router: Router) {

  }

  verHeroe(idHeroe: number) {
    this.router.navigate(['/heroe', idHeroe]);
  }

}
