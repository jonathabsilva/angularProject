import { API_PLANETA } from './../app.api';
import { ListaPlanetas } from './listaPlanetas.module';
import { PlanetasService } from './planetas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  
  
  listaPlanetas: ListaPlanetas

  constructor(private planetasService: PlanetasService) { }

  ngOnInit() {
    this.planetasService.listaPersonagens(API_PLANETA)
    .subscribe(listaPlanetas => this.listaPlanetas = listaPlanetas);
    
  }

  proximo(){
    this.planetasService.listaPersonagens(this.listaPlanetas.next)
    .subscribe(listaPlanetas => this.listaPlanetas = listaPlanetas);
    
  }

  voltar(){
    this.planetasService.listaPersonagens(this.listaPlanetas.previous)
    .subscribe(listaPlanetas => this.listaPlanetas = listaPlanetas);
    
  }

}
