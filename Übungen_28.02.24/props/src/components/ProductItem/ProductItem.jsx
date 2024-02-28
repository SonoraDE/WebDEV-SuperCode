import "./ProductItem.css";
const ProductItem = (prop) => {
    return (
        <>
        <div className="product-card">
        <div>
            <img src={prop.img} alt="IMAGE" />
            </div>
            <div>
            {prop.name}
            </div>
            <div>
            {prop.price}
            </div>
        </div>
        </>
    );
}
 
export default ProductItem;