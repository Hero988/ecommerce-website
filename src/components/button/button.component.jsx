// The 3 buttons:

// Default

// Inverted

// good sign in

import './button.styles.scss'

// changing the btton type based on the buttonType value
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


// button function, pass whatever is meant to be in the button as the children
const Button = ( {children, buttonType, ...otherProps} ) => {
    return (
        // clssname 
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;