import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsx4jd0belPZiW3YInAMz1wrq_PzjRj-I",
  authDomain: "clone-c881a.firebaseapp.com",
  projectId: "clone-c881a",
  storageBucket: "clone-c881a.appspot.com",
  messagingSenderId: "1036648517972",
  appId: "1:1036648517972:web:2d934bb23b6522d6edf8c1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };