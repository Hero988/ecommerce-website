// importing useState to track the inputs
import { async } from "@firebase/util";
import { useState } from "react";
// import createAuthUserWithEmailAndPassword and createUserDocumentFromAuth methods
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.styles.scss'

// this is the initialised values for these 4 values i.e. email password e.t.c
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

// creating a very basic sign up form
const SignUpForm = () => {
    // the defuaultFormFields object is the object for the formFields
    const [formFields, setFormFields] = useState(defaultFormFields);
    // destructure these 4 values i.e. displayName, email, password and confirmPassword
    const {displayName, email, password, confirmPassword} = formFields;

    // resets the form
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    // when we submit the form run this function
    const handleSubmit = async (event) => {
        // we do not want any defaults i.e. all that is going to happen in the form we are going to handle
        event.preventDefault();
        // we need to confirm if there passwords match
        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        // We need to now create the user
        try {
            // call the createAuthUserWithEmailAndPassword and pass in the email and password
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            // we have to pass the email and password into the final document that we are trying to generate 
            await createUserDocumentFromAuth(user, {displayName} );
            // reset form fields
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('cannot Create user, email already in use')
            }
            if(error.code === 'auth/weak-password') {
                alert('Password too weak, please make sure your password is least 6 characters')
            }
            console.log('user creation encountered an error', error);
        }

    }

    // when the input field changes do this function
    const handleChange = (event) => {
        // destructure the name from the event that we get and we can use this to tell which fields to update
        const {name, value} = event.target;
        // we are setting the form fields, we then update the appropiate fields
        setFormFields({...formFields, [name]: value});
        
    }

    return (
        <div className="sign-up-container">
            {/* sign up title */}
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and poassword </span>
            {/* onSubmit runs a callback once the form has been submitted */}
            <form onSubmit={handleSubmit}>
                {/* setting up the sign up form */}

                {/* the name will come through on the event, the required means that this is required and onchange means when there is a new input run the handleChange function 
                when you pass the value inside the text field the value should be the same. */}
                <FormInput label={"Display Name"} type={"text"} required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput  label={"Email"} type={"email"} required onChange={handleChange}name="email" value={email}/>

                <FormInput label={"Password"} type={"password"} required onChange={handleChange}name="password" value={password}/>

                <FormInput label={"Confirm Password"} type={"password"}  required onChange={handleChange}name="confirmPassword" value={confirmPassword}/>
                {/* button to submit the form */}
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;



    // since we now have hooked into the context. As long as useContext change this component will re run
    // if you have multiple components that listen to the context will then cause react to re run the function and it may not re render anything in the DOM. 
    // const val = useContext(useContext);