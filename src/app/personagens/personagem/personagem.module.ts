
export interface Personagem{
    name: string,
	height?: number,
	mass?: number,
	hair_color?: string,
	skin_color?: string,
	eye_color?: string,
	birth_year?: string,
	gender?: string,
	homeworld?: string,
	films?: Array<string>,
	species?: Array<string>,
	vehicles?: Array<string>,
	starships?: Array<string>,
	url?:string
}