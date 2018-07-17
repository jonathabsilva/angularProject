import { Personagem } from './personagem.module';

export interface ListaPersonagens{
    count: number, 
    next: string,
    previous: string, 
    results: Array<Personagem>
}