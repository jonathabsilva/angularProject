import { ActivatedRoute } from '@angular/router';
import { NaveService } from './nave.service';
import { Component, OnInit } from '@angular/core';
import { Nave } from '../naves.module';

@Component({
  selector: 'app-detalhe-nave',
  templateUrl: './detalhe-nave.component.html',
  styleUrls: ['./detalhe-nave.component.css']
})
export class DetalheNaveComponent implements OnInit {

  nave: Nave
  y: string

  constructor(private route: ActivatedRoute, private naveService: NaveService) {
    this.route.params.subscribe(res => this.y = res.id);
   }

  ngOnInit() {
    this.naveService.detalharNave(this.y)
    .subscribe(nave => this.nave = nave);
  }

}
