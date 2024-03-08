
import { useParams } from "react-router-dom";
import "./ProductView.css";
import { useEffect, useState } from "react";
const ProductView = () => {
    const [ProductData, setProductData] = useState([]);
    const [FilteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then((res) => res.json())
        .then((data) => setProductData(data))
        .catch((err) => console.error("FEHLER AUF DER DETAILSEITE", err));
    }, []);

    const { id } = useParams();

    useEffect(() => {
        const find = ProductData.find((product) => (product._id) === (id));
        setFilteredData(find);
      }, [ProductData]);

    return (
        <section>
            {FilteredData ? (
            <div className="beer-container">
                <img className="beer-img-random" src={FilteredData.image_url} alt="BEER IMAGE" />
                <h2 className="beer-name-random">{FilteredData.name}</h2>
                <p className="beer-text-random">{FilteredData.tagline}</p>
                <p className="beer-desc-random">{FilteredData.description}</p>
                <p className="beer-tips-random">{FilteredData.brewers_tips}</p>
                <p className="beer-contribute-random">{FilteredData.contributed_by}</p>
            </div>
            ) : (
                <p className="loading">DATEN WERDEN GELADEN</p>
            )}
        </section>
    );
}
 
export default ProductView;