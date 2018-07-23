import { Filme } from '../personagens/filme.module';
import { Nave } from './../naves.module';
import { PlanetaService } from './../detalhe-planeta/planeta.service';
import { Planeta } from './../planetas/planeta.module';

import { PersonagemService } from './personagem.service';
import { Component, OnInit, SimpleChange, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personagem } from '../personagens/personagem.module';
import { Veiculo } from '../personagens/veiculo.module';
import { Especie } from '../personagens/especie.module';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit, OnChanges, DoCheck {
  
  personagem: Personagem
  mundo: Planeta
  planetaService: PlanetaService
  chave: boolean
  x: string;
  mensagem: boolean
  nomesNave: Array<string> =[]
  naveTemp: Array<Nave> = []
  veiculoTemp: Array<Veiculo> = []
  nomesVeiculo: Array<string> = []
  filmeTemp: Array<Filme> = []
  nomesFilme: Array<string> = []
  especieTemp: Array<Especie> = []
  habGetNave: number = 0;
  habGetFilme: number = 0;
  habGetEspecies: number = 0;
  habGetMundo: number = 0;
  habGetVeiculos: number = 0;
  vezes: number =  2;

  constructor(private route: ActivatedRoute, private personagemService: PersonagemService) { 
    this.route.params.subscribe(res => this.x = res.id);
   
  }

  ngOnInit() {
    
      this.personagemService.detalharPersonagem(this.x)
      .subscribe(personagem => this.personagem = personagem);
      this.chave = true;
      this.mensagem = false;
  }

  ngDoCheck(){
    console.log("ngDoCheck ativado!");    
  }

  ngAfterContentInit(){
    console.log("Chamou o ngAfterContentInit");
    
  }	

  ngAfterViewInit(){
    console.log("Chamou o ngAfterViewInit");
    
    this.getTudao();
  }

  ngAfterViewChecked(){
    console.log("Chamou ngAfterViewCheked");
  }


  ngOnChanges(changes : SimpleChanges){
    console.log("Usando o ngOnChanges");
    console.log(changes.previousValue);
    console.log(changes.currentValue);

  }

  getTudao(): boolean{
      console.log("Chamou getTudao()");
      
      //Pegando o planeta
      //this.getMundo();

      // Pegando o nome das naves
      this.getNaves();

      // Pegando o nome dos filmes
      this.getFilmes();
      return true;
  }

  getNaves(): boolean{
    if(this.habGetNave<this.vezes){
    try{
      if(this.personagem !== undefined){
        if(this.personagem.starships.length){
          for(let i=0;i<this.personagem.starships.length;i++){
            this.personagemService.pegarNave(this.personagem.starships[i])
            .subscribe(naveTemp => this.naveTemp[i] = naveTemp);       
          }   
          
          console.log(this.naveTemp);
          if(this.naveTemp.length){
            for(let i=0; i<this.naveTemp.length;i++){
              this.nomesNave[i]=this.naveTemp[i].name;
            }
          }
          if(!this.naveTemp.length){
            
          }
        }
      }
    } catch(e){
      console.log(e);
     
    }
    this.habGetNave++;
  }
    return true;         
  }

  getFilmes(): boolean{
    if(this.habGetFilme < this.vezes){
    try{
      if(this.personagem !== undefined){
        console.log("getFilmes() chamado!");
        for(let i=0;i<this.personagem.films.length;i++){
          this.personagemService.pergarFilmes(this.personagem.films[i])
          .subscribe(film => this.filmeTemp[i] = film);       
        }   

        console.log(this.filmeTemp);       
      }
    } catch(e){
      console.log(e);
    }
    this.habGetFilme++;
  }

    return true;         
  }


  getMundo(): boolean{
    if(this.habGetMundo<this.vezes){
    if(this.personagem !== undefined){
      this.personagemService.pegarPlaneta(this.personagem.homeworld)
      .subscribe(mundo => this.mundo = mundo);
    }
      if(this.personagem == undefined){
        console.log("Personagem ainda não foi definido!");        
      }
    }
    this.habGetMundo++;
    return true;
  }
  
  filmeVazio(): boolean{
    return this.filmeTemp.length==0;
  }


  getVeiculos(): boolean{
    if(this.habGetVeiculos < this.vezes){
    try{
      if(this.personagem !== undefined){
        if(this.personagem.vehicles.length ){
          for(let i=0;i<this.personagem.vehicles.length;i++){
            this.personagemService.pegarVeiculo(this.personagem.vehicles[i])
            .subscribe(veiculoTemp => this.veiculoTemp[i] = veiculoTemp);       
          }   
        }
      }
    } catch(e){
      console.log(e);
     
    }
  }
    this.habGetVeiculos++;    
    return true;  
  }
  
  veiculosVazio(): boolean{
    console.log(this.veiculoTemp);
    return (this.veiculoTemp.length == 0);
  }

  naveVazio(): boolean{
    console.log(this.naveTemp);
    return (this.naveTemp.length == 0);
  }

  especieVazia(): boolean{
    console.log(this.especieTemp);
    return (this.especieTemp.length==0);
  }

  getEspecies(): boolean{
    if(this.habGetEspecies < this.vezes){
    try{
      if(this.personagem !== undefined){
        if(this.personagem.species.length ){
          for(let i=0;i<this.personagem.species.length;i++){
            this.personagemService.pegarEspecie(this.personagem.species[i])
            .subscribe(especieTemp => this.especieTemp[i] = especieTemp);       
          }   
        }
      }
    } catch(e){
      console.log(e);
     
    }    }
    this.habGetEspecies++;
    return true;  
  }


}
