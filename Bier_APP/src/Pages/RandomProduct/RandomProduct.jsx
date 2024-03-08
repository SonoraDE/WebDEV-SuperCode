import { useEffect, useState } from "react";
import "./RandomProduct.css";
const RandomProduct = () => {

    const [RandomBeer, setRandomBeer] = useState();

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => response.json())
        .then((data) => setRandomBeer(data))
        .catch((error) => console.error("Fehler beim Laden der Daten", error));
    }, []);

    if(RandomBeer === undefined) return "Loading...";

    return (
        <section>
            <div className="beer-container">
                <img className="beer-img-random" src={RandomBeer.image_url} alt="BEER IMAGE" />
                <h2 className="beer-name-random">{RandomBeer.name}</h2>
                <p className="beer-text-random">{RandomBeer.tagline}</p>
                <p className="beer-desc-random">{RandomBeer.description}</p>
                <p className="beer-tips-random">{RandomBeer.brewers_tips}</p>
                <p className="beer-contribute-random">{RandomBeer.contributed_by}</p>
            </div>
        </section>
    );
}
 
export default RandomProduct;