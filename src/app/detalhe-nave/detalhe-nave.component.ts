import { Filme } from './../personagens/filme.module';
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
  habGetFilmes: number = 0
  vezes: number = 2
  pilotosTemp: Array<Personagem> = []
  filmesTemp: Array<Filme> = []

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
          console.log("PilotosChamado!");
          for(let i=0;i<this.nave.pilots.length;i++){
            this.naveService.pegarPiloto(this.nave.pilots[i])
            .subscribe(piloto => this.pilotosTemp[i] = piloto);       
          } 
          console.log(this.pilotosTemp);
        }
      }
    } catch(e){
      console.log(e);
     
    }    }
    this.habGetPilotos++;
    return true;  
  }

  filmesVazio(): boolean{
    
    return (this.filmesTemp.length==0);
  }

  getFilmes(): boolean{
    if(this.habGetFilmes < this.vezes){
     
    try{
      if(this.nave !== undefined){
        
        if(this.nave.films.length ){
          
          for(let i=0;i<this.nave.films.length;i++){
            this.naveService.pergarFilmes(this.nave.films[i])
            .subscribe(filme => this.filmesTemp[i] = filme);       
          } 
          console.log(this.filmesTemp);
        }
      }
    } catch(e){
      console.log(e);
     
    }    }
    this.habGetFilmes++;
    return true;  
  }

}
