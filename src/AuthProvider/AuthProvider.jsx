import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,

} from "firebase/auth";
import app from "../../firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoggle = () => {
  return signInWithPopup(auth, googleProvider);
};

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
const createUser = (email,password) =>{
     setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

 const signIn = (email,password)=>{
     setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  };
    const signout = () => {
    return signOut(auth);
  };
  const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
const AuthData = {
    user,
    setUser,
    createUser,
    signIn,
    signInWithGoggle,
    signout,
    loading,
    resetPassword

}

    return <AuthContext value={AuthData}>{children}</AuthContext>
       
};

export default AuthProvider;