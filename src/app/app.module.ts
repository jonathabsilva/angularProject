import { PlanetasService } from './planetas/planetas.service';
import { NavesService } from './naves-espaciais/naves.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonagensService } from './personagens/personagens.service';
import { ROUTES } from './app.rotas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { NavesEspaciaisComponent } from './naves-espaciais/naves-espaciais.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PersonagensComponent,
    PlanetasComponent,
    NavesEspaciaisComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PersonagensService, HttpClient, NavesService, PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
