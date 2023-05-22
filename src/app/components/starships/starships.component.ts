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
  starshipId: string = '0';

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships() {
    this.starwarsService.getStarships()
      .subscribe(starships => {
        console.log(starships.results);
        this.starshipList = starships.results;
      })
  }

  getStarshipId(url: string) {
    return this.starwarsService.getStartshipId(url);
  }

}
