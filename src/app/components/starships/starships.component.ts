import { Component, OnInit } from '@angular/core';
import { Starship, Starships } from 'src/app/interfaces/starships';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starshipList: Starship[] = [];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships() {
    this.starwarsService.getStarships()
      .subscribe(starships => {
        this.starshipList = starships.results;
      })
  }

}
