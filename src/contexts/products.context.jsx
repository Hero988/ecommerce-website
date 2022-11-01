// import the createContext, useState methods from react
import { createContext, useState } from "react";

// import the prudtcs
import PRODUCTS from '../shop-data.json'

// We first initialise the context
export const ProductsContext = createContext({
    // we want to store an array of products
    products: [],
});

// We then need to create a provider for the context, we then pass the children as a paramater
export const ProductsProvider =  ({children}) => {
    // we are use products and setproducts as a useState and fro the defualt value it will be products from the JSON file 
    const [products, setProducts] = useState(PRODUCTS);
    // we sent set the value as the products as the objects from const [products] = useState(PRODUCTS);
    const value = {products}
    return (
        // this returns the ProductContext provider component
        <ProductsContext.Provider value={value}>
        {/* we then render the children */}
        {children}
        </ProductsContext.Provider>
    )
}