import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from '../heros/heros.component';

const heroRoutes: Routes = [
  {path: 'heroes', component: HerosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
