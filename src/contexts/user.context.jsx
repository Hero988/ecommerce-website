// import the createContext method from react
import { createContext, useState , useEffect} from "react";

// import onAuthStateChangedListener method 
import { onAuthStateChangedListener, createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";

// this is the actual value you want to access, We then pass the default value in 
export const UserContext = createContext({
    // initialising the currentUser as null (we know when the currentUser is null)
    currentUser: null,
    // initialising the setCurrentUser (most basic function that returns null)
    setCurrentUser: () => null,
});

// this is the actual component and we recieve children from that. This provider is allowing any of its child components to access the values inside the useState
export const UserProvider = ({ children }) => {
    // we initalise the currentUser and setCurrentUser as null
    // the reason why this triggers is because of useState being called with the setFormFields function. A component re renders whenever its props change or state updates 
    // here the useState setFormFields function was called this currentUser function updates. That means any component that is listening for currentUser will update
    const [currentUser, setCurrentUser] = useState(null)
    // we then generate the value that is going to pass in the UserContext.Provider component
    const value = {currentUser, setCurrentUser};

    // only run this function once when the component mounts 
    useEffect(() => {
        // we will then call the onAuthStateChangedListener function. This will then pass the call back function as the second value of the onauthstatechanged
        // when a user signs in and signs out that is an auth changed and this callback is going to be called 
        // runs the callback whenever the state changes for example when we sign out we run the function 
       const unsubscribe =  onAuthStateChangedListener((user) => {
            // if the user is not null i.e. we get a user back 
            if(user) {
            // using that user to generate a user document 
            createUserDocumentFromAuth(user);
            }
            // we set the current user to whichever we get back i.e. if it is null we are signed out so we setCurrentUser to null
            setCurrentUser(user);
        })
        // run unsubscribe whenever you unmount to get rid of the. On the ubsucbribe method it will clean up the method
        return unsubscribe
    }, []);

    // we now need to return UserContext.provider. On every conetxt that gets built there is a .provider and this is the component that will wrap around any other components
    // that need access to the vlaues inside
    // this provider will recieve the value which is then going to hold the contextual values 
    return <UserContext.Provider value={value}>
        {/* we then just render the children */}
        {children}
    </UserContext.Provider>
}


// conext allows us to store data and then pass that data to the relevant components that need it
// this context is exposing the currentUser and the setCurrentUser from the useState externally 