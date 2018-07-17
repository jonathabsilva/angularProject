import { Nave } from './../naves.module';

export interface ListaNaves{
    count: number,
	next: string,
	previous: string,
	results: Array<Nave>
}