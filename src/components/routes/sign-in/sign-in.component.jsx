// import firebase.utils and get the signInWithGooglePopup method and the createUserDocumentFromAuth method
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils"

const SignIn = () => {
    // getting the user to sign in with google
    const logGoogleUser = async () => {
        // getting the response from the methdod
        const {user} = await signInWithGooglePopup();
        // using that response to generate a user
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            {/* when clicked use the logGoogleUser method */}
            <button onClick={logGoogleUser}>
                Sign in with google Popup
            </button>
        </div>
    )
}

export default SignIn