import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged,
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

   
const createUser = (email,password) =>{

    return createUserWithEmailAndPassword(auth,email,password);
}

 const signIn = (email,password)=>{
     
    return signInWithEmailAndPassword(auth,email,password);
  };
    const signout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
    signout

}

    return <AuthContext value={AuthData}>{children}</AuthContext>
       
};

export default AuthProvider;