import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBewoXYyA6-F70ixHK_II5JT0Xq2jU7dyA",
    authDomain: "quora-clone-68ab1.firebaseapp.com",
    projectId: "quora-clone-68ab1",
    storageBucket: "quora-clone-68ab1.appspot.com",
    messagingSenderId: "438447826262",
    appId: "1:438447826262:web:cbb5352eb05bdcb8e0a2f7",
    measurementId: "G-9S9P8FVEGJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;