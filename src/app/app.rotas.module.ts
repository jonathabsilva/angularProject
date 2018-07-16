

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
    
   
]