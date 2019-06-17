import { Component, OnInit, Input } from "@angular/core";
import {
  ActivatedRoute,
  ParamMap,
  Router,
  NavigationEnd
} from "@angular/router";
import { Location } from "@angular/common";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.sass"]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  // hero: Observable<Hero>;
  // heroDetail 属性必须是一个带有 @Input() 装饰器的输入属性，
  // 因为外部的 HeroesComponent 组件将会绑定到它
  @Input() heroDetail: Hero;
  constructor(
    private location: Location,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHero();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 可以做一些销毁的工作
        console.log("导航结束");
      }
    });
  }

  goBack(hero: Hero): void {
    const heroId = hero ? hero.id : null;
    this.router.navigate(["/heroes", { id: heroId }]);
    // this.location.back();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  // getHero() {
  //   console.log(this.route);
  //   this.hero = this.route.paramMap.pipe(
  //     switchMap((param: ParamMap) =>
  //       this.heroService.getHero(param.get('id'))
  //     ));
  //   }
}
