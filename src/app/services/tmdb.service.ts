/*Angular service*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPopularMovie } from '../interfaces/movie.popular.interface';
import { movieSlider } from '../helpers/movies.helper';

@Injectable({
    providedIn: 'root'
})
export class TmdbService {
    constructor(private http: HttpClient) {}
    
    getPopularMovies(): Observable<any> {
        return this.http.get<IPopularMovie>(`${environment.API_URL}movie/popular?${environment.API_KEY}`)
            .pipe(map(movieSlider));
    }

    getMovieDetails(id: number): Observable<any> {
        return this.http.get(`${environment.API_URL}movie/${id}?${environment.API_KEY}`);
    }
}