import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime-list/anime-list.component';

const routes: Routes = [
    {
     path: 'list',
     component: AnimeListComponent
   },
   {
     path: ':id',
     component: AnimeDetailComponent
   },
];


@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AnimeRoutingModule { }