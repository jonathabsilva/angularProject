import { API_NAVE} from './../app.api';
import { NavesService } from './naves.service';
import { ListaNaves } from './listaNaves.module';
import { Nave } from './../naves.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naves-espaciais',
  templateUrl: './naves-espaciais.component.html',
  styleUrls: ['./naves-espaciais.component.css']
})
export class NavesEspaciaisComponent implements OnInit {

  naves: Nave[];
  listaNave: ListaNaves
  

  constructor(private navesService: NavesService) { }

  ngOnInit() {
    this.navesService.listaNaves(API_NAVE)
    .subscribe(listaNave => this.listaNave = listaNave);
    console.log(this.listaNave);
  }

  proximo(){
    console.log("Botão clicado");
    this.navesService.listaNaves(this.listaNave.next)
    .subscribe(listaNave => this.listaNave = listaNave);
    console.log(this.listaNave);
  }

  voltar(){
    console.log("Botão clicado");
    this.navesService.listaNaves(this.listaNave.previous)
    .subscribe(listaNave => this.listaNave = listaNave);
    console.log(this.listaNave);
  }

}