import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA9vfccYPAY0MLiCoxuL1sS-3RFFpR99fE",
  authDomain: "whatsapp-clone-ff9e9.firebaseapp.com",
  projectId: "whatsapp-clone-ff9e9",
  databaseURL: "https://whatsapp-clone-ff9e9.firebaseio.com",
  storageBucket: "whatsapp-clone-ff9e9.appspot.com",
  messagingSenderId: "357119888941",
  appId: "1:357119888941:web:44d5835576d5fc592b32a4",
  measurementId: "G-L42P3H0L50",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
