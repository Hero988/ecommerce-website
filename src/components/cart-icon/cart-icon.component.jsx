// importing the svg file
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

// importing usecontex method from react
import { useContext } from 'react'

// importing CartContext hook
import { CartContext } from '../../contexts/cart.contex'


// import styles file
import './cart-icon.styles.scss'

// create the CartIcon function

const CartIcon = () => {
    // getting the setIsCartOpen method from the CartContext hook and the isCartOpen boolean. We then get the cartCount number
    const { iscartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    // this calls the setIsCartOpen method but it sets the opposite value of iscartOpen and this is called a toggle
    const toogleIsCartOpen = () => setIsCartOpen(!iscartOpen)

    return (
        // parent div (classnames can be targeted from the .scss file), when clicked run the toogleIsCartOpen function
        <div className='cart-icon-container' onClick={toogleIsCartOpen}> 
            {/* shopping icon */}
            <ShoppingIcon className='shopping-icon'/>
            {/* this holds the number of how many items are in the cart */}
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;