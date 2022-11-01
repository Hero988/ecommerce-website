// importing the ProductsContext method
import { ProductsContext } from "../../../contexts/products.context";

import { useContext } from "react";

import ProductCard from "../../product-card/product-card.component";

import './shop.styles.scss'

// shop function 
const Shop = () => {
    // give me the products from usecontext passing in the ProductContext
    const { products } = useContext(ProductsContext);
    return (
        <div className="products-container">
            {/* we are mapping to the shop data. So we are creating a new array and we are getting the id and the name from the JSON file */}
            {products.map((product) => (
                // we are setting the key as the ID, and we are setting as the product as what we recieve from the product paramater 
                    <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;