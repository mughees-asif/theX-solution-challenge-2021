import firebase from "firebase/app";
import firebaseui from "firebaseui";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCnL3J3PRduaUMDKyosN6_Rf-koptGsJoA',
  authDomain: "thex-solution.firebaseapp.com",
  projectId: "thex-solution",
  storageBucket: "thex-solution.appspot.com",
  messagingSenderId: "510644704471",
  appId: "1:510644704471:web:4871b2b803ffa2efbf0c92",
  measurementId: "G-EC74GT9YED"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Initialize the FirebaseUI Widget using Firebase.
// export const ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Other config options...
// });