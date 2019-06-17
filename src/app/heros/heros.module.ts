import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import { HeroRoutingModule } from '../hero-routing/hero-routing.module';

@NgModule({
  declarations: [HerosComponent],
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  exports: [HerosComponent],
  providers: []
})
export class HerosModule { }
