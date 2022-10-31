// importing useState to track the inputs
import { async } from "@firebase/util";
import { useState } from "react";
// import signInWithGooglePopup and createUserDocumentFromAuth and signInAuthUserWithEmailAndPassword methods
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss'

// this is the initialised values for these 4 values i.e. email password e.t.c
const defaultFormFields = {
    email: '',
    password: '',
}

// creating a very basic sign up form
const SignInForm = () => {
    // the defuaultFormFields object is the object for the formFields
    const [formFields, setFormFields] = useState(defaultFormFields);
    // destructure these 4 values i.e. displayName, email, password and confirmPassword
    const { email, password } = formFields;
    // resets the form
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    // getting the user to sign in with google
    const signInWithGoogle = async () => {
        // getting the response from the methdod
        await signInWithGooglePopup();
    }

    // when we submit the form run this function
    const handleSubmit = async (event) => {
        // we do not want any defaults i.e. all that is going to happen in the form we are going to handle
        event.preventDefault();
        // We need to now login the user
        try {
            // gets the response from the signInAuthUserWithEmailAndPassword from the firebase utils js file
            await signInAuthUserWithEmailAndPassword(email, password)
            // reset form fields
            resetFormFields();

        } catch (error) {
            // allows us to chose the error code
            switch(error.code) {
                // case means if the error.code is equal to the stated error code do something in the code
                case 'auth/wrong-password':
                // if the user enteres a wrong password for the email send an alert
                alert('incorrect password for email')
                // exit the code if the case is the same
                break;
                case 'auth/user-not-found':
                alert('no user associated with this email')
                break;
                default:
                console.log(error);   
            }  
        }
    }

    // when the input field changes do this function
    const handleChange = (event) => {
        // destructure the name from the event that we get and we can use this to tell which fields to update
        const { name, value } = event.target;
        // we are setting the form fields, we then update the appropiate fields
        setFormFields({ ...formFields, [name]: value });

    }

    return (
        <div className="sign-up-container">
            {/* sign up title */}
            <h2>Already have an account?</h2>
            <span>Sign in with your email and poassword </span>
            {/* onSubmit runs a callback once the form has been submitted */}
            <form onSubmit={handleSubmit}>
                {/* setting up the sign up form */}
                {/* the name will come through on the event, the required means that this is required and onchange means when there is a new input run the handleChange function 
                when you pass the value inside the text field the value should be the same. */}

                <FormInput label={"Email"} type={"email"} required onChange={handleChange} name="email" value={email} />

                <FormInput label={"Password"} type={"password"} required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    {/* button to signin */}
                    <Button type="submit">Sign In</Button>
                    {/* when clicked call signInWithGoogle method */}
                    <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;