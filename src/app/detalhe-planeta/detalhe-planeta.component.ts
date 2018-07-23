import { PersonagemService } from './../detalhe/personagem.service';
import { Personagem } from './../personagens/personagem.module';
import { PlanetaService } from './planeta.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Planeta } from '../planetas/planeta.module';
import { Filme } from '../personagens/filme.module';

@Component({
  selector: 'app-detalhe-planeta',
  templateUrl: './detalhe-planeta.component.html',
  styleUrls: ['./detalhe-planeta.component.css']
})
export class DetalhePlanetaComponent implements OnInit {

  planeta: Planeta
  z: string;
  residenteTemp: Array<Personagem>=[]
  planetaFilmesTemp: Array<Filme>=[]
  habGetFilme: number = 0;
  habGetPersonagem: number = 0;
  vezes: number = 2;

  constructor(private route: ActivatedRoute, private planetaService: PlanetaService) { 
    this.route.params.subscribe(res => this.z = res.id);
  }

  ngOnInit() {
    
    this.planetaService.detalharPlaneta(this.z)
    .subscribe(planeta => this.planeta = planeta);
  }

  getResidentes():boolean{
    console.log(this.residenteTemp);
    if(this.habGetPersonagem<this.vezes){
      
     try{
       for(let i=0;i<this.planeta.residents.length; i++){
          this.planetaService.detalharResidente(this.planeta.residents[i])
          .subscribe(personagemTemp => this.residenteTemp[i] = personagemTemp);
        }
        
      } catch(e){
        console.log(e);
      }
    }
    this.habGetPersonagem++;
    return true;
  }

  residentesVazio(){
    console.log("Residente vazio chamado");
    return (this.residenteTemp.length==0)
  }

  getPlanetaFilmes():boolean{
    console.log(this.planetaFilmesTemp);
    if(this.habGetFilme < this.vezes){
      
     try{
       for(let i=0;i<this.planeta.films.length; i++){
          this.planetaService.detalharPlanetaFilme(this.planeta.films[i])
          .subscribe(filme => this.planetaFilmesTemp[i] = filme);
        }
        
      } catch(e){
        console.log(e);
      }
    }
    this.habGetFilme++;
    return true;
  }

  planetaFilmesVazio(){
    
    return (this.planetaFilmesTemp.length==0)
  }

}
