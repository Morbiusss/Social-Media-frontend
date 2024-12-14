import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVgZdwoM9QEt89vyQzMopM1YfQHhCZ21w",
  authDomain: "socialmedia-ec7a0.firebaseapp.com",
  projectId: "socialmedia-ec7a0",
  storageBucket: "socialmedia-ec7a0.firebasestorage.app",
  messagingSenderId: "1008316937603",
  appId: "1:1008316937603:web:b8b34b2ed2cb5a317132b6",
  measurementId: "G-FCMP2YJJ0S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

// Export the app and other Firebase-related items
export { app, auth, signInWithGoogle, db };
