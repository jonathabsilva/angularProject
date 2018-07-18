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

}