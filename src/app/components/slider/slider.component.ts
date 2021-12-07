import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieGenericInterface } from 'src/app/interfaces/movie.generic.interface';
import { TmdbService } from 'src/app/services/tmdb.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  template: `
    <swiper [autoplay]="{delay:10000}" [speed]="500" [loop]="true" [slidesPerView]="1" [spaceBetween]="10" (swiper)="onSwiper($event)" (slideChange)="onSlideChange()" effect="fade">
      <ng-template *ngFor="let movie of movies" swiperSlide>
        <div class="w-full h-56 sm:h-64 md:h-auto p-4 bg-dark rounded-md">
          <div class="flex w-full flex-row items-start justify-between">
            <img [src]="movie.image" alt="movie.title" class="md:h-96 sm:h-56 h-48 rounded-sm" />
            <div class="flex w-9/12 sm:h-56 md:h-96 p-10 flex-col items-start justify-center pl-4">
              <h2 class="text-gray-400 text-2xl text-left mb-4 font-oswald font-bold uppercase">{{movie.title}}</h2>
              <p class="text-gray-400 text-md hidden md:block font-light mb-4">{{movie.desc | sliceText:'250'}}</p>
              <button (click)="goToMovie(movie.id)" type="button" class="button-standard">See more</button>
            </div>
            <div class="w-3/12 p-4 sm:flex hidden flex-col items-center justify-center rounded-md bg-darky">
              <ul class="text-gray-400">
                <li class="mb-4 text-sm">Release: <strong>{{movie.year | date:'MMMM YYYY'}}</strong></li>
                <li class="mb-2 text-sm">Rating: <span class="bg-pink-700 text-white font-bold px-2 py-1 rounded-sm">{{movie.rating}}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </ng-template>
    </swiper>
  `,
  styles: [
  ]
})
export class SliderComponent implements OnInit {

  movies : MovieGenericInterface[] = [];

  constructor(private _tmdb: TmdbService, private router: Router) { }

  ngOnInit(): void {
    this._tmdb.getPopularMovies().subscribe((data: MovieGenericInterface[]) => {
      this.movies = data;
    })
  }

  onSwiper(swiper:any) {
    console.log('swiper', swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

  goToMovie(id:number) {
    //route to movie
    this.router.navigate(['/movie', id]);
  }

}
