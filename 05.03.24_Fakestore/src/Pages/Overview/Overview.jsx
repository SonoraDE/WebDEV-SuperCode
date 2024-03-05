import { Link } from "react-router-dom";
import "./Overview.css";
import { useEffect, useState } from "react";

const Overview = () => {
    const [overview, setOverview] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setOverview(data))
        .catch((err) => console.error("ABRUFEN DER DATEN FEHLGESCHLAGEN", err));
    }, []);

    return (
        <article className="article-container">
           {overview ? ( 
                overview.map((singleProduct, key) => (
                    <div key = {key} className="container">
                            <img className="overview-img" src={singleProduct.image} alt="image" />
                            <h3 className="product-name">{singleProduct.title}</h3>
                            <p className="product-price">{singleProduct.price} €</p>
                            <Link to={`/product/${singleProduct.id}`}><button className="btn2">ZUM PRODUKT</button></Link>
                        </div>
                        ))
                ) : (
                <p className="loading">DATEN WERDEN GELADEN</p> 
           )}      
        </article>
    );
};
 
export default Overview;