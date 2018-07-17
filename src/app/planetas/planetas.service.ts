import { ListaPlanetas } from './listaPlanetas.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PlanetasService{
    
    
    constructor(private http: HttpClient){}

    listaPersonagens(x: string): Observable<ListaPlanetas>{

        return this.http.get<ListaPlanetas>(x,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}