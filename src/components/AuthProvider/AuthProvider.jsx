import { createContext, useEffect, useState } from "react"; 
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.iniit";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {

        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loggedInUser = (email, password) => {
        
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect( () => {

        

        const unSubscribe = onAuthStateChanged( auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }

    },[])

    const logOut = () => {

        setLoading(true)

        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        loggedInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {

    children: PropTypes.node
}

export default AuthProvider;