import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8qLAURS0AC6MLXSIvWaXX9W5GfP5PdwE",
  authDomain: "code-cff9d.firebaseapp.com",
  databaseURL: "https://code-cff9d.firebaseio.com",
  projectId: "code-cff9d",
  storageBucket: "code-cff9d.appspot.com",
  messagingSenderId: "231516081798"
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase.initializeApp(config);
