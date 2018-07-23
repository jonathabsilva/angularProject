import { Especie } from './../personagens/especie.module';
import { Veiculo } from './../personagens/veiculo.module';
import { Nave } from './../naves.module';
import { Personagem } from './../personagens/personagem.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planeta } from '../planetas/planeta.module';
import { Filme } from '../personagens/filme.module';


@Injectable()
export class PersonagemService{
    
    
    constructor(private http: HttpClient){}

    detalharPersonagem(x: string): Observable<Personagem>{

        return this.http.get<Personagem>(x,
            { withCredentials: false, responseType: 'json' }
          );        
    }

    pegarPlaneta(y: string): Observable<Planeta>{
        return this.http.get<Planeta>(y,
            { withCredentials: false, responseType: 'json' }
        );
    }

    pegarNave(z: string): Observable<Nave>{
        return this.http.get<Nave>(z,
            { withCredentials: false, responseType: 'json' }
        );
    }

    pergarFilmes(w: string): Observable<Filme>{
        return this.http.get<Filme>(w,
            { withCredentials: false, responseType: 'json' }
        );
    }

    pegarVeiculo(v: string): Observable<Veiculo>{
        return this.http.get<Veiculo>(v,
            { withCredentials: false, responseType: 'json' }
        );
    }

    pegarEspecie(e: string):  Observable<Especie>{
        return this.http.get<Especie>(e,
            { withCredentials: false, responseType: 'json' }
        );
    }

    
}