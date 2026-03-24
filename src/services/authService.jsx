import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import auth  from "../firebase/config";

// Email Signup
export const signupUser = async(email, password) => {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email, password)).user;
    return {uid: user.uid,
    email: user.email,
    displayName: user.displayName,};
  } catch (error){
    console.log( error.message)
    throw error.code;
  }
};

// Email Login
export const loginUser = async (email, password) => {
  try {
    const user = (await signInWithEmailAndPassword(auth, email, password)).user;
    return {uid: user.uid,
    email: user.email,
    displayName: user.displayName,}
    
  } catch (error) {
    console.log(error.message)
    throw error.code;
  }
  
};

// Google Login
export const googleLoginUser = () => {
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
    throw errorCode;
  });
};

// Logout
export const logout = () => {
  return signOut(auth);
};