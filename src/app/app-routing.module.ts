import { NgModule } from '@angular/core';
// PreloadAllModules 预加载
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashborardComponent } from './dashborard/dashborard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent} from './article/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'dashborard', component: DashborardComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'article', component: ArticleComponent}
  // './article/article.module#ArticleModule' ,
  // { path: 'detail', loadChildren: './hero-detail/hero-detail.module#HeroDetailModule' },
  // { path: 'heroes', loadChildren: './heros/heros.module#HerosModule' }
  // { path: 'heroes', component: HerosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
