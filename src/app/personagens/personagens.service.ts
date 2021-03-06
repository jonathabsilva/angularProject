import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaPersonagens } from './listaPersonagens.module';

@Injectable()
export class PersonagensService{
    
    
    constructor(private http: HttpClient){}

    listaPersonagens(x: string): Observable<ListaPersonagens>{

        return this.http.get<ListaPersonagens>(x,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}