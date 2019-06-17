import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const heroDetailRoutes: Routes = [
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(heroDetailRoutes)
  ],
  exports: [RouterModule]
})

export class HeroDatailRoutingModule { }
