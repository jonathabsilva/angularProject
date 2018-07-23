import { ActivatedRoute } from '@angular/router';
import { NaveService } from './nave.service';
import { Component, OnInit } from '@angular/core';
import { Nave } from '../naves.module';
import { Personagem } from '../personagens/personagem.module';

@Component({
  selector: 'app-detalhe-nave',
  templateUrl: './detalhe-nave.component.html',
  styleUrls: ['./detalhe-nave.component.css']
})
export class DetalheNaveComponent implements OnInit {

  nave: Nave
  y: string
  habGetPilotos: number = 0
  vezes: number = 2;
  pilotosTemp: Array<Personagem>

  constructor(private route: ActivatedRoute, private naveService: NaveService) {
    this.route.params.subscribe(res => this.y = res.id);
   }

  ngOnInit() {
    this.naveService.detalharNave(this.y)
    .subscribe(nave => this.nave = nave);
  }

  pilotosVazio(): boolean{
    console.log(this.pilotosTemp);
    return (this.pilotosTemp.length==0);
  }

  getPilotos(): boolean{
    if(this.habGetPilotos < this.vezes){
    try{
      if(this.nave !== undefined){
        if(this.nave.pilots.length ){
          for(let i=0;i<this.nave.pilots.length;i++){
            this.naveService.pegarPiloto(this.nave.pilots[i])
            .subscribe(piloto => this.pilotosTemp[i] = piloto);       
          }   
        }
      }
    } catch(e){
      console.log(e);
     
    }    }
    this.habGetPilotos++;
    return true;  
  }

}
