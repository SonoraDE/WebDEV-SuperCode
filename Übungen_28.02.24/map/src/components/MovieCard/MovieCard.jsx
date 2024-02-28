import Rating from "../Rating/Rating";
import "./MovieCard.css";

const MovieCard = (prop) => {
    return (
        <div className="movie-card">
            <p>{prop.title}</p>
            <p>{prop.year}</p>
            <p>{prop.director}</p>
            <p>{prop.duration}</p>
            <div className="bg">{prop.genre.map((item, key) => (
                <p className="genre" key = {key}>{item}</p>
            ))}</div>
            <Rating rate = {prop.rate}/>
        </div>
    );
}
 
export default MovieCard;