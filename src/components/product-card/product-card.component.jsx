// import use context to use contexts
import { useContext } from 'react';

// import cartContext
import { CartContext } from '../../contexts/cart.contex';

// import the style sheet
import './product-card.styles.scss'

// import the button
import Button from '../button/button.component'

// create the product card function and the get the product as the paramater 
const ProductCard = ({ product }) => {
    // get the name, price and imageURL from the product object
    const { name, price, imageUrl } = product;

    // get the additemtocard method from the CartContext.jsx file
    const {addItemToCart} = useContext(CartContext);

    // add the product to cart function, call the addItemToCart function and pass the product through
    const addProductToCart = () => addItemToCart(product)

    return (
        // top level parent component
        <div className='product-card-container'>
            {/* image of the propduct */}
            <img src={imageUrl} alt={`${name}`} />
            {/* where we hold the footer items */}
            <div className='footer'>
                {/* pace where we put the name of the product */}
                <span className='name'>{name}</span>
                {/* pace where we put the price of the product */}
                <span className='price'>£{price}</span>
            </div>
            {/* the add to card button, whenever this butter gets clicked call the addProductToCart function*/}
            <Button buttonType={'inverted'} onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;