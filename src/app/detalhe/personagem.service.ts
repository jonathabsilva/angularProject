import { Personagem } from './../personagens/personagem.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PersonagemService{
    
    
    constructor(private http: HttpClient){}

    detalharPersonagem(x: string): Observable<Personagem>{

        return this.http.get<Personagem>(x,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}