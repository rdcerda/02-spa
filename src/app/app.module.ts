import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// rutas
import { APP_ROUTING } from './app.routes'

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroesListComponent } from './components/shared/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    TruncatePipe,
    BusquedaComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
