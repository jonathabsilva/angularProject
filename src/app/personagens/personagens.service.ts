import { Observable } from 'rxjs';
import { API } from './../app.api';
import { Personagem } from './personagem.module';
import { Injectable } from '@angular/core';
/* import { Http } from '@angular/http'; */
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


import { ListaPersonagens } from './listaPersonagens.module';

@Injectable()
export class PersonagensService{
    
    persona: Personagem[];
    

    constructor(private http: HttpClient){}

    personagens(): Observable<Personagem>{

        return this.http.get<Personagem>(API,
            { withCredentials: false, responseType: 'json' }
          );        
    }

    
    

   /*  personagens(): Observable<ListaPersonagens>{
        return this.http.get(`${API}/people/`).map(response => response.json())
    } */

}