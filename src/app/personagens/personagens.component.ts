import { ListaPersonagens } from './listaPersonagens.module';
import { Personagem } from './personagem.module';
import { PersonagensService } from './personagens.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {


  personagens: Personagem[]
  lista: ListaPersonagens
  
  constructor(private personagensService: PersonagensService) { }

  ngOnInit() {
    this.personagensService.listaPersonagens()
    .subscribe(lista => this.lista = lista);
    console.log(this.lista);
    /* this.personagens = this.lista.results;
    console.log(this.lista.results);  */   
  
  }


}
