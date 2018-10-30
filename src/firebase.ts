import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA8qLAURS0AC6MLXSIvWaXX9W5GfP5PdwE",
  authDomain: "code-cff9d.firebaseapp.com",
  databaseURL: "https://code-cff9d.firebaseio.com",
  projectId: "code-cff9d",
  storageBucket: "code-cff9d.appspot.com",
  messagingSenderId: "231516081798"
};

export default firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });
