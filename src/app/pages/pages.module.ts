import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './inicio/inicio.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ComponentsModule } from '../components/components.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    FavoritesComponent,
    MovieComponent
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
