// import style sheet
import './cart-item.styles.scss'

// creating the cart item component function. The actual cartitem i.e. the name of the products, price of the product, picture of the product, quantity of how 
// many are in the cart
const CartItem = ({cartItem}) => {
    // destructure so we get the name
    const { name, quantity, imageUrl, price } = cartItem;


    return (
        // div to hold all the HTML
        <div className='cart-item-container'>
            {/* image of the item */}
            <img src={imageUrl} alt={`${name}`}/>
            {/* contain all the item details */}
            <div className='item-details'>
            {/* name of the item */}
            <span className='name'>{name}</span>
            {/* the price of the item and the quantity we have */}
            <span className='price'>{quantity} X £{price}</span>
            </div>

        </div>
    )
}

export default CartItem
