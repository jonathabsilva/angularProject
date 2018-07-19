import { Personagem } from './../personagens/personagem.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planeta } from '../planetas/planeta.module';


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

}