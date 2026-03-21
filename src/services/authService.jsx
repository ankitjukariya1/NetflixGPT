import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/config";

// Email Signup
export const signup = async(email, password) => {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email, password)).user;
    return user;
  } catch (error){
    console.log( error.message)
    return error;
  }
};

// Email Login
export const login = async (email, password) => {
  try {
    return (await signInWithEmailAndPassword(auth, email, password)).user;
  } catch (error) {
    return error;
  }
  
};

// Google Login
export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
   return  result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code; 
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    return error;
  });
};

// Logout
export const logout = () => {
  return signOut(auth);
};