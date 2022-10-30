// import firebase.utils and get the signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect. auth methods
import { signInWithGooglePopup, 
        createUserDocumentFromAuth, 
    } from "../../../utils/firebase/firebase.utils"
// import sign up form
import SignUpForm from "../../sign-up-form/sign-up-form.component";

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
            <button onClick={logGoogleUser}>Sign in with google Popup</button>
            {/* call the sign up form component */}
            <SignUpForm />
        </div>
    )
}

export default SignIn