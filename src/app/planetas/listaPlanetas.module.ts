import { Planeta } from './planeta.module';

export interface ListaPlanetas{
    count: number,
	next: string,
	previous: string,
	results: Array<Planeta>
}