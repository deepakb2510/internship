import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/* REACT_APP_FIREBASE_API_KEY this key should always be as a string eg. REACT_APP_FIREBASE_API_KEY =  "...key..." */
/* local env is created for development of project */

const app = firebase.initializeApp({
  apiKey: "AIzaSyDB3Xo015PCA90P9-Y4W-6GWMknd8YMloU",
  authDomain: "auth-development-d58b2.firebaseapp.com",
  projectId: "auth-development-d58b2",
  storageBucket: "auth-development-d58b2.appspot.com",
  messagingSenderId: "1011836262591",
  appId: "1:1011836262591:web:44e181fccb5d6b9f3a8e0a",
});
export const auth = app.auth();
const db = firebase.firestore();
export default app;
export { db };
