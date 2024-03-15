import "./FilterButtons.css";
import movies from "../../assets/data.js";

const FilterButtons = (props) => {

    const dateUp = () => {
        const dataSort = movies.toSorted((a, b ) => a.year - b.year);
        props.setFilteredMovies(dataSort)
    };

    const dateDown = () => {
        const dataSort = movies.toSorted((a, b ) => b.year - a.year);
        props.setFilteredMovies(dataSort)
    };

    const bestRate = () => {
        const dataSort = movies.toSorted((a, b ) => b.rate - a.rate);
        props.setFilteredMovies(dataSort)
    };

    const aTOz = () => {
        const dataSort = movies.toSorted((a, b ) => ("" + a.title).localeCompare(b.title));
        props.setFilteredMovies(dataSort)
    };

    const zTOa = () => {
        const dataSort = movies.toSorted((a, b ) => ("" + b.title).localeCompare(a.title));
        props.setFilteredMovies(dataSort)
    };

    const filterGenre = () => {
        const dataSort = movies.filter((a, b ) => ("" + a.title).localeCompare(b.title));
        props.setFilteredMovies(dataSort)
    };

    return (
        <section className="buttons">
            <button className="btn" onClick={() => dateUp()}>Datum Aufsteigend</button>
            <button className="btn" onClick={() => dateDown()}>Datum Absteigend</button>
            <button className="btn" onClick={() => bestRate()}>Best Rating</button>
            <button className="btn" onClick={() => aTOz()}>A - Z</button>
            <button className="btn" onClick={() => zTOa()}>Z - A</button>
            <button className="btn" onClick={() => filterGenre()}>Genre A - Z</button>
        </section>
    );
}
 
export default FilterButtons;