import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBf1lArib6dJnogj2IDIMRjZXSu5bwtSpY",
  authDomain: "slack-clone-d7f21.firebaseapp.com",
  databaseURL: "https://slack-clone-d7f21.firebaseio.com",
  projectId: "slack-clone-d7f21",
  storageBucket: "slack-clone-d7f21.appspot.com",
  messagingSenderId: "1095899948621",
  appId: "1:1095899948621:web:6544b275f84976d76d9e04",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
