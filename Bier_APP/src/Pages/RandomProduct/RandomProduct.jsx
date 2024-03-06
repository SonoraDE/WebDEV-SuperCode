import { useEffect, useState } from "react";
import "./RandomProduct.css";
const RandomProduct = () => {

    const [RandomData, setRandomData] = useState();

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => response.json())
        .then((RandomData) => setRandomData(RandomData))
        .catch((error) => console.error("Fehler beim Laden der Daten", error));
    }, []);

    console.log(RandomData);
    if(RandomData === undefined) return "Loading..."
    return (
        <section>
            <div className="beer-container">
                <img className="beer-img" src={RandomData.image_url} alt="BEER IMAGE" />
                <h2 className="beer-name">{RandomData.name}</h2>
                <p className="beer-text">{RandomData.tagline}</p>
            </div>
        </section>
    );
}
 
export default RandomProduct;