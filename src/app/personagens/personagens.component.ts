import { API } from './../app.api';
import { ListaPersonagens } from './listaPersonagens.module';
import { PersonagensService } from './personagens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {

  lista: ListaPersonagens
    
  constructor(private personagensService: PersonagensService) { }

  ngOnInit() {
    this.personagensService.listaPersonagens(API)
    .subscribe(lista => this.lista = lista);    
  }

  proximo(){
    this.personagensService.listaPersonagens(this.lista.next)
    .subscribe(lista => this.lista = lista);
  }

  voltar(){
    this.personagensService.listaPersonagens(this.lista.previous)
    .subscribe(lista => this.lista = lista);
  }

}
