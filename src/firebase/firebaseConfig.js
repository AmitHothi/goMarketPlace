
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrc4CEnM3T0qQo4Cf0CCxZb9U8OrsM3zI",
  authDomain: "market-palce-login.firebaseapp.com",
  projectId: "market-palce-login",
  storageBucket: "market-palce-login.appspot.com",
  messagingSenderId: "1019691136482",
  appId: "1:1019691136482:web:d85db24c51df92f31cb5bb",
  measurementId: "G-3J69BS191V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider =  new GoogleAuthProvider(); 
 
export default app;
