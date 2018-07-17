import { PersonagemService } from './personagem.service';
import { Personagem } from './../personagem.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {
 
  personagem: Personagem  

  constructor(private personagemService: PersonagemService) { }

  ngOnInit() {
    this.personagemService.personagem()
    .subscribe(personagem => this.personagem = personagem);
     console.log(this.personagem);
  }
}
