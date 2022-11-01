// importing createcontext and usestate method from react 
import { createContext, useState } from "react";

// creating a CarContext function
export const CartContext = createContext({
    // the initial value of the iscartOpen bool is fale meaning we did not click the basket 
    iscartOpen: false,
    // setting the cart as open which is an empty function
    setIsCartOpen: () => { }
})

// create the provider
export const CartProvider = ({ children }) => {
    // creating the use state
    const [iscartOpen, setIsCartOpen] = useState(false);
    // setting the value
    const value = {iscartOpen, setIsCartOpen};


    return (
        // we are returing the CartContext provider and rendering the children 
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}