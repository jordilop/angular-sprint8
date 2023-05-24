import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnChanges {
  @Input() filmsUrl!: string[];
  films: any[] = [];

  constructor(private starwarsService: StarwarsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.filmsUrl.length > 0) {
      this.filmsUrl.forEach(url => {
        this.getFilm(url);
      });
    }
  }

  getFilm(url: string) {
    this.starwarsService.getFilm(url)
      .subscribe(film => {
        this.films.push(film);
      });
  }



}
