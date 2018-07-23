import { Filme } from './../personagens/filme.module';
import { Personagem } from './../personagens/personagem.module';
import { Planeta } from './../planetas/planeta.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PlanetaService{
    
    
    constructor(private http: HttpClient){}

    detalharPlaneta(x: string): Observable<Planeta>{

        return this.http.get<Planeta>(x,
            { withCredentials: false, responseType: 'json' }
          );        
    }

    detalharResidente(r: string): Observable<Personagem>{

        return this.http.get<Personagem>(r,
            { withCredentials: false, responseType: 'json' }
          );        
    }

    detalharPlanetaFilme(z: string): Observable<Filme>{

        return this.http.get<Filme>(z,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}