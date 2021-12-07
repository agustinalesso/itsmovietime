import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie.detail.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movie',
  template: `
    <div class="w-full text-center md:text-left flex md:flex-row flex-col-reverse justify-between items-center md:items-start">
      <h1 class="text-white font-oswald text-4xl uppercase mt-4 md:mt-0">{{movie?.original_title}}</h1>
      <button (click)="goBack()" class="button-back md:mt-0"><i class="fas fa-arrow-left"></i> Return</button>
    </div>
    <div class="w-full flex flex-col md:flex-row justify-center md:justify-start pt-8">
      <img class="rounded-md md:max-h-96 shadow-xl" [src]="imageUrl" alt="movie.original_title">
      <hr class="my-4 border-dark md:hidden">
      <p class="text-center md:text-left text-gray-300">{{movie?.overview}}</p>
    </div>
  `,
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  id?: number;
  movie?: IMovie;
  imageUrl?: string;

  constructor(private _tmdb : TmdbService, private router: Router, private route: ActivatedRoute) { 
    //Recover id parameter from url
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id){
        //Get movie detail
        this._tmdb.getMovieDetails(this.id).subscribe(
          (data: IMovie) => {
            this.movie = data;
            this.imageUrl = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : '';
          }
        );
      }

    });
  }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/']);
  }

}
