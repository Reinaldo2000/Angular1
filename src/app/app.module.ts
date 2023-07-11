import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenst/shared/navbar/navbar.component';
import { HomeComponent } from './componenst/home/home.component';
import { HeroesComponent } from './componenst/heroes/heroes.component';
import { AboutComponent } from './componenst/about/about.component';


//importar servicio
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './componenst/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
