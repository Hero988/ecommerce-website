// import style sheet
import './cart-dropdwon.styles.scss'

// import button component
import Button from '../button/button.component'

// create the cart dropdown component
const CartDropdown = () => {
    return (
        // create the parent div
        <div className='cart-dropdown-container'>
            {/* shows the cart items */}
            <div className='cart-items' />
            {/* create a button from the button component */}
            <Button>CHECKOUT</Button>
        </div>
    )

}

export default CartDropdown