import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starships } from '../interfaces/starships';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private api = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getStarships() {
    const path = `${this.api}/starships`;
    return this.http.get<Starships>(path);
  }
}
