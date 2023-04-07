

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    FacebookAuthProvider,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBewoXYyA6-F70ixHK_II5JT0Xq2jU7dyA",
    authDomain: "quora-clone-68ab1.firebaseapp.com",
    projectId: "quora-clone-68ab1",
    storageBucket: "quora-clone-68ab1.appspot.com",
    messagingSenderId: "438447826262",
    appId: "1:438447826262:web:cbb5352eb05bdcb8e0a2f7",
    measurementId: "G-9S9P8FVEGJ"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export {
    auth,
    db,
    googleProvider,
    facebookProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
};
