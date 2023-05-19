export interface Starships {
    count: number,
    next: string,
    previous: null,
    results: Starship[],
}

export interface Starship {
    name: string,
    model: string
}