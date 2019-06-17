import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewAComponent } from '../new-a/new-a.component';
import { NewBComponent } from '../new-b/new-b.component';
import { NewsRoutingModule } from '../news-routing/news-routing.module';

@NgModule({
  declarations: [NewsComponent, NewAComponent, NewBComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: [NewsComponent]
})
export class NewsModule { }
