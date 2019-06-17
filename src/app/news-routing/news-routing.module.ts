import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from '../news/news.component';
import { NewAComponent } from '../new-a/new-a.component';
import { NewBComponent } from '../new-b/new-b.component';
import {AutuGuardService} from '../autu-guard.service';
const newsRouter: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    children: [
      { path: 'newsa', component: NewAComponent },
      {
        // 无组件路由， newsb需要登录后才能访问，需要在html中配置，newa不需要，
        path: 'news-auth',
        canActivate: [AutuGuardService],
        children: [
          { path: 'newsb', component: NewBComponent }
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(newsRouter)
  ],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
