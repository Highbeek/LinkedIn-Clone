import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj3v6XanQuHE575OWA_jiMyEBQQd3DvCM",
  authDomain: "linkedin-clone-eeccd.firebaseapp.com",
  projectId: "linkedin-clone-eeccd",
  storageBucket: "linkedin-clone-eeccd.appspot.com",
  messagingSenderId: "79362671953",
  appId: "1:79362671953:web:60b0c85f7919d61c547f70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

