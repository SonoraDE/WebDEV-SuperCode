import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import "./MovieDB.css";
import movies from "./movies.js";

const MovieDB = () => {
    return (
        <div className="movie-wrapper">
            {movies.map((movieData, key) => (
                    <MovieCard key = {key}
                        title = {movieData.title}
                        year = {movieData.year}
                        director = {movieData.director}
                        duration = {movieData.duration}
                        genre = {movieData.genre}
                        rate = {movieData.rate} 
                    />
            ))}
        </div>
    ); 
}
 
export default MovieDB;