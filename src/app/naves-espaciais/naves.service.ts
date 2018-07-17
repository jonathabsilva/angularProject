import { ListaNaves } from './listaNaves.module';
import { Observable } from 'rxjs';
import { API_NAVE } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NavesService{
    
    
    constructor(private http: HttpClient){}

    listaNaves(x: string): Observable<ListaNaves>{

        return this.http.get<ListaNaves>(x,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}