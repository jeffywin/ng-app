import { Injectable } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot, Router, RouterModule } from '@angular/router';
import { ArticleService } from './article.service';
import { Hero } from './hero';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailRosolverService {
  article: Hero;
  constructor(
    private articleService: ArticleService,
    // private route: ActivatedRoute,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = + route.paramMap.get('id');
    // const id = +this.route.snapshot.paramMap.get('id');
    // return this.articleService.getArticle(id).subscribe(article => this.article = article);
    return this.articleService.getArticle(id).pipe(
      take(1), // take(1) 表示只操作一次,
      map(article => {
        if (article) {
          return article;
        } else {
          this.router.navigate(['/admin']);
          return null;
        }
      })
    );
  }
}
