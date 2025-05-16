import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, map } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }

  getAnime(id: string): Observable<Anime> {
    return this.http.get<Anime[]>(this.apiUrl).pipe(
      map((animes: Anime[]) => {
        //Complete con el código necesario para recorrer los animes y retornar el anime con el id buscado
        // pista: use un for tradicional con comparación de un id con un if

        var animeEncontrado = null;

        animes.forEach( anime => {
          if( String(anime.id) === id ) {
            animeEncontrado = anime;
          }
        })

        //No borre esto, es necesario para manejar el caso en el que no exista un anime con el id dado por parámetro.
        if ( !animeEncontrado ) {
          throw new Error(`Anime con ID ${id} no encontrado`);
        } else {
          return animeEncontrado;
        }
      })
    );
  }

}
