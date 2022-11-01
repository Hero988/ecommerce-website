// import the style sheet
import './product-card.styles.scss'

// import the button
import Button from '../button/button.component'

// create the product card function and the get the product as the paramater 
const ProductCard = ({ product }) => {
    // get the name, price and imageURL from the product object
    const { name, price, imageUrl } = product;
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
            {/* the add to card button */}
            <Button buttonType={'inverted'}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;