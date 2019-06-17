import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-dashborard',
  templateUrl: './dashborard.component.html',
  styleUrls: ['./dashborard.component.sass']
})
export class DashborardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
