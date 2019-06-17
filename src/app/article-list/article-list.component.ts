import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../article.service";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../hero";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.sass"]
})
export class ArticleListComponent implements OnInit {
  articles: Hero[];
  selectedArticle: Hero;
  selectedId: number;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getArticles();
  }

  onSelect(article: Hero): void {
    this.selectedArticle = article;
    this.selectedId = article.id;
  }

  getArticles(): void {
    this.articleService
      .getNewsArticle()
      .subscribe(articles => (this.articles = articles));
  }
}
