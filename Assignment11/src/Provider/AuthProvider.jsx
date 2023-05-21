import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Fairbase/Fairbase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)
    const auth = getAuth(app)


    const googleprovider = new GoogleAuthProvider();
    const creatUsers = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const google =() =>{
        setLoader(true)
        return signInWithPopup(auth,googleprovider)
    }
    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscrib =  onAuthStateChanged(auth,loggedUser =>{
              setUser(loggedUser)
              setLoader(false)
          })
          return () =>{
              unsubscrib()
          }
       },[auth])
    

    const authInfo = {
        user,
        loader,
        creatUsers,
        login,
        logOut,
        google
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;