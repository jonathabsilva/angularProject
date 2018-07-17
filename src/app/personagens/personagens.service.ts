import { Observable } from 'rxjs';
import { API } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaPersonagens } from './listaPersonagens.module';

@Injectable()
export class PersonagensService{
    
    
    constructor(private http: HttpClient){}

    listaPersonagens(): Observable<ListaPersonagens>{

        return this.http.get<ListaPersonagens>(API,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}