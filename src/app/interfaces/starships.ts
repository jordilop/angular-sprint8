import { NumberSymbol } from "@angular/common";

export interface Starships {
    count: number,
    next: string,
    previous: null,
    results: Starship[],
}

export interface Starship {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: number,
    crew: string,
    passengers: number,
    starship_class: string,
    hyperdrive_rating: number,
    consumables: string,
    MGLT: number,
    pilots: string[],
    films: string[]
    url: string
}