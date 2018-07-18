import { API } from './../app.api';
import { PersonagemService } from './personagem.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personagem } from '../personagens/personagem.module';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  
  personagem: Personagem
  x: string;

  constructor(private route: ActivatedRoute, private personagemService: PersonagemService) { 
    this.route.params.subscribe(res => this.x = res.id);
    this.x = this.x+'/';
  }

  ngOnInit() {
    console.log(API+this.x);
    this.personagemService.detalharPersonagem(API+this.x)
    .subscribe(personagem => this.personagem = personagem);
    console.log(this.personagem);
  }

}
