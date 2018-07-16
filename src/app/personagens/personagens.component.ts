
import { Personagem } from './personagem/personagem.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  personagens: Personagem[]=[
    {name : "Luki", mass: 75, height: 177},
    {name : "Leia",  mass: 62, height: 165},
    {name : "Han Solo",  mass: 87, height: 179},

  ]
  constructor() { }

  ngOnInit() {
  }

  clicked(x: string){
    let chave: boolean = true;
    console.log(x);
  }

}
