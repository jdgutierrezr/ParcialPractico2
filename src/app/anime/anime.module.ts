import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AnimeListComponent, RouterLink, RouterModule],
  declarations: [AnimeListComponent, AnimeDetailComponent]
})
export class AnimeModule { }
