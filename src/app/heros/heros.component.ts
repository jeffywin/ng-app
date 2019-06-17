import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HEROES } from "../mock-heros";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.sass"]
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;
  selectedId: number;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    // 拿到选中的id
    // this.selectedId = +this.route.snapshot.paramMap.get('id');
    // subscribe订阅
    this.heroService.getHeroes().subscribe(heroes => (this.heros = heroes));
  }
}
