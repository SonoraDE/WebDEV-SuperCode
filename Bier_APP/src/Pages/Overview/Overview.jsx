import { useEffect, useState } from "react";
import "./Overview.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Overview = () => {

    const [BeerData, setBeerData] = useState();

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => response.json())
        .then((BeerData) => setBeerData(BeerData))
        .catch((error) => console.error("Fehler beim Laden der Daten", error));
    }, []);

    console.log(BeerData);

    return (
        <section>
                {BeerData ? (
                    BeerData.map((singleBeer, key) => {
                        return (
                            <div className="beer-container" key={key}>
                                <img className="beer-img" src={singleBeer.image_url} alt="BEER IMAGE" />
                                <h2 className="beer-name">{singleBeer.name}</h2>
                                <p className="beer-text">{singleBeer.tagline}</p>
                                    <Link to={`/product/${singleBeer._id}`}><Button>MEHR INFOS</Button></Link>
                            </div>
                        );
                    })
                ) : (
                    <p className="loading">BIER WIRD AUFGELISTET...</p>
                )}
        </section>
    );
}
 
export default Overview;