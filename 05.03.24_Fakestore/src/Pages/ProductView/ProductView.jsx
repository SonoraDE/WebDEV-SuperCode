import { useState, useEffect } from "react";
import "./ProductView.css";
import { useParams } from "react-router-dom";

const ProductView = () => {

    const [ProductData, setProductData] = useState([]);
    const [FilteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((ProductData) => setProductData(ProductData))
        .catch((err) => console.error("FEHLER AUF DER DETAILSEITE", err));
    }, []);

    const { id } = useParams();

    useEffect(() => {
        const find = ProductData.find((product) => Number(product.id) === Number(id));
        setFilteredData(find);
      }, [ProductData]);

    return (
        <section className="view-container">
            {FilteredData ? (
            <div className="view-box">
                <img className="view-img" src={FilteredData.image} alt="IMAGE" />
                <h1 className="view-title">{FilteredData.title}</h1>
                <p className="view-desc">{FilteredData.description}</p>
                <p className="view-price">{FilteredData.price} €</p>
            </div>
            ) : (
                <p className="loading">DATEN WERDEN GELADEN</p>
            )}
        </section>
    );
}
 
export default ProductView;