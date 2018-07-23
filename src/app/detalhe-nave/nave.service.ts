import { Filme } from './../personagens/filme.module';
import { Personagem } from './../personagens/personagem.module';
import { Nave } from './../naves.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NaveService{
    
    
    constructor(private http: HttpClient){}

    detalharNave(x: string): Observable<Nave>{

        return this.http.get<Nave>(x,
            { withCredentials: false, responseType: 'json' }
          );        
    }

    pegarPiloto(p: string): Observable<Personagem>{

        return this.http.get<Personagem>(p,
            { withCredentials: false, responseType: 'json' }
          );        
    }

    pergarFilmes(f: string): Observable<Filme>{
        return this.http.get<Filme>(f,
            { withCredentials: false, responseType: 'json' }
        );
    }


}