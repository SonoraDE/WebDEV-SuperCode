import { useEffect, useState } from "react";
import "./RandomProduct.css";
const RandomProduct = () => {

    const [RandomData, setRandomData] = useState();

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => response.json())
        .then((data) => setRandomData(data))
        .catch((error) => console.error("Fehler beim Laden der Daten", error));
    }, []);

    console.log(RandomData);

    return (
        <>

        </>
    );
}
 
export default RandomProduct;