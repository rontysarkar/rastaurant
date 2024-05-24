import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosCommon from "../hooks/useAxiosCommon";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]  = useState()
    const [loading,setLoading] = useState(true)
    const AxiosCommon = useAxiosCommon()
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }
    const updateUserProfile = (name,photoURL)=>{
       return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photoURL
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('currentUser',currentUser)
            setUser(currentUser)
            if(currentUser){
                // set token 
                const userInfo = {email:currentUser.email}
                AxiosCommon.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                // token delete
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return ()=>{
           return unsubscribe()
        }
    },[AxiosCommon])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        signInGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;