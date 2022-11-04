// import usecontext hook from react
import { useContext } from 'react'
// import styles 
import './checkout.styles.scss'
// import the cart context
import { CartContext } from '../../../contexts/cart.contex'
// import the checkout item component
import CheckoutItem from '../../checkout-item/checkout-item.component'


// create the checkout function
const Checkout = () => {
    // destructure cartitems  from cartcontext
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        // top level cdiv
        <div className='checkout-container'>
            {/* div holding the different headers at the row level i.e. name, quantity e.t.c */}
            <div className='checkout-header'>
                {/* the block container each individual header this is name */}
                <div className='header-block'>
                    {/* this is the name of the actual header */}
                    <span>Product</span>
                </div>
                {/* the block container each individual header this is the description of the product */}
                <div className='header-block'>
                    {/* this is the name of the actual header */}
                    <span>Description</span>
                </div>
                {/* the block container each individual header this is the quantity */}
                <div className='header-block'>
                    {/* this is the name of the actual header */}
                    <span>Quantity</span>
                </div>
                {/* the block container each individual header this is the total price for a specific item  */}
                <div className='header-block'>
                    {/* this is the name of the actual header */}
                    <span>Price</span>
                </div>
                {/* the block container each individual header this is to remove a cart item */}
                <div className='header-block'>
                    {/* this is the name of the actual header */}
                    <span>Remove</span>
                </div>
            </div>
                    {/* map through the cart items  */}
                    {cartItems.map((cartItem) => {
                        // return the checkoutItem the key is the id and the cart item is going to be the indivdidual item from the cartItems array 
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )
                    })}
                {/* the total price of eveything in the checkout */}
                <span className='total'>Total: £{cartTotal}</span>
        </div>
    )
}

export default Checkout