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

}