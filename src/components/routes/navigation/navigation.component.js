// import fragment (this is what we get from react) (this is ued in the top level parent containing the component)
// Fragment is useful if you do not want to render a specific HTML element
import { Fragment, useContext } from "react"
// import the outlet component, Link is an anchor tag
import { Outlet, Link } from "react-router-dom"

// import the crown.svg image as a component
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'

// import the signOutUser method
import { signOutUser } from "../../../utils/firebase/firebase.utils"

import { UserContext } from "../../../contexts/user.context"

// import naviagtion styles
import './navigation.styles.scss'

// Navigation component 
const Navigation = () => {
  // gets the actual value from current user. Our functional component is re rendered. User context as a hook tells this component, whenever a value in the useContext updates
  // re render me. Because we are leveraging currentUser value we are saying we want you to run my functional component again and re render me as the value in the user context
  // has updated.
  const { currentUser} = useContext(UserContext)

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
              {/* when there is a currentUser the I want you to render a different link */}
              {currentUser ? (
                // render the Sign Out link and when you click sign out it will run the signOutHandler function 
                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) 
                // if the current user does not exist then add the Sign In clink 
                : (
                <Link className="nav-link" to='/auth'>
                SIGN IN 
                </Link>
              )}
          </div>
        </div>
        {/* Outlet means no matter what render this compoenent. I.e. in home/shop or /home always render this Navigation component, the thing that should always be present */}
        <Outlet />
      </Fragment>
    )
}

export default Navigation