// being able to use a context 
import { useContext } from 'react'

// get the react-router-doom hook from react (this allows us to get a navigate function)
import { useNavigate } from 'react-router-dom'

// import cart context 
import { CartContext } from '../../contexts/cart.contex'

// import style sheet
import './cart-dropdwon.styles.scss'

// importing the CartItem component
import CartItem from '../cart-item/cart-item.component'

// import button component
import Button from '../button/button.component'

// create the cart dropdown component
const CartDropdown = () => {
    // get the cartItems from our cartcontext
    const { cartItems } = useContext(CartContext);
    // this navigate function will allow us to go to a specific navigation i.e. /checkout
    const navigate = useNavigate();
    // handeler to go to the checkout 
    const goToCheckoutHandler = () => {
    // gets you to go to the checkout page
    navigate('/checkout');
    }

    return (
        // create the parent div
        <div className='cart-dropdown-container'>
            {/* shows the cart items */}
            <div className='cart-items' >
                {/* we need to map over cartItems and for every itme we map through we want to pass this to the cart item we also want to add a key */}
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            {/* create a button from the button component, once clicked run the goToCheckoutHandler function */}
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    )

}

export default CartDropdown