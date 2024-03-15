import { useEffect, useState } from "react";
import "./Search.css";
import movies from "../../assets/data.js";

const Search = (props) => {

    const [userInput, setUserInput] = useState("");

    const searchFunction = () => {
       const movieSearch = movies.filter((movie) => movie.title.toLowerCase().includes(userInput.toLowerCase()));
       props.setFilteredMovies(movieSearch);
    }

    useEffect(() => {
        if(userInput.length === 0) {
            props.setFilteredMovies(movies);
        }
    }, [userInput]);

    return (
        <section className="search-func">
            <div >
                <input type="text" name="searchbar" id="search" placeholder="Film Suche ..." onChange={e => setUserInput(e.target.value)}/>
            </div>
            <div>
                <button className="search-btn" onClick={() => searchFunction()}>Suchen</button>
            </div>
        </section>
    );
}
 
export default Search;