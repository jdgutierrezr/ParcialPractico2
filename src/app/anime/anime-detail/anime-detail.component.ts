import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css'],
})
export class AnimeDetailComponent implements OnInit 
{
  animeId!: string;
  @Input() animeDetail!: Anime;

  constructor( private route: ActivatedRoute, private animeService: AnimeService ) { }

  getAnime( ) 
  {
    this.animeService.getAnime( this.animeId ).subscribe(anime => {
      this.animeDetail = anime;
    })
  }

  ngOnInit( ) 
  {
    if ( this.animeDetail === undefined ) {
      this.animeId = this.route.snapshot.paramMap.get('id')!

      if ( this.animeId ) {
        this.getAnime( );
      }
    }
  }
}
