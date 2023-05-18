import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Fairbase/Fairbase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)
    const auth = getAuth(app)

    const creatUsers = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
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
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;