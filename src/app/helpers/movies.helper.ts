import { MovieGenericInterface } from "../interfaces/movie.generic.interface";
import { IPopularMovie } from "../interfaces/movie.popular.interface";

//Export function that receives an array of movies and returns an array of movies with the following properties: id, title, image and year
export function movieSlider(movies: IPopularMovie) {
    return movies.results.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            imagebg: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}) no-repeat center center`,
            year: movie.release_date,
            desc: movie.overview,
            rating: movie.vote_average
        };
    });
    }