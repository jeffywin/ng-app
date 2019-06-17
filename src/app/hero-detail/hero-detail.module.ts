import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDatailRoutingModule } from '../hero-datail-routing/hero-datail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    HeroDatailRoutingModule
  ],
  exports: [HeroDetailComponent],
  providers: []
})
export class HeroDetailModule {}
