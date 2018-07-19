import { PlanetaService } from './../detalhe-planeta/planeta.service';
import { Planeta } from './../planetas/planeta.module';

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
  mundo: Planeta
  planetaService: PlanetaService

  x: string;

  constructor(private route: ActivatedRoute, private personagemService: PersonagemService) { 
    this.route.params.subscribe(res => this.x = res.id);
   
  }

  ngOnInit() {
    
      this.personagemService.detalharPersonagem(this.x)
      .subscribe(personagem => this.personagem = personagem);
  }

  getMundo(){
    
      this.personagemService.pegarPlaneta(this.personagem.homeworld)
      .subscribe(mundo => this.mundo = mundo);
      console.log(this.mundo);

  }




}
