import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAt3YUtWae4PzAX1sbN6aoypybDdwpVAl8",
  authDomain: "whatsapp-clone-58605.firebaseapp.com",
  projectId: "whatsapp-clone-58605",
  databaseURL: "https://whatsapp-lone-58605.firebaseio.com",
  storageBucket: "whatsapp-clone-58605.appspot.com",
  messagingSenderId: "611532941250",
  appId: "1:611532941250:web:1e032727e9fe178bcb185b",
  measurementId: "G-PZSNLLN58N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
