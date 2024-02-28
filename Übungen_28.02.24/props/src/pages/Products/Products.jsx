import ProductItem from "../../components/ProductItem/ProductItem";
import "./Products.css";
const Products = () => {
    const info = [
        {   
            name: "Cocooil",
            price: "$30",
            img: "/public/pic.jpg"
        },
        {   
            name: "Cocooil Premium",
            price: "$60",
            img: "/public/pic.jpg"
        },
        {   
            name: "Cocooil VIP",
            price: "$80",
            img: "/public/pic.jpg"
        },
    ];
    return (
        <>
        <section className="wrapper"> 
            <ProductItem
                name = {info[0].name}
                price = {info[0].price}
                img = {info[0].img}
            />
            <ProductItem
                name = {info[1].name}
                price = {info[1].price}
                img = {info[1].img}
            />
            <ProductItem
                name = {info[2].name}
                price = {info[2].price}
                img = {info[2].img}
            />
        </section>
        </>
    );
}
 
export default Products;