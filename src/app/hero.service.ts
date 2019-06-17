import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HEROES } from "./mock-heros";
import { Hero } from "./hero";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private http: HttpClient) {}

  // getHeroes(): Observable<Hero[]> {
  //   // return of(HEROES);
  //   return this.http.get<Hero[]>("http://localhost:4000/users");
  // }

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
    // 可以在这里处理一些逻辑，也可以用管道来处理，也可以在订阅者subscribe请求接口的时候处理逻辑
    return this.http.get<Hero[]>("http://localhost:4000/users").pipe(
      map(data => {
        let arr = [];
        data.map(hero => {
          hero.name = hero.name + "-同学";
          arr.push(hero);
        });
        return arr;
      }),
      tap(data => console.log(), err => console.log(err))
    );
  }

  // getHero(id: number): Observable<Hero> {
  //   return of(HEROES.find(hero => hero.id === +id));
  // }

  // getHero(id: number | string) {
  //   return this.getHeroes().pipe(
  //     map(heroes => heroes.find(hero => hero.id === +id))
  //   );
  // }
  getHero(id: number | string) {
    return this.http.get<Hero>(`http://localhost:4000/oneUser/${id}`);
  }
}
