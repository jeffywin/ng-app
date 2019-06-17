import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ARTICLE } from './mock-article';
import { map } from 'rxjs/operators';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  static nextArticleId = 50;
  constructor() { }

  getNewsArticle(): Observable<Hero[]> {
    return of(ARTICLE);
  }

  getArticle(id: number | string): Observable<Hero> {
    return of(ARTICLE.find(article => article.id === +id));
  }
}
