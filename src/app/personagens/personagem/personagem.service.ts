import { Personagem } from './../personagem.module';
import { API } from './../../app.api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonagemService{
    
    constructor(private http: HttpClient){}

    personagem(): Observable<Personagem>{

        return this.http.get<Personagem>(API,
            { withCredentials: false, responseType: 'json' }
          );        
    }
}