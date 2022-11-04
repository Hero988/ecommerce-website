// import style sheet (all the classes are going to be used in the style sheet)
import './checkout-item.styles.scss'

// import use context 
import { useContext } from 'react';

// import cart context
import { CartContext } from '../../contexts/cart.contex';

// checkoutItem function (this is the item that will show at the checkout) (get the cart item as a paramater)
const CheckoutItem = ({ cartItem }) => {
    // we destructure all the filds we need from cartItem
    const { name, imageUrl, price, quantity } = cartItem;

    // we destructure the clearItemFromCart and addItemToCart and removeItemFromCart function from the CartContext
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    // this will handle the clearing of the cart item and we pass in the cartitem that we want to clear into the clearItemFromCart method
    const clearItemHandler = () => clearItemFromCart(cartItem);
    
    // this simply adds the item to cart passing in the cart item we want to add
    const addItemHandler = () => addItemToCart(cartItem);

    // this simply removes the item to cart passing in the cart item we want to remove
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        // this div will contain al the appropiate value
        <div className='checkout-item-container'>
            {/* this div will contain the image */}
            <div className='image-container'>
                {/* the actual image itself*/}
                <img src={imageUrl} alt={`${name}`}></img>
            </div>
            {/* the name of the product */}
            <span className='name'> {name} </span>
            {/* the quantity of how many products are in the basket */}
            <span className='quantity'>
                {/* the arrow container, &#10094 is the code for the left facing arrow, when you click run the removeItemHandler function */}
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                {/* the quantity container */}
                <span className='value'>{quantity}</span>
                {/* the arrow container &#10095, is the code for the left facing arrow, when you click run the addItemHandler function */}
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            {/* the total price of the individual product * quantity */}
            <span className='price'> £{price} </span>
            {/* this is going to contain the remove button (&#10005 will crease the X button but in a specific format and in a large size) when we click the X run the
            clearItemHandler method */}
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;