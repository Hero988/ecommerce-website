// import fragment (this is what we get from react) (this is ued in the top level parent containing the component)
// Fragment is useful if you do not want to render a specific HTML element
import { Fragment } from "react"
// import the outlet component, Link is an anchor tag
import { Outlet, Link } from "react-router-dom"

// import the crown.svg image as a component
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'

// import naviagtion styles
import './navigation.styles.scss'

// Navigation component 
const Navigation = () => {
    return (
        // outside dive contains the entier page
      <Fragment>
        {/* the navigation bar itself */}
        <div className="navigation">
            {/* whatever you wrap in a link will give you the navigation functionality */}
            <Link className="logo-container" to='/'>
            {/* add the logo */}
            <CrwnLogo className="logo" />
            </Link>
          {/* hold all the possible links */}
          <div className="nav-links-container">
            {/* this link component is used to leverage proper routing, in order to tell the link where we want to go we give the to property */}
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {/* added a link to take us to the sign in page */}
            <Link className="nav-link" to='/sign-in'>
                SIGN IN 
            </Link>
          </div>
        </div>
        {/* Outlet means no matter what render this compoenent. I.e. in home/shop or /home always render this Navigation component, the thing that should always be present */}
        <Outlet />
      </Fragment>
    )
}

export default Navigation