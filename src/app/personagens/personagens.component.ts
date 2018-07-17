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

  //personagens: Personagem[]
  personagem: Personagem
  lista: ListaPersonagens
  
  constructor(private personagensService: PersonagensService) { }

  ngOnInit() {
    this.personagensService.personagens()
    .subscribe(personagem => this.personagem = personagem);
    
    
    console.log(this.personagem);
    
  }
 

}
