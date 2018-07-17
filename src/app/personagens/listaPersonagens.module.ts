import { Personagem } from './personagem.module';

export interface ListaPersonagens{
    count: number, 
    next: string,
    previous: boolean, 
    results: Array<Personagem>
}