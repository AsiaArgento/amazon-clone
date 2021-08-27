import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMbTTLSgqvaO1dUuoyc2yT7hhiaRuXTUc",
  authDomain: "clone-2e37c.firebaseapp.com",
  projectId: "clone-2e37c",
  storageBucket: "clone-2e37c.appspot.com",
  messagingSenderId: "64145761959",
  appId: "1:64145761959:web:e9ea919036aec17ec5dd82",
  measurementId: "G-J0Y9MV42WH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };