import { DetalheNaveComponent } from './detalhe-nave/detalhe-nave.component';
import { DetalhePlanetaComponent } from './detalhe-planeta/detalhe-planeta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { NavesEspaciaisComponent } from './naves-espaciais/naves-espaciais.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { HomeComponent } from './home/home.component';




import {Routes} from '@angular/router';

export const ROUTES: Routes=[
    {path: '', component: HomeComponent},
    {path: 'planetas', component: PlanetasComponent},
    {path: 'personagens', component: PersonagensComponent},
    {path: 'naves', component: NavesEspaciaisComponent},
    {path: 'detalhes/people/:id', component: DetalheComponent},
    {path: 'detalhes/planeta/:id', component: DetalhePlanetaComponent},
    {path: 'detalhes/nave/:id', component: DetalheNaveComponent}
    
]