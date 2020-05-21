import firebase from "firebase/app"; //app is a firebase utility
import "firebase/auth"; //authentication
import "firebase/firestore"; //database

const config = {
  apiKey: "AIzaSyALogBzYGHddpVgm-TS0UcuRHzBAgEVPho",
  authDomain: "crwn-db-5bf71.firebaseapp.com",
  databaseURL: "https://crwn-db-5bf71.firebaseio.com",
  projectId: "crwn-db-5bf71",
  storageBucket: "crwn-db-5bf71.appspot.com",
  messagingSenderId: "667218934973",
  appId: "1:667218934973:web:4df7830d37252c13d14bd4",
  measurementId: "G-YNSZ3M91ZF",
};

firebase.initializeApp(config); //initialize the app with above config

export const auth = firebase.auth(); //export for later use
export const firestore = firebase.firestore(); //export for later use

//setup google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Firebase firestore
export const createUserProfileDocument = async (userAuthd, additionalData) => {
  if (!userAuthd) return;

  const userDocRef = firestore.doc(`users/${userAuthd.uid}`); //we get reference
  const userDocSnapshot = await userDocRef.get(); // we get snapshot
  console.log("userDocSnapshot", userDocSnapshot);
  console.log("userDocSnapshot data", userDocSnapshot.data());

  if (!userDocSnapshot.exists) {
    const { displayName, email } = userAuthd;
    const createdAt = new Date();
    try {
      await userDocRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef; // we may want to use the ref somewhere so returning
};

export default firebase;
