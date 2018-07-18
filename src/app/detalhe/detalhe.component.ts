
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
   
  }

  ngOnInit() {
    
      this.personagemService.detalharPersonagem(this.x)
      .subscribe(personagem => this.personagem = personagem);
    

  }

}
