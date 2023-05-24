import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnChanges {
  @Input() pilotsUrl!: string[];
  pilots: any[] = [];

  constructor(private starwarsService: StarwarsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pilotsUrl.length > 0) {
      this.pilotsUrl.forEach(url => {
        this.getPilot(url);
      });
    }
  }

  getPilot(url: string) {
    this.starwarsService.getPilot(url)
      .subscribe(pilot => {
        this.pilots.push(pilot);
      });
  }
}
