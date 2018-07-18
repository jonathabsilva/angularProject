import { PlanetaService } from './planeta.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Planeta } from '../planetas/planeta.module';

@Component({
  selector: 'app-detalhe-planeta',
  templateUrl: './detalhe-planeta.component.html',
  styleUrls: ['./detalhe-planeta.component.css']
})
export class DetalhePlanetaComponent implements OnInit {

  planeta: Planeta
  z: string;

  constructor(private route: ActivatedRoute, private planetaService: PlanetaService) { 
    this.route.params.subscribe(res => this.z = res.id);
  }

  ngOnInit() {
    
    this.planetaService.detalharPlaneta(this.z)
    .subscribe(planeta => this.planeta = planeta);
  }

}
