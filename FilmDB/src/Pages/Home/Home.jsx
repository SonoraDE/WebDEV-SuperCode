import { useState } from "react";
import FilmCards from "../../Components/FilmCards/FilmCards";
import FilterButtons from "../../Components/FilterButtons/FilterButtons";
import "./Home.css";
import movies from "../../assets/data.js";
import Search from "../../Components/Search/Search.jsx";
import ToTop from "../../Components/ToTop/ToTop.jsx";

const Home = () => {

    const [filteredMovies, setFilteredMovies] = useState(movies);

    return (
        <>
            <ToTop/>
            <Search filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
            <FilterButtons filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
            <FilmCards filteredMovies={filteredMovies}/>
        </>
    );
}
 
export default Home;