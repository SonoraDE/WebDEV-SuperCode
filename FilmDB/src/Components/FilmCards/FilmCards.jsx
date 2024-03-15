import "./FilmCards.css";

const FilmCards = (props) => {

    return (
        <section className="card-layout">
            {props.filteredMovies?.map((filmData, key) => (
                <section className="movie-card" key={key}>
                    <p>{filmData.title}</p> 
                    <p>{filmData.year}</p> 
                    <p>{filmData.director}</p> 
                    <p>{filmData.duration}</p> 
                    <p>{filmData.genre.join(" ")}</p> 
                    <p>{filmData.rate}</p>
                </section> 
            ))}
        </section>
    );
}
 
export default FilmCards;