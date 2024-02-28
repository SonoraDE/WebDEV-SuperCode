import "./MovieCard.css";

const MovieCard = (prop) => {
    return (
        <div className="movie-card">
            <p>{prop.title}</p>
            <p>{prop.year}</p>
            <p>{prop.director}</p>
            <p>{prop.duration}</p>
            <p>{prop.genre.join(" | ")}</p>
            <p>{prop.rate}</p>
        </div>
    );
}
 
export default MovieCard;