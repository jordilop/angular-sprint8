import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';
import { ActivatedRoute } from '@angular/router';
import { Starship } from 'src/app/interfaces/starships';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  id: string = '';
  image: string = '';
  starship: Starship = {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: 0,
    length: 0,
    max_atmosphering_speed: 0,
    crew: '',
    passengers: 0,
    starship_class: '',
    hyperdrive_rating: 0,
    consumables: '',
    MGLT: 0,
    pilots: [],
    films: [],
    url: ''
  };
  isLoading: boolean = true;

  constructor(private starwarsService: StarwarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    this.getStarshipImage(this.id);
    this.getStarShip(this.id);
  }

  getParams() {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  getStarShip(id: string) {
    this.isLoading = true;
    this.starwarsService.getStarship(id)
      .subscribe(starship => {
        this.isLoading = false;
        this.starship = starship
      });
  }

  getStarshipImage(id: string) {
    this.starwarsService.getStarshipImage(id)
      .subscribe({
        next: () => this.image = `${this.starwarsService.apiImage}/${id}.jpg`,
        error: () => this.image = `${this.starwarsService.apiNoImage}`
      })
  }

}
