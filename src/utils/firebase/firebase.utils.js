// import firebase app (creates an app instance base on some kind of config)
import { initializeApp } from 'firebase/app';
// importing the authendication libaries
import { 
    // get the authdication method to be able to authdicate users
    getAuth, 
    // or sign in by allowing our application to redirect 
    signInWithRedirect,
    // either sign in using a popup 
    signInWithPopup, 
    // be able to sign in with google
    GoogleAuthProvider ,
    // be able to create a user using an email and password
    createUserWithEmailAndPassword
    // we can add as many providers i.e. facebook sign in  
} from 'firebase/auth'
// importing some methods from firestore database
import {
    // instantialte firestore instance
    getFirestore,
    // allows us to retrieve documents inside our documents database
    doc,
    // getting the documents data
    getDoc,
    // setting the documents data
    setDoc
} from 'firebase/firestore'

// this config is an object that allows us to attach this firebase app instance to that instance that we have online i.e. Ecommerce-Website
// Your web app's Firebase configuration. We do not need to worry about exposing this API keys
const firebaseConfig = {
    apiKey: "AIzaSyDiH5z8L_l-N3v-bH1NPo6Vd0c-cF6JCxg",
    authDomain: "ecommerce-website-5ab51.firebaseapp.com",
    projectId: "ecommerce-website-5ab51",
    storageBucket: "ecommerce-website-5ab51.appspot.com",
    messagingSenderId: "334825346683",
    appId: "1:334825346683:web:469e49ab03ccff6d31b4de"
};
  
  // Initialize Firebase. This config will let us run CRUD actions
  const firebaseApp = initializeApp(firebaseConfig);
  //  To use the google authendication we first need to initialies a provider (this is a class) We can have multiple different providers
  const googleProvider = new GoogleAuthProvider();
  //   We can tell the google auth provider how to behave
  googleProvider.setCustomParameters({
    // eveytime when someone interact with our provider we want to always force them to select an account
    prompt: "select_account"
  });

  //   call the getauth function and export this as the constant auth. Authendication is always the same
  export const auth = getAuth();
  //   call the signInWithPopup function and pass in the paramaters auth and provider and export this as the constant signInWithGooglePopup
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
   //   call the signInWithRedirect function and pass in the paramaters auth and provider and export this as the constant signInWithGoogleRedirect
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  // We need to create the database (directly points to the database)
  export const db = getFirestore()
  
  // the method creates the user from the authendication i.e. google authendication we are passing the userAuth key
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    // we need to see if there is an existing document reference, doc(theDatabase, collections, identifier (tells it what it wants i.e. uniqiue ID))
    const userDocRef = doc(db, 'users', userAuth.uid);
    // gets the document for the userDocRef variable 
    const userSnapshot = await getDoc(userDocRef)
    //  Check if user data exists, if user data does not exist 
    if(!userSnapshot.exists()) {
        // We are getting the displayName and email from the userAuth object
        const { displayName, email } = userAuth;
        // tracks when the user has created the account
        const createdAt = new Date();
        // I want to try something asynchronously if it does not work thow the error in the catch blow
        try {
            // I want to create/set the document with the data from userAuth in my collection
            await setDoc(userDocRef, {
                // set the display name 
                displayName,
                // set the email 
                email,
                // set the created at 
                createdAt,
                // spread the addional information, this is going to overwrite the null value
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    // if user data exists, then return the userDocRef
    return userDocRef;
}

// create an authendicated user using an email and password
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    // if we do not get an email or password don't run the function
    if(!email || !password) return;
    // this will create an authendicated user
    return await createUserWithEmailAndPassword(auth, email, password);

}