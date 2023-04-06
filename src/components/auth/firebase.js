

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    FacebookAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    onAuthStateChanged
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


const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);

        if (auth) {
            console.log(auth)
            return true;
        }
    } catch (err) {
        alert(err.message);
        return false;
    }
};
const signInWithFacebook = async () => {
    try {
        const res = await signInWithPopup(auth, facebookProvider);
        if (auth) {
            console.log(auth)
            return true;
        }
    } catch (err) {
        alert(err.message);
        return false;
    }
};


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        if (auth) {
            console.log(auth)
            return true;
        }
    } catch (err) {
        alert(err.message);
        return false;
    }
};


const printAuth = () => {
    console.log(auth)
}


const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (auth) {
            console.log(auth)
            return true;
        }
    } catch (err) {
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
        return true;
    } catch (err) {
        alert("Email not found, Please check your email.");
        return false;
    }
};


const logout = () => {
    signOut(auth);
};


export {
    auth,
    db,
    signInWithGoogle,
    signInWithFacebook,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
