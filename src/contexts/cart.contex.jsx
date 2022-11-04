// importing createcontext and usestate method from react 
import { createContext, useState, useEffect } from "react";

// look for any products in the cartItems array that match the id's of the product from the productToAdd paramater and if found increase the quantity
// otherwise make a new cart item
const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd. We are searching through the cartItems array and we pass it a callback and it recieves each element in the cartItems array
    // i.e. cartItem and then we are expected to return a bool and if the bool is true the function will exit giving the item that returned the true bool
    const existingCartItem = cartItems.find((cartItem) =>
        // only return true if the ids match
        cartItem.id === productToAdd.id
    );

    // if found 
    if (existingCartItem) {
        // we return a new array with the increased quantity. If the cartItem is equal to the productToAdd 
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            // if true we want to add a new cart item object and increase the cartItem byt 1 
            { ...cartItem, quantity: cartItem.quantity + 1 }
            // if this is not the case i.e. a cart item that is not related to our productToAdd then just return back the origninal cart item
            : cartItem
        );
    }

    // return new array with modefied cartItems/ new cart item
    // if this cart does not have an existing cart item with the same id as product to add then we know it is a new product but we also need to add all the existing
    // cart items that are in the cart already. We then create a new array and we add all the existing cart items but we add the product to add and we are also going to add
    // the quantity of 1
    return [...cartItems, { ...productToAdd, quantity: 1 }]

}

// function to remove a cart item and we pass the original cart items array because we are going to create a new array where we either decrease the quantity of the cart item or
// removed the cart item altogether if the previous quantity is at 1. 
const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) =>
        // only return true if the ids match
        cartItem.id === cartItemToRemove.id
    );
    // ceck if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        // I want you to filter out anything in the fucntion that equals false, this means if the cartItem.id is not the one we want to remove cartItemToRemove.id 
        // then keep the value. Only want to remove the value if the cart item id is equal to the cartItemToRemove
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // if it is not equal to 1 then we return back cartitems with matching cart item with reduced quantity 
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        // if true we want to add a new cart item object and decrease the cartItem by 1 . We return a new object as that is how react renders
        { ...cartItem, quantity: cartItem.quantity - 1 }
        // if this is not the case i.e. a cart item that is not related to our cartItemToRemove then just return back the origninal cart item
        : cartItem
    );
}

// clearCartItem function which will allow us to clear an item from the whole cart. Which is going to recieve the cartItems and we are also getting the cartItemToRemove
const clearCartItem = (cartItems, cartItemToClear) => {
    // if the cart item you want to clear from the cart is equal to the cart item that is already there then just filter it out completely
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

// creating a CarContext function
export const CartContext = createContext({
    // the initial value of the iscartOpen bool is fale meaning we did not click the basket 
    iscartOpen: false,
    // setting the cart as open which is an empty function
    setIsCartOpen: () => { },
    // storing the cart items as they are added to the cart
    cartItems: [],
    // adding the item to the cart function where we control what this function will do
    addItemToCart: () => { },
    // removes the item from the cart method
    removeItemFromCart: () => { },
    // this function clears an item from the cart
    clearItemFromCart: () => { },
    // the number of items in the cart and we default this to 0
    cartCount: 0,
    // the total price of all the items in the cart which is default 0
    cartTotal: 0
})


// create the provider
export const CartProvider = ({ children }) => {
    // creating the use state for iscartOpen and setIsCartOpen
    const [iscartOpen, setIsCartOpen] = useState(false);
    // creating the use state for cartItems and setCartItems by default we are going to use an empty array 
    const [cartItems, setCartItems] = useState([]);
    // creating the use state for cartCount by default it is 0
    const [cartCount, setCartCount] = useState(0);
    // creating the use state for total by default it is 0
    const [cartTotal, setCarttotal] = useState(0);

    // Remember useEffect we pass it a callback and this callback runs everytime something in your dependency changes. In this example the dependpency array is the cartItems
    // i.e. everytime when this cartItems array changes we need to recalculate the cart count
    useEffect(() => {
        // creating a cart count variable. Reduce takes 2 arguments the first one is the callback and the second one is the starting value. The callback is going to be 
        // the current total. In the callback function we are getting the current total and the cart item and we add the total by the cart item quantity
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        // we set the cart count as the new cart count
        setCartCount(newCartCount);
    }, [cartItems])


    // Remember useEffect we pass it a callback and this callback runs everytime something in your dependency changes. In this example the dependpency array is the cartItems
    // i.e. everytime when this cartItems array changes we need to recalculate the cart total
    useEffect(() => {
        // creating a cart total variable. Reduce takes 2 arguments the first one is the callback and the second one is the starting value. The callback is going to be 
        // the current total value of the cart. In the callback function we are getting the current total and the cart item and we calculate the cart total by doing
        // the quantity * price and adding that to the total
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        // we set the cart count as the new cart count
        setCarttotal(newCartTotal);
    }, [cartItems])

    // definded the addItemToCart method, this is going to be a function that triggers whenever a user clicks on the add to cart and we are going to 
    // recieve from the product card is the product  
    const addItemToCart = (productToAdd) => {
        // we are going to set the new cart items by calling setCartItems and by also calling the addCartItem functiion and passing cartitems and product to add
        setCartItems(addCartItem(cartItems, productToAdd));

    }

    // definded the removeItemFromCart method, this is going to be a function that triggers whenever a user wants to remove an item from the cart and we are going to 
    // recieve the product from the cart
    const removeItemFromCart = (cartItemToRemove) => {
        // we are going to set the new cart items by calling setCartItems and by also calling the removeCartItem functiion and passing cartitems and product to add
        setCartItems(removeCartItem(cartItems, cartItemToRemove));

    }

    // definded the clearItemFromCart method, this is going to be a function that triggers whenever a user wants to clear an item from the cart and we are going to 
    // recieve the product from the cart
    const clearItemFromCart = (cartItemToClear) => {
        // we are going to set the new cart items by calling setCartItems and by also calling the removeCartItem functiion and passing cartitems and product to add
        setCartItems(clearCartItem(cartItems, cartItemToClear));

    }

    // setting the value (what we want to expose in the context to be able to use in other parts of our application)
    const value = { iscartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal };


    return (
        // we are returing the CartContext provider and rendering the children 
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}