import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starships, Starship } from '../interfaces/starships';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private api = 'https://swapi.dev/api';
  public apiImage = 'https://starwars-visualguide.com/assets/img/starships';
  public apiNoImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';

  constructor(private http: HttpClient) { }

  getStarships(page: string) {
    const path = `${this.api}/starships?page=${page}`;
    return this.http.get<Starships>(path);
  }

  getStarship(id: string) {
    const path = `${this.api}/starships/${id}`;
    return this.http.get<Starship>(path);
  }

  getStartshipId(url: string) {
    const arr = url.split(`${this.api}/starships/`);
    const id = arr[arr.length - 1].slice(0, arr[arr.length - 1].length - 1);
    return id;
  }

  getStarshipImage(id: string) {
    return this.http.get(`${this.apiImage}/${id}.jpg`, { responseType: 'text' });
  }
}
