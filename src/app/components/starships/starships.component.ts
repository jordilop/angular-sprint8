import { Component, OnInit } from '@angular/core';
import { Starship, Starships } from 'src/app/interfaces/starships';
import { StarwarsService } from 'src/app/services/starwars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starshipList: Starship[] = [];
  starshipId: string = '0';
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  pageItems: number = 10;
  showMoreButton: boolean = true;
  isLoading: boolean = true;

  constructor(private starwarsService: StarwarsService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.setQueryParams();
    this.getStarships();
  }

  getStarships() {
    this.isLoading = true;
    this.starwarsService.getStarships(this.currentPage.toString())
      .subscribe(starships => {
        this.isLoading = false;
        this.totalItems = starships.count;
        this.totalPages == 0 ? this.setTotalPages() : false;
        this.starshipList.push(...starships.results);
      });
  }

  getStarshipId(url: string) {
    return this.starwarsService.getStartshipId(url);
  }

  setCurrentPage() {
    this.currentPage++;
    this.route.navigate([], { queryParams: { page: this.currentPage } })
    this.currentPage == this.totalPages ? this.showMoreButton = false : false;
    this.getStarships();
  }

  setTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.pageItems);
  }

  setQueryParams() {
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.route.navigate([], { queryParams: { page: this.currentPage } });
    });
  }

}
